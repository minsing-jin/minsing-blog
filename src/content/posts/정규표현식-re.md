---
title: "정규표현식 re"
pubDatetime: 2022-11-25T14:45:19.787Z
description: "문자열의 패턴을 분석해보자"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/정규표현식-re"
velogSeries: ["악당 개념패거리들 정리"]
---

**계기**
프로그래머스 우수 코드를 보던중 다트게임에서 정규표현식으로 표현한 코드가 있어서 리뷰중 궁금증 발생

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

# 정규표현식이란?
- 텍스트 데이터중 내가 설정한 조건에 해당하는 문자열 패턴을 찾아내기 위해 사용

-> 정규식을 이용하면 많은 양의 텍스트 파일중에서 **원하는 데이터를 손쉽게 뽑아낼수 있고**, **데이터가 형식에 맞는지 체크 가능**

------------------------

# 사용법

1. re module import
2. 정규식 표현 규칙에 따라서 compile을 하고 findall로 찾기
findall -> https://velog.io/@beanlove97/%ED%8C%8C%EC%9D%B4%EC%8D%AC-findall-%EB%A9%94%EC%84%9C%EB%93%9C
----------
# 정리
- example들을 보면서 정규식 표현 규칙들을 적용하는게 맞겠다. 굉장히 다양한 규칙을 설정하는 문법들이 있음.

> 참고문헌
1. 정규식 내용정리 참조(shaun.log) https://velog.io/@wnsqud70/%EC%A0%95%EA%B7%9C%EC%8B%9D
2. 코드
https://school.programmers.co.kr/learn/courses/30/lessons/17682/solution_groups?language=python3
3. 정규식 사용법
https://whatisthenext.tistory.com/116
4. 베지터 짤
https://www.youtube.com/watch?v=nwhmV-KO1pw
