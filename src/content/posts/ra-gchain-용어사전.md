---
title: "RAGchain 용어사전"
pubDatetime: 2023-11-20T07:22:28.404Z
description: "논문보다가 모르는 단어들이 난무해서 내가 보려고 정리해놓는곳이다."
category: "RAGchain"
canonicalURL: "https://velog.io/@minsing-jin/RAGchain-용어사전"
velogSeries: ["RAGchain"]
---

![](/images/velog/d5ac76b4ae0e50a7.png)

논문보다가 모르는 단어들이 난무해서 내가 보려고 정리해놓는곳이다.

# Mr.tydi

## Zero-shot learning이란?
zero shot learning이란? train set에 포함되어있지 않은 unseen data도 예측하는 분야다.

그 방식은 train data에 추가적인 sementic infromation에 있는데
어떻게 하는지는 아래 링크를 참고하자. 나중에 필요할때는 또 정리하겠쥬
[참고문헌](https://deep-learning-study.tistory.com/873)

-----------------------

## OOD(out-of-distribution) data란?
train data에 나타나지 않는 데이터이다. 
기존 machine learning에서 개와 고양이를 학습시켰을때 호랑이 사진을 넣는다면 이상한 결과를 도출한다. 여기서 호랑이가 out-of distribution data이다.

**ChatGPT왈**
>
Out-of-distribution (OOD) data refers to data that is not represented in the training dataset. In the context of machine learning, models are trained on a specific distribution of data, known as the in-distribution data. When these models encounter data that significantly differs from the in-distribution data, they are often unable to make valid predictions. This new, different data is referred to as out-of-distribution data.
For example, if a machine learning model is trained to recognize images of cats and dogs (in-distribution data), and it is then presented with an image of a car (out-of-distribution data), the model may not correctly classify the image since it has not been trained on images of cars.
Handling OOD data is a significant challenge in machine learning because real-world data can often contain unexpected variations or entirely new categories not seen during training. Therefore, developing strategies to detect and appropriately handle OOD data is an active area of research in machine learning.

--------------------------

## Embedding이란(=Embedding vector)
기존 텍스트들을 vector(floating 숫자들로 구성된 고정된 크기 배열)화 하는것이다.

Embedding vector는 사람이 이해하기는 어렵지만 서로 다른 단어, 문서에서 추출한 embedding vector들 간의 거리를 계산하면 컴퓨터는 이들간의 의미적 관곌르 유추할 수 있다.

AI 모델들은 function이기 때문에 input과 output을 numeric data로 받아야하지만 텍스트는 그것이 불가능하기 때문에 숫자 형태로 된 embedding vector로 input을 받아야한다.

[네이스한 설명](https://syncly.app/ko/blog/what-is-embedding-and-how-to-use)

## token과 tokenizer란
원본 텍스트는 AI 모델에 입력되기 전에 더 작은 조각들로 쪼개지는 과정을 반드시 먼저 거칩니다. 
이 때의 “조각”를 “token”, 쪼개는 일을 하는 모델을 “tokenizer”라고 지칭하며,어떤 tokenizer를 사용하느냐에 따라 하나의 token이 곧 “word”(단어) 하나가 될 수도 있고 “subword”(단어의 일부 조각)가 될 수도 있습니다.
이런 token 하나로부터 추출한 embedding을 흔히 “Word (token) embedding”이라고 부릅니다.

[네이스한 설명](https://syncly.app/ko/blog/what-is-embedding-and-how-to-use)

--------

## Encoding이란
사람이 이해할 수 있는 문자들을 컴퓨터가 이해할 수 있는 _**코드로 바꾸는것**_. encoding은 **정해진 규칙에 따라 코드화, 암호화, 부호화** 하는것을 말한다.
[네이스한 설명](https://codingpractices.tistory.com/entry/%EC%9D%B8%EC%BD%94%EB%94%A9-vs-%EB%94%94%EC%BD%94%EB%94%A9-%EC%A0%95%ED%99%95%ED%95%98%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

## Decoding이란
decoding이란 encoding의 반대되는 개념으로 코드화, 암호화된 코드들을 다시 사람이 이해할 수 있도록 복호화하는것이다.

### encoding과 embedding의 차이는 뭐야?
- embedding: 토크나이징된 단어 토큰들을 백터들로 변환하는 과정
- encoding: embedding된 백터들을 sentence matrix로 변환하는 과정(코드화, 암호화하는것이다.)
[네이스한 설명](https://beausty23.tistory.com/223)


----------------

## Dense retrieval이란
dense retrieveal은 dense embedding을 한것을 retrieval한것이다.

[네이스한 설명](https://velog.io/@sangmandu/Dense-Passage-Retrieval)

-------
## Open Domain Question Answering(ODQA)이란
다양한 주제에 대한 대량의 문서 집합으로부터 자연어 질의에 대한 답변을 찾아오는 태스크
[네이스한설명](https://littlefoxdiary.tistory.com/76)

---------
##
