---
title: Is there a function called by another function? (Callback Function)
pubDatetime: 2023-12-11 12:49:51.239000+00:00
description: Pikachu function, I choose you! Come out!
category: Programming & CS
tags: []
language: en
translationOf: 다른-함수에서-호출되는-함수가-있어콜백-함수-callback-function
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

![](/images/velog/640fdb43dd086624.png)


# Conclusion
- This is a function that is called by another function, rather than being called directly.
- A function is passed as a parameter, and the received function is called and used.


**Example)**
```python
def callback_func(func):
	for i in range(5):
    	func(i)
        
def print_hello(num):
	print('hello', num)
    
callback_func(print_hello)
```




> References
https://coding-yesung.tistory.com/20
