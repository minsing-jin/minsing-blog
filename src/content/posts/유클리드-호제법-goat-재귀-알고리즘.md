---
title: "유클리드 호제법 GOAT 재귀 알고리즘"
pubDatetime: 2024-03-01T16:18:39.218Z
description: "30분 고민을 타노스 해버리는 그저 빛......."
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/유클리드-호제법-GOAT-재귀-알고리즘"
velogSeries: ["GOAT 알고리즘 (c++, python...)"]
---

![](/images/velog/3136e27c1049943a.png)


```cpp
	static int gcd(int a, int b) {
		return b == 0 ? a : gcd(b, a % b);
	}
```

[그저 빛.......](https://wonjjong.tistory.com/3)
