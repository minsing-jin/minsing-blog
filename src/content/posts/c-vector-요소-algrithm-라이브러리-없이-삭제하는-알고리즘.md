---
title: "C++ vector 요소 algrithm 라이브러리 없이 삭제하는 알고리즘"
pubDatetime: 2024-03-14T05:41:56.565Z
description: "백터요소를 알고리즘 없이 해결시치하는 neis한 코드"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/C-vector-요소-algrithm-라이브러리-없이-삭제하는-알고리즘"
velogSeries: ["GOAT 알고리즘 (c++, python...)"]
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
