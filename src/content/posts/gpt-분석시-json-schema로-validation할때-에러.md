---
title: "GPT 분석시 json Schema로 validation할때 에러"
pubDatetime: 2024-10-01T01:36:29.957Z
description: "내가 원하는 json schema를 정해줘도 gpt가 잘 못뽑는경우가 있다. 이럴때는 schema를 \\\"string\\\", \\\"null\\\" 과 같이 Null값이 되어도 되는 property의 item에 설정을 해주면 됀다."
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/GPT-분석시-json-Schema로-validation할때-에러"
velogSeries: ["악당 개념패거리들 정리"]
---

# 문제상황
내가 원하는 json schema를 정해줘도 gpt가 잘 못뽑는경우가 있다. 

# 해결
이럴때는 schema를 ["string", "null"] 과 같이 Null값이 되어도 되는 property의 item에 설정을 해주면 됀다.
