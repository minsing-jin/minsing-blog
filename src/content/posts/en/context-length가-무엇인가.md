---
title: What is context length?
pubDatetime: 2023-12-06 17:06:11.355000+00:00
description: It is the number of tokens an LLM can process at once. It is the maximum length of an input sequence for an LLM. A nice explanation. This is important because 1. A model cannot exceed the context length when summarizing articles. 2. Long-term planning ta
category: Data & ML
tags: []
language: en
translationOf: context-length가-무엇인가
translationStatus: approved
draft: false
velogSeries:
- RAGchain
---

# Conclusion
It is the number of tokens an LLM can process at once. It is the maximum length of an input sequence for an LLM.
[Clear explanation](https://agi-sphere.com/context-length/)


This is important because
1. A model cannot exceed the context length when summarizing articles.


2. Long-term planning tasks require long input sequences.


3. Longer and more complex inputs can generate richer output content.


4. Memory issues
For the reasons above, a context length serving as a reference point is needed.



# Is a larger context length always better?
A larger context length increases the model's comprehension ability, but it can be costly in practice, and the model's performance may be lower than expected. In addition, answer quality may decline and the risk of hallucinations may increase.
[Clear explanation](https://moon-walker.medium.com/llm%EC%9D%98-context-window-size%EA%B0%80-%ED%81%AC%EB%8B%A4%EA%B3%A0-%EC%A2%8B%EC%9D%80-%EA%B2%83%EC%9D%BC%EA%B9%8C-57870a3e315e)




# Situation
A problem arose in which testing the RAGchain beir benchmark took more than an hour. When benchmarking 7 datasets at once, it kept running because the ragas metric in calculate metric exceeded its token limit. 


Because the context length was exceeded, it kept retrying, and the solutions were:


1. Switch to a model with a larger context length.


2. Do not use the ragas metric.
