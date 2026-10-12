---
title: PyCharm error note (using fetch to pull changes from the GitHub website)
pubDatetime: 2023-09-21 06:08:58.855000+00:00
description: Conflict issue
category: Programming & CS
tags: []
language: en
translationOf: 파이참-error-note깃허브-홈페이지-변동사항-끌어오는-fetch
translationStatus: approved
draft: false
velogSeries:
- Pycharm과 친해지기 with Mac
---

### Question


**Situation:**
In PyCharm, created a test branch, committed the changes, and confirmed that they were uploaded to the GitHub test branch
-> Performed a pull request and merge of the test branch "on the GitHub website"
-> However, in PyCharm, the test branch was still unchanged, and the pull request and merge from the GitHub website had not been reflected
-> Mindlessly deleted the test branch in PyCharm in an attempt to make it match the GitHub website
-> Changed the file contents again in PyCharm, then committed and pushed
-> Conflict



**Question: What command can be used to immediately apply a pull request and merge performed on the GitHub website to PyCharm?**






# Answer: Fetch!
