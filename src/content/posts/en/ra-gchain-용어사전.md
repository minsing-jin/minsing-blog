---
title: RAGchain Glossary
pubDatetime: 2023-11-20 07:22:28.404000+00:00
description: I’m organizing this place for my own reference because I keep coming across a barrage of unfamiliar words while reading papers.
category: Data & ML
tags: []
language: en
translationOf: ra-gchain-용어사전
translationStatus: approved
draft: false
velogSeries:
- RAGchain
---

![](/images/velog/d5ac76b4ae0e50a7.png)


This is a place where I organize unfamiliar words that come up while reading papers, for my own reference.


# Mr.tydi


## What is zero-shot learning?
What is zero-shot learning? It is a field that predicts unseen data not included in the training set.


The method involves adding semantic information to the training data.
For details on how this is done, refer to the link below. I’ll organize it again later when I need it.
[Reference](https://deep-learning-study.tistory.com/873)


-----------------------


## What is OOD (out-of-distribution) data?
It is data that does not appear in the training data. 
If a model is trained on dogs and cats in conventional machine learning and then given a picture of a tiger, it produces a strange result. Here, the tiger is out-of-distribution data.


**According to ChatGPT**
>
Out-of-distribution (OOD) data refers to data that is not represented in the training dataset. In the context of machine learning, models are trained on a specific distribution of data, known as the in-distribution data. When these models encounter data that significantly differs from the in-distribution data, they are often unable to make valid predictions. This new, different data is referred to as out-of-distribution data.
For example, if a machine learning model is trained to recognize images of cats and dogs (in-distribution data), and it is then presented with an image of a car (out-of-distribution data), the model may not correctly classify the image since it has not been trained on images of cars.
Handling OOD data is a significant challenge in machine learning because real-world data can often contain unexpected variations or entirely new categories not seen during training. Therefore, developing strategies to detect and appropriately handle OOD data is an active area of research in machine learning.


--------------------------


## What is embedding (= embedding vector)?
It is the process of converting existing text into vectors (fixed-size arrays composed of floating-point numbers).


Embedding vectors are difficult for humans to understand, but if the distances between embedding vectors extracted from different words and documents are calculated, computers can infer the semantic relationships between them.


Because AI models are functions, they must receive inputs and outputs as numeric data. However, since text cannot be handled this way, it must be provided as input in the form of numeric embedding vectors.


[Naver explanation](https://syncly.app/ko/blog/what-is-embedding-and-how-to-use)


## What are tokens and tokenizers?
Original text must first go through a process of being split into smaller pieces before it is entered into an AI model. 
These “pieces” are called “tokens,” and the model that performs the splitting is called a “tokenizer.” Depending on which tokenizer is used, a single token may be one “word” or a “subword” (a partial piece of a word).
The embedding extracted from a single such token is commonly called a “word (token) embedding.”


[Naver explanation](https://syncly.app/ko/blog/what-is-embedding-and-how-to-use)


--------


## What is encoding?
It is _**converting characters that humans can understand into code**_ that computers can understand. Encoding refers to **converting into code, encrypting, or encoding** according to predetermined rules.
[Naver explanation](https://codingpractices.tistory.com/entry/%EC%9D%B8%EC%BD%94%EB%94%A9-vs-%EB%94%94%EC%BD%94%EB%94%A9-%EC%A0%95%ED%99%95%ED%95%98%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)


## What is decoding?
Decoding is the opposite concept of encoding: it means decrypting encoded or encrypted codes so that they can once again be understood by humans.


### What is the difference between encoding and embedding?
- embedding: the process of converting tokenized word tokens into vectors
- encoding: the process of converting embedded vectors into a sentence matrix (that is, converting them into code or encrypting them.)
[Naver explanation](https://beausty23.tistory.com/223)



----------------


## What is dense retrieval?
Dense retrieval is the retrieval of dense embeddings.


[Naver explanation](https://velog.io/@sangmandu/Dense-Passage-Retrieval)


-------
## What is open-domain question answering (ODQA)?
A task that finds answers to natural-language queries from a large collection of documents on various topics
[Naver explanation](https://littlefoxdiary.tistory.com/76)


---------
##
