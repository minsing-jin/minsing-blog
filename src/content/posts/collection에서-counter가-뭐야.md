---
title: "collection에서 counter가 뭐야?"
pubDatetime: 2022-12-16T14:56:42.319Z
description: "딕셔너리의 데이터 개수를 세어보자"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/collection에서-counter가-뭐야"
velogSeries: ["악당 개념패거리들 정리"]
---

# 완주하지 못한 선수를 풀다가.....
```python
import collections


def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[0]
```

남의 코드 예제를 분석하던중 collection모듈의 counter 클래스를 알게 되었다. 도대체 이녀석을 빼고 keys를 통해 리스트로 만들어 인덱스 0에 접근하면 왜 답이 나올까?

# Counter란?
- collection 모듈의 하나의 클래스로 데이터의 개수를 셀때 아주 유용하다

# 사용법
## 기본
중복된 데이터가 저장된 배열을 인자로 넘기면 각 원소가 몇번씩 나오는지 저장된 객체를 얻게 된다.
```python
>>> Counter(["hi", "hey", "hi", "hi", "hello", "hey"])
Counter({'hi': 3, 'hey': 2, 'hello': 1})
```

문자열 사용방법은 아래 참고문헌에서 이어서 참조

## 산술 연산자 활용
위 코드에서 봤던 것이 counter를 산술 연산자로서 사용한 것이다. 덧셈 뺄셈이 가능하다.
```python
counter1 = Counter(["A", "A", "B"])
counter2 = Counter(["A", "B", "B"])

counter1 + counter2
Counter({'A': 3, 'B': 3})

counter1 - counter2
Counter({'A': 1})
```
뺄샘의 결과로 0이나 음수가 나온 경우에는 최종 카운터 객체에서 제외가 되니 이 부분 주의해서 사용할것! 위 코드는 이 점을 이용해서 완주하지 못한 선수를 색출해냈다.


>>
참고문헌
1. https://www.daleseo.com/python-collections-counter/
2. 사진 출처: https://jindabang.tistory.com/9
