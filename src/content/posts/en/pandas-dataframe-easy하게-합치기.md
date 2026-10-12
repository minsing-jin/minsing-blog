---
title: Easily combining pandas dataframes
pubDatetime: 2023-12-31 11:26:43.613000+00:00
description: Until then, I had only used the pd.concate method, but I discovered some mind-blowing code!
category: Programming & CS
tags: []
language: en
translationOf: pandas-dataframe-easy하게-합치기
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/b80b5f2958674920.png)


Up until then, I had only used the pd.concate method, but I discovered some tasty code!


```python
dataset = pd.Series([uuid.uuid4() for _ in range(len(dataset))], name='query_id').to_frame().join(dataset)
```
