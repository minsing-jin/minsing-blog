// Build-time font fetches are deduped per (family, weight, text) so multiple
// OG endpoints sharing parameters do not re-hit Google Fonts.
const fontCache = new Map<string, Promise<ArrayBuffer>>();

export function loadGoogleFont(
  family: string,
  text: string,
  weight: number
): Promise<ArrayBuffer> {
  const key = `${family}:${weight}:${text}`;
  const cached = fontCache.get(key);
  if (cached) return cached;

  const promise = fetchGoogleFont(family, text, weight).catch(err => {
    fontCache.delete(key);
    throw err;
  });
  fontCache.set(key, promise);
  return promise;
}

async function fetchGoogleFont(
  family: string,
  text: string,
  weight: number
): Promise<ArrayBuffer> {
  // Old Firefox UA makes Google Fonts serve TTF (satori cannot parse woff2).
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; rv:10.0) Gecko/20100101 Firefox/10.0",
      },
    }
  ).then(r => r.text());

  const m = css.match(/src: url\((.+?)\)/);
  if (!m) throw new Error(`font fetch failed: ${family}`);

  return fetch(m[1]).then(r => r.arrayBuffer());
}
