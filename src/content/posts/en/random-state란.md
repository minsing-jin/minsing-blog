---
title: What is random_state?
pubDatetime: 2023-11-24 13:04:33.777000+00:00
description: Shuffle using pandas' sample method and fix the results when running it multiple times
category: Programming & CS
tags: []
language: en
translationOf: random-state란
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

![](/images/velog/c9447b0a4a652445.png)


## Situation
While benchmarking the RAGchain Mr.tydi dataset, I encountered a situation where I needed to shuffle a pandas dataframe, so I had to use the ``sample()` method.
Among the parameters of the `sample()` method, there is one called random_state, and I wanted to learn more about it.


## Conclusion
It serves to fix the random value. It is used to reproduce the results across executions.
If the random seed is set to a constant value, the data will be shuffled identically, so fixing random_state will always shuffle the dataframe in the same way.


>
Setting random_state=1 fixes the seed value of this random function, so the same records are extracted even when it is executed multiple times. You can think of the seed value of the random function as random_state.


[References](https://www.inflearn.com/questions/110501/random-state-%EC%A7%88%EB%AC%B8)
