---
title: "pandas dataframe easy하게 합치기"
pubDatetime: 2023-12-31T11:26:43.613Z
description: "그전까지 pd.concate 매서드만 썼다가 지리는 코드를 발견했다!"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/pandas-dataframe-easy하게-합치기"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/b80b5f2958674920.png)

그전까지 pd.concate 매서드만 썼다가 맛있는 코드를 발견했다!

```python
dataset = pd.Series([uuid.uuid4() for _ in range(len(dataset))], name='query_id').to_frame().join(dataset)
```
