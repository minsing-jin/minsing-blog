---
title: "RAGchain Benchmark 3줄정리"
pubDatetime: 2023-12-14T05:57:36.548Z
description: "benchmark 간단정리"
category: "RAGchain"
canonicalURL: "https://velog.io/@minsing-jin/RAGchain-Benchmark-3줄정리"
velogSeries: ["RAGchain"]
---

![](/images/velog/b295771b7e3431c1.png)

# MSMARCO
Bing에서 사람들이 검색한 question들에 대한 결과로 bing 검색엔진이 뽑아온 top-k개의 web document들의 passage들과 사람이 그 passage들중 의미있는 것을 참고하여 작성한 answer들이 있다. 
answer을 작성할때 참고한 web document들은 is_selected에서 binary로 라벨링을 따로 해줬다. 답변을 할 수 없는 question에 대해서는 answer가 비어있다.
Msmarco dataset의 version은 1.1과 2.1이 있으며 2.1은 1.1에 비해서 더 많고 정제된 question들과 answer들로 이루어져있으며 question에 대한 정답을 못하는 answer들도 더 추가되었다.

## GitHub link
https://github.com/microsoft/MSMARCO-Question-Answering 

## Paper
https://arxiv.org/abs/1611.09268 

-----

# Mr.tydi
Tydi dataset의 한계를 보완한 Mr.tydi는 multi-lingual benchmark이며 11개의 언어로 이루어져있다. Query-positive passage-negative passage들로 train validation test 분리된 Mr.tydi과 
passage들과 passage id로 이루어진 mr.tydi corpus 데이터셋이 있다. 각 언어로 이루어진 mr.tydi와 mr.tydi corpus dataset은 번역본이 아닌 독립적인 query와 passage들로 이루어져 있다.
Passage는 annotator들이 top wikipedia article에 대해서 passage들의 relevancy를 최소한의 답변법위를 바탕으로 답변을 만들어냈다.
 Positive passage는 질문에 대한 단서를 얻을 수 있는 passage이고, negative passage는 question에 대해서 mr.tydi corpus에서 tuned BM25모델이 뽑아낸 
Top-30개의 candidate passages result들이며 이 안에는 positive passage가 포함 되어있을수도 있고 없을 수도 있다.

dataset에 대한 설명은 huggingface에서 더 잘 설명되어있다.

## Huggingface
https://huggingface.co/datasets/castorini/mr-tydi 

## Github
https://github.com/castorini/mr.tydi?tab=readme-ov-file#baselines-and-evaluation 

## Paper
https://arxiv.org/abs/2108.08787 


----

# BEIR dataset
다양한 ir task들을 다양한 benchmark이다. 9개의 task들로 분류되는 18개의 dataset들이 있다. Queries-corpus-qrels로 이루어져있으며 qrels중 0은 non relevant이며 
qrels가 binary일수도 있고, 연속적인 수일수도 있다. 숫자가 클수록 query에 대한 relevancy가 더 큰 corpus라고 볼 수 있다. Taks들은 다음과 같다.
* Fact-checking: FEVER, Climate-FEVER, SciFact
* Question-Answering: NQ, HotpotQA, FiQA-2018
* Bio-Medical IR: TREC-COVID, BioASQ, NFCorpus
* News Retrieval: TREC-NEWS, Robust04
* Argument Retrieval: Touche-2020, ArguAna
* Duplicate Question Retrieval: Quora, CqaDupstack
* Citation-Prediction: SCIDOCS
* Tweet Retrieval: Signal-1M
* Entity Retrieval: DBPedia


## Tutorial
https://github.com/beir-cellar/beir/wiki/Examples-and-tutorials#beers-benchmarking-evaluation 

## Github
https://github.com/beir-cellar/beir  

## Paper
https://openreview.net/forum?id=wCu6T5xFjeJ 

-------

# NaturalQA
구글 검색 엔진에서 기반한 query들과 annotator들이 query와 관련된 top 5개의 Wikipedia page corpus, 그리고 corpus에서 참고하여 annotator들이 만든 long answer과 short answer들로 이루어져있다.
Raw data에서 corpus들은 html로 되어있고, long answer들과 short answer들은 각각 start token과 end token형식으로 되어있다.

## Github
https://github.com/google-research-datasets/natural-questions 

## Paper
https://paperswithcode.com/paper/natural-questions-a-benchmark-for-question/
