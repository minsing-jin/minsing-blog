---
title: "apply 쓸때 왜 자꾸 key error가 뜨는거지?"
pubDatetime: 2023-12-30T18:10:02.460Z
description: "axis설정하세유"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/apply-쓸때-왜-자꾸-key-error가-뜨는거지"
velogSeries: ["악당 개념패거리들 정리"]
---

# 결론
- 높은 확률로 axis=1 이라는 apply의 positional argument를 설정해주지 않아서이다.
axis=1이면 column이 아닌 row마다 함수를 적용하는것이다

cf)
=> axis=0이라면 column기준으로 함수가 적용이 된다.
=> 만약 pandas series에 apply를 적용한다면 axis는 생략해야한다.
