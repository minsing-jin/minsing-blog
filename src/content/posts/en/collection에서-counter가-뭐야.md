---
title: What is Counter in collections?
pubDatetime: 2022-12-16 14:56:42.319000+00:00
description: Let's count the number of items in a dictionary
category: Programming & CS
tags: []
language: en
translationOf: collection에서-counter가-뭐야
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

# Solving the problem of the player who didn't finish.....
```python
import collections


def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[0]
```


While analyzing someone else's code example, I learned about the Counter class in the collections module. Why on earth does subtracting this thing, converting the result to a list through keys, and accessing index 0 produce the answer?


# What is Counter?
- A class in the collections module that is very useful for counting the number of data items


# How to use it
## Basics
If you pass an array containing duplicate data as an argument, you get an object that stores how many times each element appears.
```python
>>> Counter(["hi", "hey", "hi", "hi", "hello", "hey"])
Counter({'hi': 3, 'hey': 2, 'hello': 1})
```


For how to use it with strings, refer to the reference below.


## Using arithmetic operators
What we saw in the code above was using Counter as an arithmetic operator. Addition and subtraction are possible.
```python
counter1 = Counter(["A", "A", "B"])
counter2 = Counter(["A", "B", "B"])

counter1 + counter2
Counter({'A': 3, 'B': 3})

counter1 - counter2
Counter({'A': 1})
```
If the result of the subtraction is zero or negative, it is excluded from the final Counter object, so be careful when using it! The code above used this fact to identify the player who did not finish.



>>
References
1. https://www.daleseo.com/python-collections-counter/
2. Image source: https://jindabang.tistory.com/9
