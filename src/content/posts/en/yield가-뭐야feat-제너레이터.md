---
title: What is yield? (feat. generators)
pubDatetime: 2023-10-11 06:49:02.032000+00:00
description: To yield
category: Programming & CS
tags: []
language: en
translationOf: yield가-뭐야feat-제너레이터
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

# What is yield?
Other functions can return one return value per function, but a yield generator can provide return values multiple times by dividing them up.
(Providing them multiple times means that whenever the function is executed, it returns multiple times in the order in which the values were yielded.)


Example code
```python
def yield_abc():
  yield "A"
  yield "B"
  yield "C"
  
for ch in return_abc():
  print(ch)
  
'''
결과 값은
A
B
C
로 나온다.
'''
```




# What is a Generator?
An object that can create multiple pieces of data one at a time as needed, without generating them all in advance.


## Why use it?
If multiple return values can be created one at a time as needed, 
you can obtain the results in portions, which is a huge performance benefit.
In terms of memory efficiency, when using the return keyword, all results must be loaded into memory, whereas when using the yield keyword, the results are loaded into memory one at a time.


For this reason, it is often possible to write more efficient programs.


Seems like it would be super useful for coding tests?


Example code
Case1)
```python
import time

def return_abc():
  alphabets = []
  for ch in "ABC":
    time.sleep(1)
    alphabets.append(ch)
  return alphabets
```
```python
for ch in return_abc():
  print(ch)
```
```
# 3초 경과
A
B
C
```


Case2)
```python
import time

def yield_abc():
  for ch in "ABC":
    time.sleep(1)
    yield ch
    
for ch in yield_abc():
  print(ch)
  
'''
# 1초 경과
A
# 1초 경과
B
# 1초 경과
C

'''
```



> References
[1. Detailed explanation of generators](https://www.daleseo.com/python-yield/)
[2. Detailed explanation of generators](https://medium.com/humanscape-tech/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%ED%84%B0%EC%99%80-%EC%BD%94%EB%A3%A8%ED%8B%B4-185ae5089bc2)
