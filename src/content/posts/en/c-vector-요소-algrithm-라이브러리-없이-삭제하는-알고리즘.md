---
title: Algorithm for deleting C++ vector elements without the algorithm library
pubDatetime: 2024-03-14 05:41:56.565000+00:00
description: A neat piece of code for deleting vector elements without using the algorithm library
category: Programming & CS
tags: []
language: en
translationOf: c-vector-요소-algrithm-라이브러리-없이-삭제하는-알고리즘
translationStatus: approved
draft: false
velogSeries:
- GOAT 알고리즘 (c++, python...)
---

![](/images/velog/eb10da9588f9ca60.png)



# GOAT!


```cpp
template<typename T>
void removeElement(std::vector<T>& vec, const T& valueToRemove) {
    // 벡터를 순회하며 일치하는 요소를 찾아 삭제
    for (auto it = vec.begin(); it != vec.end(); ++it) {
        if (*it == valueToRemove) {
            vec.erase(it); // 일치하는 요소를 삭제
            break; // 하나의 요소만 제거하므로 삭제 후 반복을 멈춤
        }
    }
}
```
