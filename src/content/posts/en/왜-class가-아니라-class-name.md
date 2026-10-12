---
title: 'Error note: Invalid dom property ---. Did you mean ---?'
pubDatetime: 2023-01-07 13:50:50.135000+00:00
description: Why className instead of class?
category: Programming & CS
tags: []
language: en
translationOf: 왜-class가-아니라-class-name
translationStatus: approved
draft: false
velogSeries:
- web_study
---

https://velog.io/@lillynextdoor/class-vs.-className


### Why className instead of class??
- In HTML, it is generally common to use `class`, but in React, `class` is a reserved word in JavaScript, so `className` must be used to distinguish it from `class`.


- HTML is, literally, used to implement text, whereas JS/JSX is JavaScript that supports HTML. Therefore, `className` is used this way to prevent conflicts with reserved words.
