---
title: 'The GOAT Recursive Algorithm: Euclid’s Algorithm'
pubDatetime: 2024-03-01 16:18:39.218000+00:00
description: The sheer brilliance that Thanos-snaps away 30 minutes of head-scratching.......
category: Programming & CS
tags: []
language: en
translationOf: 유클리드-호제법-goat-재귀-알고리즘
translationStatus: approved
draft: false
velogSeries:
- GOAT 알고리즘 (c++, python...)
---

![](/images/velog/3136e27c1049943a.png)



```cpp
	static int gcd(int a, int b) {
		return b == 0 ? a : gcd(b, a % b);
	}
```


[Just light.......](https://wonjjong.tistory.com/3)
