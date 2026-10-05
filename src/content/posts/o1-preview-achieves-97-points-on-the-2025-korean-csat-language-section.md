---
title: "o1-preview Achieves 97 Points on the 2025 Korean CSAT Language Section!"
pubDatetime: 2024-11-18T06:34:45.900Z
description: "csat eng.ver"
category: "영어홍보글"
canonicalURL: "https://velog.io/@minsing-jin/o1-preview-Achieves-97-Points-on-the-2025-Korean-CSAT-Language-Section"
velogSeries: ["영어홍보글"]
---

![](/images/velog/0b5ab1cce234ebd5.png)

### [GPT 2025 CSAT LLM Benchmark Evaluation Results](https://github.com/Marker-Inc-Korea/Korean-SAT-LLM-Leaderboard/blob/main/Korean_README.md#-notice-25-%EC%88%98%EB%8A%A5-1%EA%B0%9C%EB%85%84-%EB%AA%A8%EB%8D%B8-%EC%84%B1%EB%8A%A5-%EB%B9%84%EA%B5%90-%EA%B2%B0%EA%B3%BC)

|  Rank  |       Model Name       | Raw Score | Estimated Grade (as of 2025.11.18) |
|:------:|:----------------------:|:---------:|:---------------------------------:|
| 🥇1st  |     o1-Preview         |    97     |               1st Grade          |
| 🥈2nd  |       o1-mini          |    78     |               4th Grade          |
| 🥉3rd  |        gpt-4o          |    75     |               4th Grade          |
|  4th   |     gpt-4o-mini        |    59     |               5th Grade          |
|  5th   |   gpt-3.5-turbo        |    16     |               8th Grade          |

o1-preview has achieved a score of 97 on the 2025 Korean CSAT (College Scholastic Ability Test) for the Korean Language section! This remarkable performance, with only one question wrong, demonstrates a significant advancement in LLM capabilities. Evaluating LLMs with the most authoritative Korean language assessment, the CSAT, revealed that the o1-preview model is nearly perfect in understanding Korean language.

Previously, gpt-4o had achieved an average grade of 3rd grade and a top score of 86 points in the 10-year CSAT leaderboard. This highlighted the gap between LLMs and human language proficiency. 

However, the o1-preview model scored 88 points and ranked in the 1st grade in the 2024 CSAT, demonstrating parity with highly proficient human performance. Now, with a score of 97 in the 2025 CSAT, it suggests that the era when LLMs surpass human language abilities may not be far off.

---

## 🪑 Background and Purpose of the Benchmark
The benchmark originated from the [Nomadamas Project](https://github.com/NomaDamas/KICE_slayer_AI_Korean), which aimed to achieve the highest score in the Korean CSAT language section using LLMs. With the advent of GPT-4 and advancements in prompt engineering, the project sought to tackle the challenging questions created by KICE (Korea Institute for Curriculum and Evaluation).

![](/images/velog/a9cfe0f7f36e3bd4.png)

Nomadamas’ project experimented with extensive prompt engineering to create optimal prompts. This year's focus shifted to comparing the performance of various LLMs, culminating in the creation of the [Korean CSAT LLM Leaderboard](https://github.com/Marker-Inc-Korea/Korean-SAT-LLM-Leaderboard/blob/main/Korean_README.md).

### Key Objectives:
1. Share benchmark data comparing human performance and LLM performance.
2. Utilize Korea’s most authoritative dataset for evaluating Korean language proficiency, curated by KICE.
3. Prevent data leakage by using updated, annual CSAT language benchmark datasets.

---

## 🧪 Experimental Methods
### 1️⃣ Dataset Compilation and Parsing
Collected data from the Korean CSAT from 2015 to 2024, extracting text from the CSAT PDFs and organizing them into:
- **Questions**
- **Passages**
- **Answer choices**
- **Answer keys**

Specific references like [A] or [B] were enclosed in parentheses, while tables or images were replaced with written descriptions. 


The JSON files generated were parsed into QA and corpus datasets optimized for **AutoRAG**.

[Details on dataset construction can be found here](https://github.com/NomaDamas/KICE_slayer_AI_Korean?tab=readme-ov-file#ii-%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%99%94).

---

### 2️⃣ Benchmarking with [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG)
**AutoRAG** is a tool that automatically optimizes RAG pipelines for specific datasets. It supports:
- Easy access to various models via YAML configurations.
- The **GOAT function**, which enables swapping prompts seamlessly, making it ideal for the CSAT benchmark leaderboard.

A mini-test feature was also added to allow users to check the performance of models on 2023 CSAT data. [Try the mini-test](https://github.com/Marker-Inc-Korea/Korean-SAT-LLM-Leaderboard/blob/main/korean_sat_mini_test/manual/Kor_manual.md)!

---

### 3️⃣ Evaluation
The models' answers were evaluated for accuracy against a predefined answer key. Adherence to the standardized answer format was enforced, ensuring objective scoring.

---

### 4️⃣ Scoring and Leaderboard Composition
Leaderboard rankings were determined based on the average standardized scores, reflecting each year's difficulty.

---

## Future Directions
1. **Ongoing Benchmarking**: With sufficient GPU resources and inference budgets, more models will be benchmarked and added to the leaderboard.
2. **Annual Updates**: If resources allow, a new dataset and benchmark will be created every year to assess LLM performance on the latest CSAT questions.
