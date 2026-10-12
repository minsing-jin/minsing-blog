---
title: 'Error report: Goorm IDE "The following signature is invalid" issue'
pubDatetime: 2023-02-18 14:30:08.868000+00:00
description: Not an easy one
category: Programming & CS
tags: []
language: en
translationOf: error-report구름-ide-다음-서명이-올바르지-않습니다-issue
translationStatus: approved
draft: false
velogSeries:
- web_study
---

The original error is as follows.


``` javascript
오류:4 https://packages.cloudfoundry.org/debian stable InRelease
  다음 서명이 올바르지 않습니다: KEYEXPIRED 00000000  KEYEXPIRED 00000000 KEYEXPIRED 00000000
```


The solution is to get the key again.


https://edu.goorm.io/qna/9831
