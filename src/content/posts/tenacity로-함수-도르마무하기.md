---
title: "Tenacity로 함수 도르마무하기"
pubDatetime: 2023-12-11T13:00:35.581Z
description: "오류날때 다시 시도하기위해 도르마무하기"
category: "고오급 스킬들 공략집"
canonicalURL: "https://velog.io/@minsing-jin/Tenacity로-함수-도르마무하기"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/d4b26bb4253ce0fd.png)

# 결론
- 보통 에러나 예외처리 하면 런타임이 종료될때가 있다. tenacity로 런타임 종료없이 여러번 함수를 다시 실행시켜준다.

# 상황
beir dataset benchmark를 위해서 preprocess하고 pytest를 하였더니 7개의 dataset을 slice했음에도 불구하고 1시간이나 걸리는 불상사가 생겼다.

이에 ragas 코드 심연 탐험을 하면서 원인을 파악하던중 tenacity를 통해서 retry를 최대 몇번까지 하겠다라는 코드를 발견했고, tenacity에 대해서 알아보며 이 글을 작성하게 되었다.

# 사용법
```pip
pip install tenacity
```

```python
import tenacity

def throw_error():
    print("running...")
    raise ValueError("Errors make me stronger")

if __name__ == "__main__":
    throw_error()
```
이렇게 실행하다보면 바로 에러가 발생한후 곧바로 스크립트가 종료된다.
```
running...
Traceback (most recent call last):
...
ValueError: Errors make me stronger
```


**ragas 심연에서 봤듯이 Tenacity를 쓰면 여러번 try할 수 있다.**

```python
@tenacity.retry( # 데코레이터 추가
    stop=tenacity.stop_after_attempt(5), # stop 파라미터 추가
)
def throw_error():
    print("running...")
    raise ValueError("Errors make me stronger")
```

```
running... # 1번
running... # 2번
running... # 3번
running... # 4번
running... # 5번
Traceback (most recent call last):
...
tenacity.RetryError: RetryError[<Future at 0x1050b6370 state=finished raised ValueError>]
```

**실행간격정하는 방법**
```python
@tenacity.retry(
    wait=tenacity.wait_fixed(10), # wait 파라미터 추가
    stop=tenacity.stop_after_attempt(5),
)
def throw_error():
    date = datetime.datetime.now().time() # 시간을 확인하기위해 추가
    print(f"time: {date}, running... ")
    raise ValueError("Errors make me stronger")
```

wait 파라미터에 tenacity.wait_fixed(10)을 지정해주었다. 여기서 10은 10초를 의미한다.

스크립트를 실행해보면 이번에는 10초 간격으로 5번 실행된다.


```python
time: 13:29:27.350657, running... 
time: 13:29:37.355707, running... 
time: 13:29:47.358180, running... 
time: 13:29:57.368775, running... 
time: 13:30:07.371236, running... 
Traceback (most recent call last):
...
tenacity.RetryError: RetryError[<Future at 0x1054425e0 state=finished raised ValueError>]
```

# ragas는 어떻게 썼나
retry와 시간을 정해서 일정시간이 넘어가면 retry 하도록 만들었다.

> 참고문헌
https://daco2020.tistory.com/520
