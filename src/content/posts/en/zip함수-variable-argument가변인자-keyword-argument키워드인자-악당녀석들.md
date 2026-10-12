---
title: The Zip Function, Variable Arguments (*/Variadic Arguments), and Keyword Arguments (**), Those Villainous Things
pubDatetime: 2022-10-03 07:39:32.437000+00:00
description: What on earth is *~~~~~
category: Programming & CS
tags: []
language: en
translationOf: zip함수-variable-argument가변인자-keyword-argument키워드인자-악당녀석들
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

# Motivation
A problem was posted on Programmers that involved expressing matrix multiplication for a 2D matrix. After spending two hours doing it the hard way, I looked at the correct code.....


```python
def productMatrix(A, B):
    return [[sum(a*b for a, b in zip(A_row,B_col)) for B_col in zip(*B)] for A_row in A]
```


There were people who casually wrapped up my two hours of work in just one line like this. I felt a bit crushed, but pulled myself together and started understanding the code. Then I came across **zip(* B)** and, since it was my first time seeing it in a list comprehension, I looked it up.



<br>


<br>


<br>




# Code Explanation
```python
def productMatrix(A, B):
    return [[sum(a*b for a, b in zip(A_row,B_col)) for B_col in zip(*B)] for A_row in A]
```


Here, the rows of A are unpacked into A_row with a for loop. Then, using zip(B), the elements in B are unpacked with * into [2, 3, 2] [4, 2, 4] [3, 1, 4], transforming the 2D array into multiple 1D arrays.


Then, using zip, the arrays are reconstructed into tuples according to the index order, such as (2, 4, 3), (3, 2, 1), and (2, 4, 4), so that they can be multiplied directly by the values in A_row in index order.


The well-processed A_row and B_col are multiplied and added sequentially according to the matrix multiplication formula through a for loop, producing the resulting matrix.




<br>


<br>


<br>


# What Is Zip?


Purpose: It takes two or more iterable objects as arguments, groups their elements together **in index order**, and outputs them in tuple form.


As you can see here, the lists a and b are paired with each other in index order and output in tuple form.


```python
# zip(*iterable) : 동일한 개수로 이루어진 자료형을 묶어 줌
a = ['one', 'two', 'three']
b = ['a', 'b', 'c']
list(zip(a, b))
>>> [('one', 'a'), ('two', 'b'), ('three', 'c')]
```




When creating a transposed matrix, in other words, when you want to perform a transpose, use zip and variable-length arguments.


```python
# 전치행렬 생성
a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
b = list(zip(*a))
b
>>> [(1, 4, 7), (2, 5, 8), (3, 6, 9)]
```


Example code involving variable-length arguments: [Source](https://chancoding.tistory.com/144)





It is mainly used in a for loop to receive two or more iterable objects, such as lists, and unpack two or more variables.



```python
>>> for number, upper, lower in zip("12345", "ABCDE", "abcde"):
...     print(number, upper, lower)
...
1 A a
2 B b
3 C c
4 D d
5 E e

```


### Added November 17, 2023
Pandas DataFrames can also be grouped together using zip in the same way.
```python
result = make_passages.apply(self.__make_passages_and_retrieval_gt, axis=1)
make_passages['passages'], self.ingest_data['retrieval_gt'], self.ingest_data['retrieval_gt_order'] = zip(*result)

```


<br>


<br>


<br>


# What Are * and **? (Variable-Length Arguments/Keyword Arguments)


## 3. Variable-Length Arguments/Keyword Arguments




**Variable-length arguments**: As the name suggests, these are arguments whose length can vary. When multiple values are passed to a function parameter, the objects are immediately **packed into a tuple** and stored in the variable.


**Advantages**: They are convenient when you do not know how many pieces of data will be passed as arguments to an arbitrary function.
When looking through various APIs or well-written code, you will often see expressions such as * args or ** kwargs in functions.


This means that variable-length arguments are being used. The difference between one asterisk and two is the difference between positional and keyword arguments.



```python
def function(a, b = None):
...
```


Here, a is called positional arguments, and b is called keyword arguments. As everyone knows, an error occurs when a has no value, while b is given a default value of None.


As in the example below, args is stored and output as a tuple or list, while kwargs is stored and output as a dict; they can also be used simultaneously.


```python
def args_function(*args):
    print(args)

def kwargs_function(**kwargs):
    print(kwargs)
    
args_function('a', 'b') # ('a', 'b')
kwargs_function(a = 100, b = 200) # {'a':100, 'b':200}
```


Explanation of the types of arguments -> https://wikidocs.net/22799 
If you want to understand them through more precise applications, I have collected examples using neis
-> https://goodthings4me.tistory.com/31 








**Keyword arguments**: This is another term related to variable-length arguments. When defining a function, ** args leads to the creation of a dictionary, and the arguments must be passed in the form of a dictionary (key=value). In other words, you pass them so they can be received in dictionary form and stored in dictionary form.


<br>


<br>


<br>


## Unpacking ( * )
As you may have briefly seen above, variable-length arguments ( * ) unpack items that have been grouped two or three times in a list. Let's take a look at an example.


``` python
B = [[2, 3, 2], [4, 2, 4], [3, 1, 4]]
print(*B)

>>>[2, 3, 2] [4, 2, 4] [3, 1, 4]

```


This removes the parentheses surrounding the 2D array B and turns it into several 1D lists. This is exactly the unpacking function of *.





[Explanation of an example code using neis](https://goodthings4me.tistory.com/31)



>
This post was written with reference to the sites below.
GoodThings4Me: https://goodthings4me.tistory.com/31
Wikidocs: https://wikidocs.net/22799 
Explaining it simply for graduate students: https://hwiyong.tistory.com/193
Super Mario image: https://ko.newhotgames.com/%EC%8A%88%ED%8D%BC-%EB%A7%88%EB%A6%AC%EC%98%A4-64-%EA%B6%81%EA%B7%B9-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%AA%A8%EB%93%A0-%EB%B3%84-%EB%B9%A8%EA%B0%84-%EB%8F%99%EC%A0%84-%EB%AA%A8%EC%9E%90%EB%A5%BC/
