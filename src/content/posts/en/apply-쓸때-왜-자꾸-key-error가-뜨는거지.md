---
title: Why do I keep getting a key error when using apply?
pubDatetime: 2023-12-30 18:10:02.460000+00:00
description: Set the axis, y'all.
category: Programming & CS
tags: []
language: en
translationOf: apply-쓸때-왜-자꾸-key-error가-뜨는거지
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

# Conclusion
- Most likely because the positional argument `axis=1` was not set for `apply`.
With `axis=1`, the function is applied to each row rather than each column.


cf)
=> With `axis=0`, the function is applied based on columns.
=> If applying `apply` to a pandas Series, `axis` should be omitted.
