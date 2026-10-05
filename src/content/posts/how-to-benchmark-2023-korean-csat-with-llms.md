---
title: "How to Benchmark 2023 Korean CSAT with LLMs"
pubDatetime: 2024-11-18T06:36:56.323Z
description: "🔧 How to Benchmark 2023 Korean CSAT with LLMs\\n\\nWe’ve developed experimental code for benchmarking the 2023 Korean CSAT Language section. Use this to estimate the performance of your desired models be..."
category: "Founder Notes"
canonicalURL: "https://velog.io/@minsing-jin/How-to-Benchmark-2023-Korean-CSAT-with-LLMs"
velogSeries: ["영어홍보글"]
---

# 🔧 [How to Benchmark 2023 Korean CSAT with LLMs](https://github.com/Marker-Inc-Korea/Korean-SAT-LLM-Leaderboard/blob/main/korean_sat_mini_test/manual/En_manual.md)

We’ve developed experimental code for benchmarking the 2023 Korean CSAT Language section. Use this to estimate the performance of your desired models before submitting them officially!

---

## 🏁 Quick Start Guide

![](/images/velog/faaf7424af6c97d4.png)

1. **Install `AutoRAG`:**
   ```bash
   pip install AutoRAG
   ```

2. **Set your OpenAI API Key:**
   Add your OpenAI API key as an environment variable in `.env`.

3. **Convert JSON data into AutoRAG datasets:**
   Run the `make_autorag_dataset.ipynb` notebook to prepare the data.

4. **Edit prompts and models in `autorag_config.yaml`:**
   Customize prompts and add models. [Instructions here](https://github.com/minsing-jin/Korean-SAT-LLM-Leaderboard/blob/main/korean_sat_mini_test/Kor_manual.md#-how-to-replace-prompt-and-model).

5. **Run the benchmark:**
   Execute the script to run the benchmark.
   ```bash
   python ./korean_sat_mini_test/autorag_run.py --qa_data_path ./data/autorag/qa_2023.parquet --corpus_data_path ./data/autorag/corpus_2023.parquet
   ```

   - To update models or prompts before running, refer to [this guide](https://github.com/minsing-jin/Korean-SAT-LLM-Leaderboard/blob/main/korean_sat_mini_test/Kor_manual.md#-how-to-replace-prompt-and-model).

6. **Check the results:**
   Results are saved in the `autorag_project_dir` folder.

7. **View your grade report:**
   Open `grading_report_card.ipynb` to generate and view your performance report. Reports are saved in the `data/result/` folder.

---

## 🤷 How to Modify Prompts and Models?

![](/images/velog/212dde920c842bf3.png)

- Open the `autorag_config.yaml` file in the `korean_sat_mini_test` folder.

### [Case 1] Modifying the Prompt:
Edit the `node_type: prompt_maker` section to customize the `prompt` content.

Example:
```yaml
    - node_type: prompt_maker
      strategy:
        metrics:
          - metric_name: kice_metric
      modules:
        - module_type: fstring
          prompt:
          - |            
            Answer the given question.
            Read paragraph, and select only one answer between 5 choices.
            
            paragraph :
            {retrieved_contents}
            
            question of problem :
            {query}
            
            Answer : 3
```

---

### [Case 2] Adding or Replacing Models:
Modify the `node_type: generator` section to configure models.

#### OpenAI Models:
- Set `module_type` to `openai_llm`.
- Specify desired OpenAI models in the `llm` field.

Example:
```yaml
- node_type: generator
  strategy:
    metrics:
      - metric_name: kice_metric
  modules:
    - module_type: openai_llm
      llm: [gpt-4o-mini, gpt-4o]
      batch: 5
```

#### HuggingFace Models:
- Set `module_type` to `llama_index_llm`.
- Use `huggingfacellm` in `llm`.
- Specify HuggingFace models in the `model` field.

Example:
```yaml
- node_type: generator
  strategy:
    metrics:
      - metric_name: kice_metric
  modules:
    - module_type: llama_index_llm
      llm: huggingfacellm
      model: HumanF-MarkrAI/Gukbap-Qwen2-7B
```

For more advanced customization, refer to the [AutoRAG Documentation](https://docs.auto-rag.com/local_model.html).

---

## 📒 Notes:
- The default prompts included in this experiment are minimal and may differ from those used in the official leaderboard benchmark.
  - To enhance performance, customize the prompt in the YAML file as needed.
  
Now you're ready to explore and evaluate your models against 2023 Korean CSAT benchmarks! 🎯
