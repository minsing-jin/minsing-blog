---
title: What is enumerate()?
pubDatetime: 2022-11-26 14:19:08.845000+00:00
description: Want to extract the indices and elements from a list all at once?
category: Programming & CS
tags: []
language: en
translationOf: enumerate가-뭐야
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

- A function for obtaining the indices and list values together when a list is present
--------------------
>
### 1. Configuration


**1-1. Syntax**


- enumerate(iterable, start=0)


- Additional explanation: Takes an iterable data type (list, set, tuple, dictionary, string) as input, bundles the index values and elements into tuples, and returns an enumerate object


**1-2. Parameters**
- iterable: An iterable data type (list, set, tuple, dictionary, string)
- start=0: The starting value for the index
ex)
```python
list(enumerate(seasons, start=1))
[(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]
```


-----------------------
>
### 2. Usage


- It is mainly used in for loops
- When you want to obtain the index and element simultaneously
```python
>>> for entry in enumerate(['A', 'B', 'C']):
...     print(entry)
...
(0, 'A')
(1, 'B')
(2, 'C')
```


**tip) Advanced application (two-dimensional matrix)**
```python
>>> matrix = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I']]

# 일반 
>>> for r in range(len(matrix)):
...     for c in range(len(matrix[r])):
...             print(r, c, matrix[r][c])
...
0 0 A
0 1 B
0 2 C
1 0 D
1 1 E
1 2 F
2 0 G
2 1 H
2 2 I
````


You can determine the coordinates of a two-dimensional matrix all at once with more readable code.


```python
# enumerate 응용
>>> for r, row in enumerate(matrix):
...     for c, letter in enumerate(row):
...             print(r, c, letter)
...
0 0 A
0 1 B
0 2 C
1 0 D
1 1 E
1 2 F
2 0 G
2 1 H
2 2 I
```



-----------------------------


>
### 3. Summary


- Use enumerate when you want to obtain the indices and elements simultaneously through a for loop.


> References
1.https://www.daleseo.com/python-enumerate/
2.https://wikidocs.net/20792
