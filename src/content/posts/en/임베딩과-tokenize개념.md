---
title: The Concepts of Embeddings and Tokenization
pubDatetime: 2025-05-12 12:24:31.828000+00:00
description: Dividing a sequence (such as text or f0 audio divided into frames) into tokens, quantifying them, and mapping them through indexing; arranging those tokens based on their semantic associations
category: Data & ML
tags: []
language: en
translationOf: 임베딩과-tokenize개념
translationStatus: approved
draft: false
velogSeries:
- ML
---

![](/images/velog/5ac49cbb29c6a669.png)


# tokenize
- Dividing a sequence (text, f0 audio divided into frames, etc.) into tokens, quantifying them, and mapping them through indexing


# embedding
- Arranging tokens based on their semantic associations
- Whether passing through an nn.Embedding layer or an already-created embedding model such as word2vec, as long as the first concept is shared, performing the act of embedding in any manner counts as embedding


![](/images/velog/ef2e1294c9338bcb.png)



https://wikidocs.net/64779
