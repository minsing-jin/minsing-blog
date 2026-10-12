---
title: Retrying Functions with Tenacity
pubDatetime: 2023-12-11 13:00:35.581000+00:00
description: Using a Dormammu-style loop to retry when an error occurs
category: Programming & CS
tags: []
language: en
translationOf: tenacity로-함수-도르마무하기
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/d4b26bb4253ce0fd.png)


# Conclusion
- Usually, when an error or exception is handled, the runtime may terminate. Tenacity reruns a function multiple times without terminating the runtime.


# Situation
While preprocessing and running pytest for the BEIR dataset benchmark, an unfortunate situation occurred: even though I had sliced 7 datasets, it still took an entire hour.


While exploring the depths of the Ragas code to determine the cause, I discovered code using Tenacity to specify the maximum number of retries. This led me to look into Tenacity and write this article.


# Usage
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
When run this way, an error occurs immediately, after which the script terminates right away.
```
running...
Traceback (most recent call last):
...
ValueError: Errors make me stronger
```



**As seen in the depths of Ragas, Tenacity allows you to try multiple times.**


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


**How to set the execution interval**
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


I specified tenacity.wait_fixed(10) for the wait parameter. Here, 10 means 10 seconds.


When you run the script, it executes 5 times at 10-second intervals this time.



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


# How did Ragas use it?
It set the retry count and time so that it would retry once a certain amount of time had passed.


> References
https://daco2020.tistory.com/520
