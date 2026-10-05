---
title: "Sorted() parameter key 값 lambda에 대하여"
pubDatetime: 2023-10-11T15:18:19.312Z
description: "람보르람다"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/Sorted-parameter-key-값-lambda에-대하여"
velogSeries: ["악당 개념패거리들 정리"]
---

# 결론
lambda 함수 기준으로 값을 정렬한다. 예제들 보면서 학습해야할듯 하다.

# 매개변수 패거리들
## key
오름차순 정렬 : sorted(a, key=lambda x:x[0])
내림차순 정렬 : sorted(a, key=lambda x:-x[0])

## reverse
True: 내림차순(숫자가 갈수록 작아짐)
False(default): 오름차순

# 헷갈리는 예제들
![](/images/velog/aa5ee8e60eb97858.png)


[출처](https://velog.io/@aonee/Python-%EC%A0%95%EB%A0%AC-sort-sorted-reverse)
