---
title: "list comprehension 함수형"
pubDatetime: 2023-12-06T11:37:00.092Z
description: "list comprehension의 또다른 용도"
category: "고오급 스킬들 공략집"
canonicalURL: "https://velog.io/@minsing-jin/list-comprehension-함수형"
velogSeries: ["고오급 스킬들 공략집"]
---

# 상황
![](/images/velog/6e5575c92638503d.png)

기존에는 list comprehension에서 2중 for문을 2차원 list로 만드는 작업으로만 쓰는걸 봤다.

하지만 최근 list에 담겨있는 element들을 함수에 input해서 return값을 리스트에 담아주는 2중 for문을 발견했다. list comprehension이라는 녀석은 흥미로운 녀석이라고 생각이 들었다.

```python
exist_metrics = [modified_metric_name
                         for metric_name in ragas_metric_names
                         for modified_metric_name in text_modifier(metric_name)
                         if modified_metric_name in self.metrics]
```
