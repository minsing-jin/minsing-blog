---
title: "Random state란?"
pubDatetime: 2023-11-24T13:04:33.777Z
description: "pandas에서 sample매서드로 shuffle해서 여러번 실행할때 결과값을 고정"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/Random-state란"
velogSeries: ["악당 개념패거리들 정리"]
---

![](/images/velog/c9447b0a4a652445.png)

## 상황
RAGchain Mr.tydi dataset benchmark를 하던중 pandas dataframe을 shuffle해야하는 상황이 와서 ``sample()` 매서드를 활용해야했다.
`sample()` 매서드중 random_state라는 parameter가 있어서 이것에 대해서 알아보고자 한다.

## 결론
random값을 고정하는 역할이다. 각 실행마다 결과를 재현할때 쓴다.
random seed가 일정한 값을 주면 동일하게 섞이기 때문에 random_state를 고정해주면 항상 데이터 프레임은 똑같이 섞일것이다.

>
random_state=1 이라고 하면 바로 이 random 함수의 seed 값을 고정시키기 때문에 여러번 수행하더라도 같은 레코드를 추출합니다. random 함수의 seed값을 random_state라고 생각하시면 됩니다.

[참고문헌](https://www.inflearn.com/questions/110501/random-state-%EC%A7%88%EB%AC%B8)
