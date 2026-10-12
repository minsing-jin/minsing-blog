---
title: How Asynchronous Processing Works
pubDatetime: 2024-09-11 04:18:11.561000+00:00
description: How Asynchronous Processing Works
category: Programming & CS
tags: []
language: en
translationOf: async-악당-개념들
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

![](/images/velog/20a832aa934c0280.png)


### How Asynchronous Processing Works


The key point of asynchronous processing is that it provides **concurrency** while executing on a **single thread**. This is particularly useful for I/O operations (e.g., reading/writing files, network requests, etc.). Asynchronous processing allows the CPU to handle other tasks while waiting for these operations.


#### Key Concepts


1. **Event Loop**:
   - This is the core of asynchronous processing. The event loop manages multiple tasks, waits until each task is complete, and then resumes execution.
   - The event loop schedules **asynchronous functions** (coroutines) and resumes the corresponding task when an I/O operation is complete.


2. **Coroutines**:
   - These are functions defined with `async def`. When a coroutine encounters the `await` keyword during execution, it suspends execution and hands control back to the event loop so that other tasks can run.
   - A coroutine is an **asynchronous function** that, unlike a synchronous function, can suspend execution and resume it later.


3. **Futures**:
   - These are objects that represent the result of a task that has not yet completed. A `Future` object contains the result of a task that will be completed later, and the event loop returns the result when that task is complete.


4. **Tasks**:
   - These are objects managed by the event loop to execute coroutines. `asyncio.Task` wraps a coroutine and manages its execution, returning the result as a `Future` object when it is complete.


#### How Asynchronous Processing Works


1. **Starting the Event Loop**:
   - Start the event loop by calling `asyncio.run()` or `asyncio.get_event_loop()`.
   - The event loop manages waiting tasks (coroutines) and waits until each task is complete.


2. **Executing Coroutines**:
   - When a coroutine encounters the `await` keyword, it suspends execution, and the event loop runs another task.
   - For example, another coroutine can run while a network request is being sent and its response is awaited.


3. **Waiting for I/O Operations**:
   - While a coroutine waits for an I/O operation through `await`, the event loop runs other coroutines. This prevents the CPU from remaining idle and allows it to process other tasks.


4. **Task Completion**:
   - When the I/O operation is complete, the event loop resumes the corresponding coroutine to process the remaining work.


#### Example Code


```python
import asyncio

async def fetch_data():
    print("데이터 요청 중...")
    await asyncio.sleep(2)  # 네트워크 요청을 시뮬레이션
    print("데이터 수신 완료")
    return "데이터"

async def main():
    print("비동기 작업 시작")
    result = await fetch_data()
    print(f"결과: {result}")

# 이벤트 루프 실행
asyncio.run(main())
```


#### Code Explanation


1. **`fetch_data` coroutine**:
   - This is an asynchronous function defined with `async def`. `await asyncio.sleep(2)` allows other tasks to run while waiting for 2 seconds.


2. **`main` coroutine**:
   - This calls the `fetch_data` coroutine and waits for its result. It uses the `await` keyword to wait until `fetch_data` is complete.


3. **Running the Event Loop**:
   - Start the event loop and run the `main` coroutine through `asyncio.run(main())`.


#### Advantages of Asynchronous Processing


- **Efficient Resource Usage**: Asynchronous processing uses resources efficiently by allowing the CPU to handle other tasks while waiting for I/O operations.
- **Concurrency**: Multiple tasks can be processed at the same time, greatly improving performance, especially for I/O-bound tasks such as network requests or file input/output.


#### Conclusion


Asynchronous processing is a way to handle I/O operations efficiently using an **event loop** and **coroutines**. This makes it possible to process multiple tasks concurrently on a single thread and can significantly improve performance, especially for I/O-bound tasks.


----------


The key point of asynchronous processing is that it provides **concurrency**, but you should remember that this is different from **parallel processing**. Now, I’ll explain the answer to your question step by step.


### Flow of Asynchronous Tasks


1. **Starting and Suspending a Task**:
   - When an asynchronous function (coroutine) encounters the `await` keyword, it suspends execution. At this point, the task is **not stopping completely**; rather, it is **handing control back to the event loop so that other tasks can run**.
   - For example, while a network request is being sent and its response is awaited, the CPU can process other tasks. The first task is paused while waiting for the network response, but the event loop is then able to run other tasks.


2. **Starting the Next Task**:
   - While the first task is suspended because of `await`, the event loop runs another asynchronous task. This task can likewise be suspended when it encounters `await`.
   - The important point is that **the event loop continues running other tasks while the first task is paused**. In other words, the second task starts while the first task is paused, and when the second task encounters `await`, execution can return to the first task.


3. **Are the Tasks Maintained Simultaneously?**:
   - **The second task starts while the first task is paused**, but the first task is still **managed by the event loop**. In other words, the first task has not ended completely; it is **being maintained in a suspended state**.
   - While the second task is running, the first task **waits in the background** and resumes when it gets another opportunity to run.


### Explanation by Analogy


Let’s use an analogy to make asynchronous processing easier to understand:


- Think of the **first task** as sending a network request and waiting for a response. The CPU has nothing to do while waiting for the network response to arrive.
- Let’s say the **second task** is reading a file. While the first task waits for a response, the CPU can process the second task.
- While the first task waits for a response, the second task runs, and when the second task finishes, execution returns to the first task to process the response.


In this process, **it may look as though the two tasks are running simultaneously**, but in reality, **the event loop processes the tasks alternately**. In other words, **the second task runs while the first task is paused**, and the first task is **maintained in the background** until it gets another opportunity to run.


### Code Example


```python
import asyncio

async def task1():
    print("Task 1 시작")
    await asyncio.sleep(2)  # 2초 동안 대기 (네트워크 요청 대기 시뮬레이션)
    print("Task 1 완료")

async def task2():
    print("Task 2 시작")
    await asyncio.sleep(1)  # 1초 동안 대기 (파일 읽기 시뮬레이션)
    print("Task 2 완료")

async def main():
    # 두 작업을 동시에 실행
    await asyncio.gather(task1(), task2())

# 이벤트 루프 실행
asyncio.run(main())
```


### Code Explanation


1. **`task1`**:
   - This task waits for 2 seconds. Because of `await asyncio.sleep(2)`, it pauses for 2 seconds, during which other tasks can run.


2. **`task2`**:
   - This task waits for 1 second. Because of `await asyncio.sleep(1)`, it pauses for 1 second, during which other tasks can run.


3. **`asyncio.gather`**:
   - This runs both tasks concurrently. While `task1` waits for 2 seconds, `task2` waits for 1 second, and when `task2` finishes, `task1` resumes.


### Conclusion


- **The second task can run while the first task is paused**. However, the first task has **not ended completely; it is being maintained in a suspended state**.
- **Asynchronous processing** may look like multiple tasks are **running simultaneously**, but in reality, **the event loop processes the tasks alternately**.
