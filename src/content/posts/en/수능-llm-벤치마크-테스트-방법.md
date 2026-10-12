---
title: How to Benchmark an LLM on the CSAT
pubDatetime: 2024-11-18 04:32:22.371000+00:00
description: How many points can my model score on the CSAT?
category: Build Log
tags: []
language: en
translationOf: 수능-llm-벤치마크-테스트-방법
translationStatus: approved
draft: false
velogSeries:
- Playground
---

![](/images/velog/25f2a6b874fac92a.png)


# [How to Benchmark the 2023 CSAT](https://github.com/Marker-Inc-Korea/Korean-SAT-LLM-Leaderboard/blob/main/korean_sat_mini_test/manual/Kor_manual.md)


We created experimental code to benchmark the 2023 CSAT! 
If you want to find out roughly how well a model you are curious about performs before submitting it, give it a try!



## 🏁 Quick Start
![](/images/velog/faaf7424af6c97d4.png)


1. Install `AutoRAG`.
    ```bash
    pip install AutoRAG
   ```
2. Set the OpenAI API KEY as an environment variable in `.env`.
3. Run `make_autorag_dataset.ipynb` to convert the JSON data into an AutoRAG dataset.
4. Configure the prompt and the models to add in `autorag_config.yaml`. [How to configure](https://github.com/minsing-jin/Korean-SAT-LLM-Leaderboard/blob/main/korean_sat_mini_test/Kor_manual.md#-how-to-replace-prompt-and-model)
5. Run `autorag_run.py`.
    ```bash
    python ./korean_sat_mini_test/autorag_run.py --qa_data_path ./data/autorag/qa_2023.parquet --corpus_data_path ./data/autorag/corpus_2023.parquet
    ```
   - If you want to change the model and prompt before running, [refer to the explanation below](https://github.com/minsing-jin/Korean-SAT-LLM-Leaderboard/blob/main/korean_sat_mini_test/Kor_manual.md#-how-to-replace-prompt-and-model)


6. Check the results in the `autorag_project_dir` folder.
7. Run `grading_report_card.ipynb` to check your scorecard!
   - The scorecard results are saved in the `data/result/` folder!
---




## 🤷 How to change prompt and model?
![](/images/velog/212dde920c842bf3.png)


- Open the `autorag_config.yaml` file in the `korean_sat_mini_test` folder.


### [Case 1] How to edit the prompt
1. In `autorag_config.yaml`, modify the content of `prompt` in the `prompt_maker` section under `node_type`.


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


### [Case 2] How to configure the YAML file when you want to change the model
1. You need to modify the `Modules` section in the `generator` section of `node_type`. 


##### <OpenAI model>
- Set `module_type` to `openai_llm`
- Freely set OpenAI models in `llm`
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


##### <HuggingFace LLM model>
- Set `module_type` to `llama_index_llm`
- Set `llm` to `huggingfacellm`
- Freely set Hugging Face models in `model`


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
If you want to learn more about customizing the YAML file beyond Hugging Face models, please refer to the [official AutoRAG documentation](https://docs.auto-rag.com/local_model.html)!




#### 📒 Notice
- The prompts currently included in the experiment are minimal prompts and differ from the prompts shown on the benchmark leaderboard. Therefore, the benchmark leaderboard results and performance in actual testing may differ.
  - If you want to modify the prompt, edit it in the YAML file!
