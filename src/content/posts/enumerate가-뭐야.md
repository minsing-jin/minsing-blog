---
title: "enumerate()가 뭐야?"
pubDatetime: 2022-11-26T14:19:08.845Z
description: "리스트에서 인덱스랑 element들을 한꺼번에 뽑고 싶다?"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/enumerate가-뭐야"
velogSeries: ["악당 개념패거리들 정리"]
---

- 리스트가 있는 경우 순서와 리스트 값을 전달하는 기능
--------------------
>
### 1. 구성

**1-1. 형태**

- enumerate(iterable, start=0)

- 부연설명: iterable한 자료형(list, set, tuple, dictionary, string)을 입력으로 받아 인덱스 값과 element들을 tuple로 묶어서 enumerate 객체를 리턴

**1-2. parameter**
- iterable: iterable한 자료형(list, set, tuple, dictionary, string)
- start=0: 순서 체크의 시작점
ex)
```python
list(enumerate(seasons, start=1))
[(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]
```

-----------------------
>
### 2. 쓰임

- 기본적으로 for loop에서 많이 쓰임
- index와 element를 동시에 얻고자 할때
```python
>>> for entry in enumerate(['A', 'B', 'C']):
...     print(entry)
...
(0, 'A')
(1, 'B')
(2, 'C')
```

**tip) 고급 응용(2차원 matrix)**
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

2차원 matrix의 좌표를 보다더 가시성 높은 코드로 한꺼번에 알수 있음.

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
### 3. 정리

- for문을 통해서 인덱스와 요소들을 동시에 얻고 싶을때 enumerate을 쓴다.

> 참고문헌
1.https://www.daleseo.com/python-enumerate/
2.https://wikidocs.net/20792
