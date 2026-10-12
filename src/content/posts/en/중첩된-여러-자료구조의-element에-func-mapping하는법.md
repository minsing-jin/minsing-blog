---
title: How to Map a Func to Elements of Multiple Nested Data Structures
pubDatetime: 2025-05-04 14:41:35.911000+00:00
description: Create nest_map https&#x3A;//dotiromoook.tistory.com/28
category: Programming & CS
tags: []
language: en
translationOf: 중첩된-여러-자료구조의-element에-func-mapping하는법
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/1389123faea795a7.png)



Create nest_map


```python
def nested_map(struct, map_fn):
	if isinstance(struct, tuple):
		return tuple(nested_map(x, map_fn) for x in struct)
	if isinstance(struct, list):
		return [nested_map(x, map_fn) for x in struct]
	if isinstance(struct, dict):
		return {k: nested_map(v, map_fn) for k, v in struct.items()}
	return map_fn(struct)
```
