---
title: "Context length가 무엇인가?"
pubDatetime: 2023-12-06T17:06:11.355Z
description: "LLM이 한번에 처리할 수 있는 토큰수이다. llm에 input sequence에 최대 길이이다.네이스한 설명이것이 중요한 이유는1.모델이 article들을 summarize 하는데에 context length를 넘을 수 없다.2.Long-term planning ta"
category: "RAGchain"
canonicalURL: "https://velog.io/@minsing-jin/Context-length가-무엇인가"
velogSeries: ["RAGchain"]
---

# 결론
LLM이 한번에 처리할 수 있는 토큰수이다. llm에 input sequence에 최대 길이이다.
[네이스한 설명](https://agi-sphere.com/context-length/)

이것이 중요한 이유는
1.모델이 article들을 summarize 하는데에 context length를 넘을 수 없다.

2.Long-term planning task들에는 긴 input sequence가 필요하다.

3.더 길고 복잡한 input은 더 풍부한 output content를 생성할 수 있다.

4.메모리문제
위의 이유 때문에 기준점인 context length가 필요하다.


# context length가 크다고 무조건 좋은것?
더 큰 context length는 모델의 이해 능력을 증가시키지만, 실제 비용이 많이 들고 예상보다 모델 성능이 떨어질 수 있다. 또한, 답변의 질이 떨어지고 환각의 위험성이 높아질 수 있다.
[네이스한 설명](https://moon-walker.medium.com/llm%EC%9D%98-context-window-size%EA%B0%80-%ED%81%AC%EB%8B%A4%EA%B3%A0-%EC%A2%8B%EC%9D%80-%EA%B2%83%EC%9D%BC%EA%B9%8C-57870a3e315e)



# 상황
RAGchain beir benchmark를 test하는 시간이 1시간이 넘게 걸리는 문제가 발생했다. 한꺼번에 7개의 dataset들을 benchmark하는데에서 calculate metric의 ragas metric녀석의 token 초과로 계속해서 돌아간다. 

context length가 초과하여 계속해서 다시 시도하는 문제가 생겼고, 이에 대한 해결 방법으로

1. context length의 길이가 큰 모델로 바꾼다.

2. ragas metric을 쓰지 않는다.
