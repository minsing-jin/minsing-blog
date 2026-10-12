---
title: Mean pooling - Let's match the embedding dimensions
pubDatetime: 2025-05-10 14:33:50.208000+00:00
description: \nProblem\nFFT encoding Lyrics and the quantized f0 melody produces [batch size, hidden channel, time(seq_len) -> sequence length].\nThe sequence lengths might be different, right??\n\nSolution\nm
category: Data & ML
tags: []
language: en
translationOf: mean-pooling-임베딩-차원-맞춰보자이
translationStatus: approved
draft: false
velogSeries:
- ML
---

![](/images/velog/5ebb4810c4a00800.png)


# Problem
FFT encoding Lyrics and the quantized f0 melody produces [batch size, hidden channel, time(seq_len) -> sequence length].
The sequence lengths can be different, right??


# Solution
Use mean pooling~~


Take the mean for each feature in the hidden channel to make the seq len 1 -> do the same for the melody


ex.)
```python
  ------hidden channel---------
김  
민
재
짜
스
  mean mean mean mean mean mean ....
 
```
