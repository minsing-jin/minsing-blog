---
title: 'Regular Expressions: re'
pubDatetime: 2022-11-25 14:45:19.787000+00:00
description: Let's analyze string patterns
category: Programming & CS
tags: []
language: en
translationOf: 정규표현식-re
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

**Motivation**
While looking through excellent Programmers solutions, I found code that represented the Dart game using regular expressions, which sparked a question during my review.


```python
import re


def solution(dartResult):
    bonus = {'S' : 1, 'D' : 2, 'T' : 3}
    option = {'' : 1, '*' : 2, '#' : -1}
    p = re.compile('(\d+)([SDT])([*#]?)')
    dart = p.findall(dartResult)
    for i in range(len(dart)):
        if dart[i][2] == '*' and i > 0:
            dart[i-1] *= 2
        dart[i] = int(dart[i][0]) ** bonus[dart[i][1]] * option[dart[i][2]]

    answer = sum(dart)
    return answer
```


--------------------


# What Are Regular Expressions?
- Used to find string patterns in text data that match conditions I set


-> Using regular expressions makes it **easy to extract the desired data** from large amounts of text files, and **allows you to check whether the data conforms to the required format**


------------------------


# How to Use Them


1. re module import
2. Compile according to regular expression syntax rules and search with findall
findall -> https://velog.io/@beanlove97/%ED%8C%8C%EC%9D%B4%EC%8D%AC-findall-%EB%A9%94%EC%84%9C%EB%93%9C
----------
# Summary
- I should apply regular expression syntax rules while looking at examples. There are very diverse syntaxes for setting rules.


> References
1. See the regular expression summary (shaun.log) https://velog.io/@wnsqud70/%EC%A0%95%EA%B7%9C%EC%8B%9D
2. Code
https://school.programmers.co.kr/learn/courses/30/lessons/17682/solution_groups?language=python3
3. How to use regular expressions
https://whatisthenext.tistory.com/116
4. Vegeta meme
https://www.youtube.com/watch?v=nwhmV-KO1pw
