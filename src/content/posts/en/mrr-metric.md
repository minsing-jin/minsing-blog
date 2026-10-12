---
title: MRR metric
pubDatetime: 2023-11-23 11:42:04.566000+00:00
description: What is MRR? (mean reciprocal rank)
category: Data & ML
tags: []
language: en
translationOf: mrr-metric
translationStatus: approved
draft: false
velogSeries:
- RAGchain
---

![](/images/velog/dcf7243d508cfa7e.png)


# What is MRR? (mean reciprocal rank)
**Explain RAGchain**


If retrieval has 100 hits, you take the reciprocal of the rank of the item retrieved among the top-k, so the smaller the rank, the larger the value, and then calculate the mean by adding together the reciprocal ranks of passages retrieved at different ranks. 


## reciprocal rank
After checking the rank of the item retrieved by bm25 for the retrieval GT being sought, its reciprocal is taken.
ex) If the item preferred by the user is seventh among a list of 10 recommendations, the reciprocal rank is 1/7.
MRR is obtained by calculating the reciprocal rank (RR) for each different recommended item and then taking the mean.


## Questions that arose
1. If so, we need to know the retrieval GT; how was the retrieval GT obtained in the Mr.tydi paper? 
2. When there are multiple positive passages that could be the retrieval GT, do those positive passages have rankings? If there are no rankings, how was the retrieval GT ranked when calculating MRR?


→ If they are equivalent—that is, if they are all the items being sought—then taking the reciprocals of the ranks of those positive passages and calculating the mean will produce the MRR anyway, so MRR can be calculated even if there are no ranks among the positive passages.
That is why the paper did not include anything about the priority of the positive passages.
