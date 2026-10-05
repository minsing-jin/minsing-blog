---
title: "flatten하기"
pubDatetime: 2023-11-17T06:53:17.059Z
description: "list comprehension 오남용"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/flatten하기"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/feaa43563f9d6b2b.png)

# 상황
리스트로 된 요소들이 있는 pandas dataframe을 flatten해서 list로 바꾸는 작업을 list comprehesion으로 해결했다.
하지만 이는 list comprehension을 오남용해서 가독성이 훨씬 떨어지는 코드다.
```python
[passage for lst_passage in make_passages['passages'] for passage in lst_passage]
```

# 해결법
1. itertools 사용
```python
import itertools

passages = list(itertools.chain.from_iterable(make_passages['passages']))
```
2. 언패킹(* 사용)
```python
passages = list(*passage for passage in make_passages['passages'])
```

3. 함수
```python
def flatten_list(nested_list):
   return [item for sublist in nested_list for item in sublist]

passages = flatten_list(make_passages['passages'])

```
