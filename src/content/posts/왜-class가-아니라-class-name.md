---
title: "Error note: Invalid dom property ---. Did you mean ---?"
pubDatetime: 2023-01-07T13:50:50.135Z
description: "왜 class가 아니라 className??"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/왜-class가-아니라-className"
velogSeries: ["web_study"]
---

https://velog.io/@lillynextdoor/class-vs.-className

### 왜 class가 아니라 className??
- html에서는 대부분 class를 쓰는게 일반적이지만 react에서 javascript에 class는 예약어이기 때문에 className으로 class와 구분지어야한다.

- html은 말그대로 텍스트 구현이지만 js/jsx에서는 html이 지원되는 javascript 이기 때문에 예약어가 겹치는걸 방지하려고 이렇게 써야하는 것이다.
