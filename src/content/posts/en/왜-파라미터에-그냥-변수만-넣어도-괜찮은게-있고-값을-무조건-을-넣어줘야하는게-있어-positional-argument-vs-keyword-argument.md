---
title: Why are some parameters fine with just a variable, while others require you to always include a value with `=`? (Positional argument vs. keyword argument)
pubDatetime: 2023-10-24 10:50:30.089000+00:00
description: Why are there parameters that require a value to be provided and parameters that don't?
category: Programming & CS
tags: []
language: en
translationOf: 왜-파라미터에-그냥-변수만-넣어도-괜찮은게-있고-값을-무조건-을-넣어줘야하는게-있어-positional-argument-vs-keyword-argument
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

# Conclusion
1. Since we don't know what kind of parameters options such as `**kwarg` and `*arg` are, you should use keyword arguments that identify them by name.
2. For keyword arguments, you must assign values after declaring the method or function and its arguments.


Whether something is a positional argument or a keyword argument is determined when passing parameters to a function or method:
-> whether you assign a value by entering a name and adding `=`
-> or whether you omit it and assign only values in order


**Confusing points**
-> Just because a default value was provided in the original function does not automatically make it a keyword argument!
-> Just because `=` is present does not automatically make it a keyword argument!




# Question
- Why is it acceptable to put just a variable in some function parameters, while other parameters require a value to be provided?


## Background
While creating a code splitter class, I tried to use LangChain's `from_language` method, and 
![](/images/velog/4bbf17556917c8f3.png)


Even though I had clearly set default values for `chunk_size` and `chunk_overlap` in the constructor parameters and passed them as they were, I got a `positional argument after keyword argument` error.




# Solution
![](/images/velog/4bbf17556917c8f3.png)


1. The `chunk_size` and `chunk_overlap` shown here are optional arguments represented by `**kwarg`, so you must use keyword arguments to specify what they are by name.


2. Since the `language` parameter was already written **first** as a keyword parameter, you can either change all the remaining parameters to keyword parameters as well,
or move the keyword parameters to the very end so that they do not affect the order of the positional arguments in the original method.



![](/images/velog/a2c8aebbc866dc3e.png)
They must be assigned in this way.


------------------------------


# Positional Argument
- A part that is set only as an argument in a function
- When calling a function and passing values to its parameters, you must always follow the correct order.


**Limitations**
- If a function has too many arguments, you may get confused while developing and accidentally pass a value to the wrong place.
-> What if we want to create arguments for which the order does not matter?
-> Let's make them **findable by name only**!


**That is exactly what a keyword argument is.** 


```Python
def student_info(name, sex, age) :
  print(f"""
  이름 : {name}
  성별 : {sex}
  나이 : {age}
  """)

>>> student_info("고길동", "남자", 50)
이름 : 고길동
성별 : 남자
나이 : 50

# 단점 : 순서를 잘못 알면 원하는 결과 값이 나오지 않음
>>> student_info("고길동", 50, "남자")
이름 : 고길동
성별 : 50
나이 : 남자
```


# Keyword Argument
- A form in which the function has `argment = value`
- When assigning values to function parameters, the order does not matter; you only need to mention the correct name and assign a value.


As in the example below, with `def student_info(name, sex, age)`, you would normally have to assign the parameters in the order name, sex, and age. However, by using keyword arguments like (age = 50, name = "Go Gil-dong", sex = "male"), you can do so regardless of the order.


```python
>>> student_info(age = 50, name = "고길동", sex = "남자")
이름 : 고길동
성별 : 남자
나이 : 50
```




# Rules
## 1. What is the rule when mixing positional arguments and keyword arguments whose order does not matter?
**Conclusion: If you want to use them together, write the positional argument group first, followed by the keyword argument group.**


You only need to avoid examples like the following.
```python
def student_info(name, sex, age= 1, hobby) :
  print(f"""
  이름 : {name}
  성별 : {sex}
  나이 : {age}
  취미: {hobby}
  """)
```
As shown above, `hobby`, whose order matters, comes after `age`, a keyword argument whose order does not matter. If this happens,
![](/images/velog/8929a473ae954496.png)
a syntax error occurs.


### Why can't you do this?
If a keyword argument group is inserted between positional argument groups like that, the order-independent arguments get inserted between order-dependent arguments, so the order-dependent arguments that follow no longer have meaningful positions. In other words, it becomes impossible to determine which position they occupy.




## 2. When setting default values


When defining a function, you must not declare a default-value parameter before a non-default-value parameter. If you declare a default-value parameter first as shown below, a SyntaxError occurs and the function is not declared.


```python
def student_info(age= 10, level) :
  print(f"""
  나이 : {age}
  게임 레벨 : {level}
  """)
```


```
> Traceback (most recent call last):   
    File "python", line 1 

SyntaxError: non-default argument follows default argument
```


This is because if a default-value parameter is declared first, then when calling the function later, it is impossible to know which parameter a particular input argument is assigned to. Since the default-value parameter may or may not receive an input, it becomes difficult to return exactly the desired value.


-> In that case, when declaring the function, you do not know which parameter the argument being passed will be assigned to. 
```python
student_info(50)
```
In code like the example above, you do not know whether the age is 50 or the game level is 50.





# General Principles
## 1. Always assign Keyword Arguments inside `()`
## 2. Positional Arguments first, followed by Keyword Arguments
## 3. Parameters that have Default Values must always come after non-default parameters




[Legendary reference](https://velog.io/@devmin/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%ED%95%A8%EC%88%98%EC%9D%98-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98%EC%9D%98-%ED%8A%B9%EC%A7%95-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)
