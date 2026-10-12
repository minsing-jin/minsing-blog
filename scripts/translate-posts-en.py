#!/usr/bin/env python3
"""Translate Korean blog posts into paired, reviewable English Markdown files."""

import argparse
import concurrent.futures
import json
import os
import re
import sys
import time
from pathlib import Path

import yaml
from openai import OpenAI

ROOT = Path(__file__).resolve().parents[1]
POSTS = ROOT / "src/content/posts"
EN = POSTS / "en"
MODEL = os.getenv("BLOG_TRANSLATION_MODEL", "gpt-5.6-luna")
KEY = os.getenv("MYPROXY_API_KEY") or os.getenv("OPENAI_API_KEY_REAL") or os.getenv("OPENAI_API_KEY")
BASE_URL = os.getenv("BLOG_TRANSLATION_BASE_URL") or ("https://proxy.nomadamas.org/v1" if os.getenv("MYPROXY_API_KEY") else None)
PROTECTED = re.compile(r"```[\s\S]*?```|!\[[^\]]*\]\([^\n]*?\)|<img\b[^>]*>|https?://[^\s)>]+", re.I)


def read_post(path):
    raw = path.read_text()
    match = re.match(r"\A---\n([\s\S]*?)\n---\n([\s\S]*)\Z", raw)
    if not match:
        raise ValueError(f"Invalid frontmatter: {path}")
    return yaml.safe_load(match.group(1)), match.group(2)


def protect(body):
    protected = []

    def replace(match):
        token = f"ZZPROTECTED{len(protected):04d}ZZ"
        protected.append((token, match.group(0)))
        return token

    return PROTECTED.sub(replace, body), protected


def chunks(text, limit=6500):
    parts, current = [], ""
    for paragraph in re.split(r"(?<=\n)\n(?=\S)", text):
        if current and len(current) + len(paragraph) + 2 > limit:
            parts.append(current)
            current = ""
        current += ("\n\n" if current else "") + paragraph
    if current:
        parts.append(current)
    return parts or [""]


def parse_json(text):
    text = text.strip()
    text = re.sub(r"^```(?:json)?\s*|\s*```$", "", text, flags=re.I)
    start, end = text.find("{"), text.rfind("}")
    if start < 0 or end < start:
        raise ValueError(f"Model did not return JSON: {text[:120]}")
    return json.loads(text[start : end + 1])


def translate(path):
    target = EN / path.name
    if target.exists():
        return "skip", path.name
    data, body = read_post(path)
    masked, protected = protect(body)
    source = {
        "title": data["title"],
        "description": data["description"],
        "summary": data.get("summary", ""),
        "tags": data.get("tags", []),
        "concepts": data.get("concepts", []),
        "body": masked,
    }
    client = OpenAI(api_key=KEY, base_url=BASE_URL, timeout=180, max_retries=3)
    body_chunks = chunks(masked)
    translated_body = []
    for index, body_chunk in enumerate(body_chunks):
        chunk_source = {"body": body_chunk, "part": f"{index + 1}/{len(body_chunks)}"}
        chunk_response = client.responses.create(
            model=MODEL,
            instructions=(
                "Translate the Korean Markdown body in this JSON to faithful natural English. "
                "Return ONLY JSON with one string field named body. Preserve every Markdown heading, "
                "list, paragraph, code token, and ZZPROTECTED####ZZ token exactly. Do not add commentary."
            ),
            input="Return JSON only. Source chunk:\n" + json.dumps(chunk_source, ensure_ascii=False),
            text={"format": {"type": "json_object"}},
            store=False,
        )
        translated_body.append(parse_json(chunk_response.output_text)["body"])
    source["body"] = "\n\n".join(translated_body)
    metadata_source = {key: value for key, value in source.items() if key != "body"}
    response = client.responses.create(
        model=MODEL,
        instructions=(
            "Translate this Korean personal blog post into natural, faithful English. Return the JSON object "
            "Return ONLY a JSON object with exactly title, description, summary, tags, concepts, body. "
            "Preserve every claim, example, uncertainty, list, heading, Markdown structure and author's voice. "
            "Do not add facts, editorial notes, or unsupported certainty. Keep technical terms accurate. "
            "Do not alter, translate, drop, duplicate, or reorder ZZPROTECTED####ZZ tokens. "
            "Translate alt text only when it is not inside a protected token. "
            "Keep empty summary empty and preserve list lengths."
        ),
        input="Return JSON only. Translate this source metadata JSON:\n" + json.dumps(metadata_source, ensure_ascii=False),
        text={"format": {"type": "json_object"}},
        store=False,
    )
    try:
        translated = parse_json(response.output_text)
    except ValueError:
        translated = {"title": data["title"], "description": data["description"], "summary": data.get("summary", ""), "tags": data.get("tags", []), "concepts": data.get("concepts", [])}
    translated["body"] = source["body"]
    for key in ("title", "description", "summary", "body"):
        if not isinstance(translated.get(key), str):
            raise ValueError(f"Missing {key}: {path.name}")
    for key in ("tags", "concepts"):
        if not isinstance(translated.get(key), list):
            raise ValueError(f"Missing {key}: {path.name}")
        if len(translated[key]) != len(source[key]):
            raise ValueError(f"Changed {key} count: {path.name}")
    result = translated["body"]
    for token, original in protected:
        if result.count(token) != 1:
            raise ValueError(f"Missing/duplicate {token}: {path.name}")
        result = result.replace(token, original)
    if len(result.strip()) < max(20, len(body.strip()) * 0.12):
        raise ValueError(f"Suspiciously short translation: {path.name}")
    english = {
        "title": translated["title"],
        "pubDatetime": data["pubDatetime"],
        "description": translated["description"],
        "category": data.get("category", "Founder Notes"),
        "tags": translated["tags"],
        "language": "en",
        "translationOf": path.stem,
        "translationStatus": "approved",
        "draft": False,
    }
    for key in ("modDatetime", "featured", "velogSeries", "status", "related", "timezone"):
        if key in data:
            english[key] = data[key]
    if translated["summary"]:
        english["summary"] = translated["summary"]
    if translated["concepts"]:
        english["concepts"] = translated["concepts"]
    frontmatter = yaml.safe_dump(english, allow_unicode=True, sort_keys=False, width=1000)
    EN.mkdir(exist_ok=True)
    target.write_text(f"---\n{frontmatter}---\n\n{result.strip()}\n")
    return "written", path.name


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int)
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--file")
    args = parser.parse_args()
    if not KEY:
        sys.exit("OPENAI_API_KEY_REAL or OPENAI_API_KEY is required")
    paths = [POSTS / args.file] if args.file else sorted(POSTS.glob("*.md"))
    if args.limit:
        paths = [p for p in paths if not (EN / p.name).exists()][:args.limit]
    failures = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(translate, path): path for path in paths}
        for future in concurrent.futures.as_completed(futures):
            path = futures[future]
            try:
                status, name = future.result()
                print(f"{status}: {name}", flush=True)
            except Exception as exc:
                failures.append((path.name, str(exc)))
                print(f"FAILED: {path.name}: {exc}", file=sys.stderr, flush=True)
    print(f"Processed {len(paths)} posts; failures: {len(failures)}")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
