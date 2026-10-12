---
title: 'RAGchain Benchmark: 3-Line Summary'
pubDatetime: 2023-12-14 05:57:36.548000+00:00
description: Brief benchmark summary
category: Data & ML
tags: []
language: en
translationOf: ra-gchain-benchmark-3-줄정리
translationStatus: approved
draft: false
velogSeries:
- RAGchain
---

![](/images/velog/b295771b7e3431c1.png)


# MSMARCO
For questions people searched for on Bing, it contains passages from the top-k web documents retrieved by the Bing search engine, along with answers written by people with reference to the meaningful passages among them. 
The web documents referenced when writing the answers were separately labeled in binary in is_selected. For questions that cannot be answered, the answer is empty.
The Msmarco dataset has versions 1.1 and 2.1. Compared to 1.1, 2.1 consists of a larger number of more refined questions and answers, and also includes more answers for questions that cannot be answered correctly.


## GitHub link
https://github.com/microsoft/MSMARCO-Question-Answering 


## Paper
https://arxiv.org/abs/1611.09268 


-----


# Mr.tydi
Mr.tydi, which addresses the limitations of the Tydi dataset, is a multilingual benchmark consisting of 11 languages. There is a Mr.tydi dataset split into train, validation, and test sets, consisting of query-positive passage-negative passage triples, and a mr.tydi corpus dataset consisting of passages and passage IDs. The mr.tydi and mr.tydi corpus datasets for each language consist of independent queries and passages, not translations.
For the top Wikipedia articles, annotators created answers based on the relevance of the passages and the minimum answer span.
A positive passage is a passage from which clues to the answer to the question can be obtained, while negative passages are the top-30 candidate passage results retrieved by a tuned BM25 model from the mr.tydi corpus for the question; these may or may not include a positive passage.


the dataset is explained in more detail on Hugging Face.


## Huggingface
https://huggingface.co/datasets/castorini/mr-tydi 


## Github
https://github.com/castorini/mr.tydi?tab=readme-ov-file#baselines-and-evaluation 


## Paper
https://arxiv.org/abs/2108.08787 



----


# BEIR dataset
It is a diverse benchmark for various IR tasks. There are 18 datasets classified into 9 tasks. They consist of queries-corpus-qrels, and qrels may be binary or continuous values. A qrels value of 0 means non-relevant. The higher the number, the more relevant the corpus can be considered to the query. The tasks are as follows.
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
It consists of queries based on the Google search engine, a corpus of the top 5 Wikipedia pages related to the queries selected by annotators, and long and short answers created by annotators with reference to the corpus.
In the raw data, the corpus entries are in HTML, and the long and short answers are each represented in the form of start and end tokens.


## Github
https://github.com/google-research-datasets/natural-questions 


## Paper
https://paperswithcode.com/paper/natural-questions-a-benchmark-for-question/
