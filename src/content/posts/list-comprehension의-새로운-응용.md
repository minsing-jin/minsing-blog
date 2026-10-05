---
title: "list comprehension의 새로운 응용"
pubDatetime: 2024-01-04T14:28:01.028Z
description: "새로운 응용"
category: "고오급 스킬들 공략집"
canonicalURL: "https://velog.io/@minsing-jin/list-comprehension의-새로운-응용"
velogSeries: ["고오급 스킬들 공략집"]
---

```python
gt_ingestion = [gt for gt_lst in deepcopy(self.gt) for gt in gt_lst]
```
