---
title: "얇은 복사 copy() , 깊은 복사 deepcopy()"
pubDatetime: 2023-10-17T06:12:18.404Z
description: "분신술!"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/얇은-복사-copy-깊은-복사-deepcopy"
velogSeries: ["악당 개념패거리들 정리"]
---

# 문제상황
- 테스트 코드를 만들기 위해서 원본 document를 깊은 복사로 사본을 만들려고 했는데 copy모듈 import해놓고, 뿌듯하게 copy() 메서드를 써놓고서는 왜 깊은 복사가 안되는거지 삽질을 하고 있었음.
-> 해결: copy 모듈을 import것은 동일하나 copy모듈의 deepcopy를 사용해서 해결 

# 얇은 복사 vs 깊은 복사
- 얇은 복사는 방법이 많아서 깊은 복사 먼저 설명하겠다.

## 깊은 복사(Deep copy)
### 방법
- copy.deepcopy(자료)
### 원리
- 원본을 다른 메모리에 할당

![](/images/velog/dfb1116c42c64e12.png)


## 얇은 복사(Shallow copy)
### 방법
- 대입(=)
- [:] 슬라이싱
- 객체.copy
- copy.copy

### 원리
- 대입(=): 원본의 정보가 저장되어있는 메모리 주소를 다른 사본 변수가 동일하게 가리키는 방식(주소값이 같다)
![](/images/velog/51c5de4b9379773e.png)

- 슬라이싱, 객체.copy, copy.copy: 
![](/images/velog/a6e785ce81f7b886.png)


>
참고문헌:
https://blockdmask.tistory.com/576
