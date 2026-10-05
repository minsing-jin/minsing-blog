---
title: "k-fold cross validation에 대해서 Overfitting 되는것"
pubDatetime: 2024-12-05T03:30:12.928Z
description: "하이퍼 파라미터 튜닝 cv 과적합"
category: "Data & ML"
canonicalURL: "https://velog.io/@minsing-jin/k-fold-cross-validation에-대해서-Overfitting-되는것"
velogSeries: ["Classical machine learning"]
---

![](/images/velog/ded43d34c10b5baf.png)

실험적인 경험이므로 의견을 틀린부분이 있다면 늘려주세요

# 동기
결측치 추정하는 모델링을 진행하고 있다. 

하이퍼 파라미터 튜닝을 진행하고 있는데 K-fold cv에서 n_trial을 1000대로 늘려서 k-fold cv에 대한 성능을 높이는 방향으로 튜닝을 진행했지만 test set에서는 성능이 좋지 않고, 오히려 하이퍼 파라미터 튜닝을 하지 않은 default 파라미터로 되어있는 모델의 성능이 test set에 대해서 성능이 높았다. 

# 해석
이것은 파라미터 최적화한 모델의 일반성이 더 떨어진다고 해석할 수 있다. 따라서 지나친 k-fold cv에 대한 성능 최적화는 오히려 cv할 데이터에 대한 overfitting문제로 모델의 일반성이 떨어질수 있다는것을 . 알수 있다.

# 결론
Early stopping이 괜히 있는것이 아니라는것을 깨달았다.

테스트 성능이 너무 잘 나오는것도 overfitting 혹은 Data leakage를 의심해야한다.
