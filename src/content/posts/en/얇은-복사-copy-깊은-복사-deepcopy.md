---
title: Shallow Copy copy(), Deep Copy deepcopy()
pubDatetime: 2023-10-17 06:12:18.404000+00:00
description: Clone technique!
category: Programming & CS
tags: []
language: en
translationOf: 얇은-복사-copy-깊은-복사-deepcopy
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

# Problem Situation
- I was trying to make a copy of the original document using a deep copy to create test code, but after importing the copy module and proudly using the copy() method, I ended up struggling with why it wasn't making a deep copy.
-> Solution: Import the copy module as before, but use deepcopy from the copy module to solve the problem. 


# Shallow Copy vs. Deep Copy
- Since there are many ways to make a shallow copy, I will explain deep copying first.


## Deep Copy
### Method
- copy.deepcopy(data)
### Principle
- Assign the original to a different memory location


![](/images/velog/dfb1116c42c64e12.png)



## Shallow Copy
### Methods
- Assignment (=)
- [:] slicing
- object.copy
- copy.copy


### Principle
- Assignment (=): A method in which another copy variable points to the same memory address where the original's information is stored (the address values are the same)
![](/images/velog/51c5de4b9379773e.png)


- Slicing, object.copy, copy.copy: 
![](/images/velog/a6e785ce81f7b886.png)



>
References:
https://blockdmask.tistory.com/576
