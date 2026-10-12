---
title: Error When Validating GPT Analysis with a JSON Schema
pubDatetime: 2024-10-01 01:36:29.957000+00:00
description: Even when I define the JSON schema I want, GPT sometimes fails to extract it correctly. In this case, you can set the item of a property that is allowed to have a null value to ["string", "null"].
category: Programming & CS
tags: []
language: en
translationOf: gpt-분석시-json-schema로-validation할때-에러
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

# Problem
Even when I define the JSON schema I want, GPT sometimes fails to extract it correctly. 


# Solution
In this case, you can set the item of a property that is allowed to have a null value to ["string", "null"], like this.
