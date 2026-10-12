---
title: A new application of list comprehension
pubDatetime: 2024-01-04 14:28:01.028000+00:00
description: A new application
category: Programming & CS
tags: []
language: en
translationOf: list-comprehension의-새로운-응용
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

```python
gt_ingestion = [gt for gt_lst in deepcopy(self.gt) for gt in gt_lst]
```
