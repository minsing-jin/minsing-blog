---
title: "중첩된 여러 자료구조의 Element에 Func mapping하는법"
pubDatetime: 2025-05-04T14:41:35.911Z
description: "nest_map을 만드세유https&#x3A;//dotiromoook.tistory.com/28"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/중첩된-여러-자료구조의-Element에-Func-mapping하는법"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/1389123faea795a7.png)


nest_map을 만드세유

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
