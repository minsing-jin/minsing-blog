---
title: "상속받은 method를 각 데이터 셋에 맞춰 재정의 하는법 = method override"
pubDatetime: 2023-11-30T15:51:14.968Z
description: "상속받은 매서드를 자식클래스의 성격에 맞게 맞추는 method override~"
category: "고오급 스킬들 공략집"
canonicalURL: "https://velog.io/@minsing-jin/상속받은-method를-각-데이터-셋에-맞춰-재정의-하는법-method-override"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/77329a91a71b53a3.png)

# 상황
RAGchain에서 부모 클래스에서 만든 중복되는 값을 제거해주는 매서드가 데이터셋마다 살짝씩 방식을 틀어서 해야하는 경우가 생겼다.이를 어떻게 해결해야할까?

# 해결
부모클래스에서 만든 매서드는 인스턴스 매서드이므로 자식클래스에서 _**매서드 오버라이드(재정의)**_를 한다.

[참고할만한사이트 1](https://wikidocs.net/194462)
