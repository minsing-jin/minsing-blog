---
title: "Mean pooling - 임베딩 차원 맞춰보자이"
pubDatetime: 2025-05-10T14:33:50.208Z
description: "\\n문제\\nLyrics와 quantized f0된 melody를 FFT encoding을 하면 [batch size, hidden channel, time(seq_len)-> 시퀀스 Length]가 나온다.\\nsequence length가 다를 수도 있지 않누??\\n\\n해결\\nm"
category: "Data & ML"
canonicalURL: "https://velog.io/@minsing-jin/Mean-pooling-임베딩-차원-맞춰보자이"
velogSeries: ["ML"]
---

![](/images/velog/5ebb4810c4a00800.png)

# 문제
Lyrics와 quantized f0된 melody를 FFT encoding을 하면 [batch size, hidden channel, time(seq_len)-> 시퀀스 Length]가 나온다.
sequence length가 다를 수도 있지 않누??

# 해결
mean pooling을 하세유~~

hidden channel의 각 feature마다 Mean을 때려서 seq len을 1로 맞춤 -> melody도 마찬가지

ex)
```python
  ------hidden channel---------
김  
민
재
짜
스
  mean mean mean mean mean mean ....
 
```
