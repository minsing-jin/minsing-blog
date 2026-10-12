---
title: How to Redefine an Inherited Method for Each Dataset = Method Override
pubDatetime: 2023-11-30 15:51:14.968000+00:00
description: 'Method override: adapting an inherited method to suit the characteristics of a child class~'
category: Programming & CS
tags: []
language: en
translationOf: 상속받은-method를-각-데이터-셋에-맞춰-재정의-하는법-method-override
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/77329a91a71b53a3.png)


# Situation
In RAGchain, there are cases where the method created in the parent class to remove duplicate values needs to be implemented slightly differently for each dataset. How should this be solved?


# Solution
Since the method created in the parent class is an instance method, perform _**method overriding (redefinition)**_ in the child class.


[Reference site 1](https://wikidocs.net/194462)
