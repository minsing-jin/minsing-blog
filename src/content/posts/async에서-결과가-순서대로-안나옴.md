---
title: "Async에서 결과가 순서대로 안나옴"
pubDatetime: 2024-09-11T04:30:52.714Z
description: "비동기 처리의 결과가 뒤죽박죽 나오는것임!!"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/Async에서-결과가-순서대로-안나옴"
velogSeries: ["악당 개념패거리들 정리"]
---

![](/images/velog/d06414d6e093d84b.png)

#  asycio 비동기처리에서 Idx가 왜 안 섞여나옴? 
-> 비동기 처리의 결과가 뒤죽박죽 나오는것임!! 


비동기 처리에서 작업이 **순서대로 진행되는지** 아니면 **뒤죽박죽으로 진행되는지**에 대한 질문을 이해했어. 비동기 처리의 특성상 작업이 **동시에 실행**될 수 있지만, **결과가 순서대로 나오는 이유**는 `asyncio.gather()`의 동작 방식 때문이야. 이제 이 부분을 자세히 설명할게.

### 비동기 처리에서 순서가 유지되는 이유

1. **`asyncio.gather()`의 동작 방식**:
   - `asyncio.gather()`는 여러 비동기 작업을 동시에 실행하지만, **결과는 입력된 순서대로 반환**해. 즉, `gather()`에 전달된 작업들이 비동기적으로 실행되더라도, **결과 리스트는 작업을 전달한 순서대로 정렬**돼.
   - 예를 들어, `tasks = [task1, task2, task3]`라는 작업 리스트가 있을 때, `asyncio.gather(*tasks)`는 각 작업이 비동기적으로 실행되더라도, 결과는 `[result1, result2, result3]`처럼 **작업을 전달한 순서대로 반환**돼.

2. **비동기 작업의 실행 순서**:
   - 비동기 작업은 **동시에 실행**될 수 있지만, 각 작업이 완료되는 시간은 다를 수 있어. 하지만 `asyncio.gather()`는 **작업이 완료되는 순서와 상관없이** 결과를 **입력된 순서대로 반환**해.
   - 예를 들어, `task1`이 3초, `task2`가 1초, `task3`이 2초 걸린다고 해도, `asyncio.gather()`는 결과를 `[result1, result2, result3]` 순서로 반환해. 즉, **작업이 완료되는 순서와 상관없이** 결과는 항상 **입력된 순서대로** 나오는 거야.

3. **비동기 작업의 병렬성**:
   - 비동기 작업은 **병렬적으로 실행**되지만, **결과를 반환하는 방식**은 `asyncio.gather()`가 **순서를 보장**해줘. 따라서 작업이 뒤죽박죽으로 실행되더라도, 결과는 항상 **순서대로** 나오는 거야.

### 예시 코드로 설명

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

#### 실행 결과 예시

```
Task 1 완료 (지연 시간: 1.23초)
Task 3 완료 (지연 시간: 1.45초)
Task 0 완료 (지연 시간: 2.12초)
Task 4 완료 (지연 시간: 2.34초)
Task 2 완료 (지연 시간: 2.89초)
결과: [0, 1, 2, 3, 4]
```

- **작업 완료 순서**: `Task 1`, `Task 3`, `Task 0`, `Task 4`, `Task 2` 순서로 완료됐어. 이는 각 작업의 지연 시간이 다르기 때문이야.
- **결과 순서**: 하지만 `asyncio.gather()`는 **결과를 입력된 순서대로 반환**했어. 즉, `results`는 `[0, 1, 2, 3, 4]` 순서로 나왔어.

### 결론

- **비동기 작업은 동시에 실행**되지만, `asyncio.gather()`는 **결과를 입력된 순서대로 반환**해. 그래서 작업이 뒤죽박죽으로 완료되더라도, **결과는 항상 순서대로** 나오는 거야.
- 비동기 처리에서 작업이 **완료되는 순서**와 **결과가 반환되는 순서**는 다를 수 있지만, `asyncio.gather()`는 **결과의 순서를 보장**해줘.

### 추가 팁

만약 **작업이 완료되는 순서대로 결과를 받고 싶다면**, `asyncio.gather()` 대신 **`asyncio.as_completed()`**를 사용할 수 있어. `as_completed()`는 작업이 완료되는 순서대로 결과를 반환해.

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

이 코드를 실행하면 **작업이 완료되는 순서대로** 결과가 출력될 거야.
