---
title: Python getter → What Is __getitem__?
pubDatetime: 2025-05-05 07:19:35.178000+00:00
description: '


  `__getitem__` is a method in Python that is called when an object is indexed (`obj[key]`) or sliced (`obj[start:stop]`). Defining this method inside a class allows instances of that class to be used like lists or dictionaries.


  📌 Basic Usage


  🎯 Key Features


  When `obj[key]` is called, `obj.__getitem__(key)` is called automatically....'
category: Programming & CS
tags: []
language: en
translationOf: 파이썬-getter-getitem이란
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

![](/images/velog/45253a0cfd5fb4b3.png)



`__getitem__` is a method in Python that is **called when an object is indexed (`obj[key]`) or sliced (`obj[start:stop]`)**. Defining this method inside a class allows instances of that class to be used like lists or dictionaries.


---


### 📌 Basic Usage


```python
class MyList:
    def __init__(self, data):
        self.data = data

    def __getitem__(self, index):
        print(f"Called with index: {index}")
        return self.data[index]

my_list = MyList([10, 20, 30])
print(my_list[1])  # => Called with index: 1
                   # => 20
```


---


### 🎯 Key Features


* When `obj[key]` is called, `obj.__getitem__(key)` is called automatically.
* `key` can be not only an integer, but also a slice, tuple, string, and more.


---


### ✅ Slicing Can Also Be Supported


```python
class MyList:
    def __init__(self, data):
        self.data = data

    def __getitem__(self, index):
        print(f"Index received: {index}")
        return self.data[index]

lst = MyList([1, 2, 3, 4, 5])
print(lst[1:4])  # 슬라이스 객체(slice(1,4,None))가 전달됨
```


---


### 📦 Example: Mimicking a Two-Dimensional Array


```python
class Matrix:
    def __init__(self, rows):
        self.rows = rows

    def __getitem__(self, index):
        return self.rows[index]

m = Matrix([[1, 2], [3, 4]])
print(m[0][1])  # 2
```


---


### ⚠️ Notes


* `__getitem__` is **read-only**. To support writing, you need to define `__setitem__`.
* It is a good idea to handle `KeyError`, `IndexError`, and other exceptions appropriately.


If you're curious, I can also explain `__setitem__` and `__delitem__`. Would you like to learn more?
