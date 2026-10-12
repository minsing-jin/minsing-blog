---
title: Results Don't Come Out in Order in Async
pubDatetime: 2024-09-11 04:30:52.714000+00:00
description: The results of asynchronous processing come out all jumbled!!
category: Programming & CS
tags: []
language: en
translationOf: async에서-결과가-순서대로-안나옴
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

![](/images/velog/d06414d6e093d84b.png)


# Why Don't Index Values Get Mixed Up in Async Processing?
-> The results of asynchronous processing come out jumbled!!



I understand your question about whether tasks in asynchronous processing **proceed in order** or **proceed in a jumbled order**. Due to the nature of asynchronous processing, tasks can be **executed simultaneously**, but the reason **the results come out in order** is because of how `asyncio.gather()` works. I'll explain this in detail now.


### Why order is maintained in asynchronous processing


1. **How `asyncio.gather()` works**:
   - `asyncio.gather()` executes multiple asynchronous tasks simultaneously, but **returns the results in the order they were provided**. In other words, even if the tasks passed to `gather()` are executed asynchronously, the **result list is arranged in the order the tasks were passed**.
   - For example, if there is a task list called `tasks = [task1, task2, task3]`, `asyncio.gather(*tasks)` returns the results as `[result1, result2, result3]`, **in the order the tasks were passed**, even if each task is executed asynchronously.


2. **Execution order of asynchronous tasks**:
   - Asynchronous tasks can be **executed simultaneously**, but each task may take a different amount of time to complete. However, `asyncio.gather()` returns the results **in the order they were provided**, **regardless of the order in which the tasks finish**.
   - For example, even if `task1` takes 3 seconds, `task2` takes 1 second, and `task3` takes 2 seconds, `asyncio.gather()` returns the results in the order `[result1, result2, result3]`. In other words, **regardless of the order in which the tasks finish**, the results always come out **in the order they were provided**.


3. **Parallelism of asynchronous tasks**:
   - Asynchronous tasks are **executed in parallel**, but `asyncio.gather()` **guarantees the order** in which the results are returned. Therefore, even if the tasks are executed in a jumbled order, the results always come out **in order**.


### Explanation with example code


```python
import asyncio
import random

async def task(idx):
    delay = random.uniform(1, 3)  # 1초에서 3초 사이의 랜덤한 지연 시간
    await asyncio.sleep(delay)
    print(f"Task {idx} 완료 (지연 시간: {delay:.2f}초)")
    return idx

async def main():
    tasks = [task(i) for i in range(5)]
    results = await asyncio.gather(*tasks)
    print(f"결과: {results}")

# 이벤트 루프 실행
asyncio.run(main())
```


#### Example execution result


```
Task 1 완료 (지연 시간: 1.23초)
Task 3 완료 (지연 시간: 1.45초)
Task 0 완료 (지연 시간: 2.12초)
Task 4 완료 (지연 시간: 2.34초)
Task 2 완료 (지연 시간: 2.89초)
결과: [0, 1, 2, 3, 4]
```


- **Task completion order**: The tasks finished in the order `Task 1`, `Task 3`, `Task 0`, `Task 4`, `Task 2`. This is because each task has a different delay.
- **Result order**: However, `asyncio.gather()` **returned the results in the order they were provided**. In other words, `results` came out in the order `[0, 1, 2, 3, 4]`.


### Conclusion


- **Asynchronous tasks are executed simultaneously**, but `asyncio.gather()` **returns the results in the order they were provided**. So even if the tasks finish in a jumbled order, **the results always come out in order**.
- In asynchronous processing, the **order in which tasks finish** and the **order in which results are returned** may differ, but `asyncio.gather()` **guarantees the order of the results**.


### Additional tip


If you want to receive results **in the order the tasks finish**, you can use **`asyncio.as_completed()`** instead of **`asyncio.gather()`**. `as_completed()` returns results in the order the tasks finish.


```python
import asyncio
import random

async def task(idx):
    delay = random.uniform(1, 3)
    await asyncio.sleep(delay)
    print(f"Task {idx} 완료 (지연 시간: {delay:.2f}초)")
    return idx

async def main():
    tasks = [task(i) for i in range(5)]
    for completed_task in asyncio.as_completed(tasks):
        result = await completed_task
        print(f"완료된 작업 결과: {result}")

# 이벤트 루프 실행
asyncio.run(main())
```


If you run this code, the results will be printed **in the order the tasks finish**.
