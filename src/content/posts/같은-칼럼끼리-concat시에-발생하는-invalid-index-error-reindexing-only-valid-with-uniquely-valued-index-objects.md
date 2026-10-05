---
title: "같은 칼럼끼리 concat시에 발생하는\\n[InvalidIndexError: Reindexing only valid with uniquely valued Index objects]"
pubDatetime: 2024-02-01T06:36:15.051Z
description: "와 같은 에러가 발생할 시, 문제는 같은 칼럼을 가진 데이터끼리 concat을 했기 때문이다. 혹은 서로 개수가 맞지 않는 데이터끼리 concat을 했기 때문에 일어난 오류다.네이스한 설명"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/같은-칼럼끼리-concat시에-발생하는InvalidIndexError-Reindexing-only-valid-with-uniquely-valued-Index-objects"
velogSeries: ["악당 개념패거리들 정리"]
---

![](/images/velog/4cd8b19e3dd4ac39.png)

# 에러
## InvalidIndexError: Reindexing only valid with uniquely valued Index objects

와 같은 에러가 발생할 시, **문제는 같은 칼럼을 가진 데이터끼리 concat**을 했기 때문이다. 혹은 서로 개수가 맞지 않는 데이터끼리 concat을 했기 때문에 일어난 오류다.

> [네이스한 설명](https://velog.io/@workhard/%EB%A7%8E%EC%9D%B4-%EC%93%B0%EB%8A%94-%EC%B9%BC%EB%9F%BC-%EC%9E%91%EC%97%85)
