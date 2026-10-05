---
title: "(numpy 브로드캐스팅) numpy에서 scoring할때 값이 이상하게 나온다?"
pubDatetime: 2024-11-20T14:59:23.044Z
description: "정형데이터 모델링에서 scoring할때 전체 데이터셋에 대해서 score을 매기는것과 stratification별로 매기는것과 너무 큰 차이가 나타남계산의 오류shape이 하나는 pandas Series, 하나는 pandas dataframe임. 2D array와 1D"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/numpy-브로드캐스팅-numpy에서-scoring할때-값이-이상하게-나온다"
velogSeries: ["악당 개념패거리들 정리"]
---

# 문제
- 정형데이터 모델링에서 scoring할때 전체 데이터셋에 대해서 score을 매기는것과 stratification별로 매기는것과 너무 큰 차이가 나타남
- 계산의 오류

# 원인
- shape이 하나는 pandas Series, 하나는 pandas dataframe임. 2D array와 1D array의 차이임.
- smape 구현했을때 ground truth(pandas series)와 prediction(pandas dataframe)의 data의 shape이 달랐음
-> (n,) 와 (n,1)

- SMAPE에서 Numpy 사용시 브로드 캐스팅으로 인해서 자동으로 차원을 확장해서 엉뚱하게 계산 오류
- 1D와 2D 배열을 섞어 사용할 때는 브로드캐스팅으로 의도하지 않은 계산이 이루어짐

# 해결
- dataframe의 value들로 flatten하여 진행
