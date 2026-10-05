---
title: "임베딩과 tokenize개념"
pubDatetime: 2025-05-12T12:24:31.828Z
description: "sequence(text, frame으로 나뉘어진 f0음성등)을 token으로 나눠서 수치화한것, 인덱싱으로 매핑한것token들에 대해서 의미적인 연관성을 기반으로 배치한것"
category: "ML"
canonicalURL: "https://velog.io/@minsing-jin/임베딩과-tokenize개념"
velogSeries: ["ML"]
---

![](/images/velog/5ac49cbb29c6a669.png)

# tokenize
- sequence(text, frame으로 나뉘어진 f0음성등)을 token으로 나눠서 수치화한것, 인덱싱으로 매핑한것

# embedding
- token들에 대해서 의미적인 연관성을 기반으로 배치한것
- nn.Embedding 레이어를 통과하던 이미 만들어진 word2vec과 같은 임베딩 모델을 통과하든 첫번째 개념이 상통하면 어떤방식으로든 임베딩이라는 행위를 한것

![](/images/velog/ef2e1294c9338bcb.png)


https://wikidocs.net/64779
