---
title: "유용하고 고오오마운 groupby, agg method 써보기"
pubDatetime: 2023-11-30T13:48:55.787Z
description: "특정 column에 대해서 grouping시키기"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/유용한-고오오마운-groupby-agg-method-써보기"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/0dd367ad6da8b4c5.png)

# groupby
지정한 column의 기준에 대해서 데이터를 그룹별로 분할한다. groupby method를 사용한다면 pandas dataframe의 row의 한 column의 element들을 중복되는것끼리 그룹으로 모을 수 있다.
이를 이용해 mean값이나 sum등의 통계 함수를 적용할 수 있다.

# agg
mean값등의 통계량을 다중으로 구할 수 있다.


[네이스한 설명](https://teddylee777.github.io/pandas/pandas-groupby/)
