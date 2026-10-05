---
title: "pandas dataframe 중복 값 기준으로 row 값들merge하는법"
pubDatetime: 2023-11-30T13:36:01.666Z
description: "판다스는 유용하다. 유용한 도구를 쓰려면 다양한 상황에서 판다스를 시전해야하는 상황을 접해야할듯 하다. 고오오오맙다 groupby 메서드 시치와 agg시치야~"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/pandas-dataframe-중복-값-기준으로-row-값들merge하는법"
velogSeries: ["고오급 스킬들 공략집"]
---

# 상황
RAGchain benchmark dataset을 preprocessing하던중 아래와 같이 한 쿼리 id당 여러개의 corpus-id로 retrieval ground truth가 할당되어있는 것을 볼수 있다.

![](/images/velog/4fe72a95f2426744.png)

이에 이 데이터셋을 load하여 pandas dataframe으로 convert 하고 pandas의 메서드를 이용해 이 중복 쿼리 id를 병합하면서 corpus id를 동시에 한 row에 list로 담고 싶었다.

# 해결
```python
self.qrels = self.qrels.groupby('query-id', as_index=False).agg({'corpus-id': lambda x: list(x), 'score': lambda x: list(x)})
```

`self.qrels.groupby('query-id', as_index=False)` 부분은 'query-id'라는 열을 기준으로 DataFrame을 그룹화한다. `as_index=False`는 그룹화된 결과에서 'query-id' 열을 인덱스로 사용하지 않도록 설정한다.

`.agg({'corpus-id': lambda x: list(x), 'score': lambda x: list(x)})` 부분은 각 그룹에 대해 'corpus-id'와 'score' 열의 값을 리스트로 변환한다. 이 때, `lambda x: list(x)`는 각 그룹의 모든 값을 리스트로 변환하는 함수이다.

따라서 이 코드는 'query-id'를 기준으로 DataFrame을 그룹화하고, 각 그룹에 대해 'corpus-id'와 'score' 열의 값을 리스트로 변환하는 작업을 수행한다. 이렇게 하면 각 'query-id'에 대해 여러 'corpus-id'와 'score' 쌍이 있는 경우, 이들을 하나의 리스트로 묶을 수 있다.

# groupby 메서드
이 메서드는 DataFrame을 특정 기준에 따라 그룹화한다. 예를 들어, 'query-id'라는 열을 기준으로 DataFrame을 그룹화하려면 `df.groupby('query-id')`를 사용할 수 있다. 이렇게 하면 'query-id'가 동일한 행들이 하나의 그룹으로 묶이게 된다.

# agg 메서드
이 메서드는 각 그룹에 대해 특정 연산을 수행한다. 예를 들어, 각 그룹의 'corpus-id'와 'score' 열의 값을 리스트로 변환하려면 `df.groupby('query-id').agg({'corpus-id': lambda x: list(x), 'score': lambda x: list(x)})`를 사용할 수 있다. 이렇게 하면 각 그룹의 'corpus-id'와 'score' 열의 값이 리스트로 변환된다.

이 두 메서드를 함께 사용하면, 특정 기준에 따라 DataFrame을 그룹화하고, 각 그룹에 대해 특정 연산을 수행하는 복잡한 데이터 처리 작업을 수행할 수 있다.
