---
title: "concat했는데 왜 null이 생기지?"
pubDatetime: 2024-01-04T13:31:53.750Z
description: "reset_index하세유~"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/concat했는데-왜-null이-생기지"
velogSeries: ["악당 개념패거리들 정리"]
---

![](/images/velog/797d2d63be51e0e0.png)

# 상황
RAGchain searchQA benchmark preprocessing하던중 두 dataframe이 길이가 같고 null값이 하나도 없음에도 이상하게 concat만 하면 null값이 생겼다. 왜 그런거지?

# 결론
두 dataframe이 길이도 같은데 null값이 생긴다?
서로 index가 맞지 않는다면 concat할때 null값이 생길 수 있다. reset_index하세유~

1. 꼭 dataframe preprocessing할때는 reset index 해야할때를 유념하자
2. dataframe prerpocessing할때뿐만 아니라 테스트 코드는 데이터 크기가 크고 코드의 규모가 커질수록 필수이다.

> 참고
https://ordo.tistory.com/51
