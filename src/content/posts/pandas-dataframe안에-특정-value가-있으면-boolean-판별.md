---
title: "pandas dataframe안에 특정 value가 있으면 boolean 판별"
pubDatetime: 2023-11-30T15:42:23.152Z
description: "판다스 데이터프레임에 특정 값이 있는지 true false로 확인해보자~"
category: "고오급 스킬들 공략집"
canonicalURL: "https://velog.io/@minsing-jin/pandas-dataframe안에-특정-value가-있으면-boolean-판별"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/908f5f6450d08a97.png)

# 방법1
```python
if (self.qrels['score'] < 1).any():
	self.qrels['score'] = self.qrels.drop(self.qrels[self.qrels['score'] < 1].index)

```
`(self.qrels['score'] < 1).any()`는 Pandas DataFrame에서 특정 조건을 만족하는 행이 하나라도 있는지 확인하는 코드다.

여기서 `self.qrels['score'] < 1`은 `qrels` DataFrame의 `score` 열의 값이 1보다 작은 모든 행을 선택하는 부분입니다. 이 부분은 부울 값을 반환하며, 각 행에 대해 `score` 열의 값이 1보다 작으면 `True`, 그렇지 않으면 `False`를 반환한다..

`.any()`는 이렇게 반환된 부울 값 중에서 `True`인 값이 하나라도 있는지 확인하는 함수입니다. 즉, score 열의 값이 1보다 작은 행이 하나라도 있으면 `True`를 반환하고, 그렇지 않으면 `False`를 반환한다.

따라서 `(self.qrels['score'] < 1).any()`는 `qrels` DataFrame의 `score` 열의 값이 1보다 작은 행이 하나라도 있는지 확인하는 코드입니다. 이 코드를 사용하면, `score` 열의 값이 1보다 작은 행이 있는지 쉽게 확인할 수 있다.

# 방법2

```python
result = df.isin(['value1', 'value2', 'value3']).any().any()
```

any() 메서드는 Pandas DataFrame에서 사용되며, 데이터 프레임의 모든 요소가 참인지 거짓인지를 확인합니다.

any() 메서드를 한 번 사용하면, 각 열에 대해 참인지 거짓인지를 확인합니다. 즉, 각 열에서 적어도 하나의 요소가 참이면 True를 반환하고, 모든 요소가 거짓이면 False를 반환합니다.

따라서, any().any()를 사용하면, 전체 데이터 프레임에서 적어도 하나의 요소가 참이면 True를 반환하고, 모든 요소가 거짓이면 False를 반환합니다. 이는 데이터 프레임의 모든 요소가 특정 조건을 만족하는지 확인하는 데 유용합니다.
