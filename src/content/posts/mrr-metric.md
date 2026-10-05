---
title: "MRR metric"
pubDatetime: 2023-11-23T11:42:04.566Z
description: "MRR이 무엇인가?(mean reciprocal rank)"
category: "Data & ML"
canonicalURL: "https://velog.io/@minsing-jin/MRR-metric"
velogSeries: ["RAGchain"]
---

![](/images/velog/dcf7243d508cfa7e.png)

# MRR이 무엇인가?(mean reciprocal rank)
**RAGchain에 대해서 설명**

retrieval이 100 hit를 가지고 top-k중 retrieve한 녀석의 rank를 역수로 취해서 rank가 점점 작은 수일수록 큰 수가 되고, 
다른 순위로 retrieve한 passages들의 rank의 역수를 다 더해서 mean 값을 구한것임. 

## reciprocal rank
찾고자 하는 retrieval gt로 bm25가 retrieve한  녀석의 순위를 체크후 그 순위를 역수로 취한것이
ex) 10개의 추천리스트 중 사용자가 선호하는 아이템이 7번째에 있다면 reciprocal rank는 1/7이 되는 것이다.
mrr은 각각의 다른 추천 아이템의 역수 RR을 구한후 mean값을 취한것

## 생긴질문
1. 그렇다면 retrieval gt를 알아야하며 retrieval gt는 Mr.tydi 논문에서 어떻게 구했는가? 
2. retrieval gt가 될 postive passage가 여러개 있을때는 positive passages들의 랭킹이 있는가? 랭킹이 없다면 어떻게 mrr을 매길때 retreival gt를 매겼는가?

→ 서로 동등한 관계, 즉 찾고자 하는 녀석이라면 그 positive passage들의 순위의 역수를 더해서 mean값을 하면 어차피 mrr이 나오므로 positive passage들간의 rank가 없더라도 MRR계산은 쌉가능이다.
때문에 논문에서는 positive passage의 우선순위에 관한 내용이 없던 것이다.
