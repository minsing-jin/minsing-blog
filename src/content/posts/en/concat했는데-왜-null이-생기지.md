---
title: Why does null appear even though I used concat?
pubDatetime: 2024-01-04 13:31:53.750000+00:00
description: Use reset_index~
category: Programming & CS
tags: []
language: en
translationOf: concat했는데-왜-null이-생기지
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

![](/images/velog/797d2d63be51e0e0.png)


# Situation
While preprocessing the RAGchain searchQA benchmark, null values strangely appeared whenever I used concat, even though the two dataframes were the same length and contained no null values. Why is that?


# Conclusion
The two dataframes are the same length, but null values appear?
If their indices do not align, null values can appear when using concat. Use reset_index~


1. Be sure to remember to reset the index when necessary during dataframe preprocessing
2. This is essential not only when preprocessing dataframes, but also for test code as the data size and codebase grow larger.


> Reference
https://ordo.tistory.com/51
