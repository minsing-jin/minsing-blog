---
title: list comprehension in functional style
pubDatetime: 2023-12-06 11:37:00.092000+00:00
description: Another use of list comprehensions
category: Programming & CS
tags: []
language: en
translationOf: list-comprehension-함수형
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

# Situation
![](/images/velog/6e5575c92638503d.png)


Previously, I had only seen nested for loops in list comprehensions used to create two-dimensional lists.


However, I recently came across a nested for loop that passes the elements contained in a list to a function and stores the return values in a list. I thought list comprehensions were quite interesting.


```python
exist_metrics = [modified_metric_name
                         for metric_name in ragas_metric_names
                         for modified_metric_name in text_modifier(metric_name)
                         if modified_metric_name in self.metrics]
```
