---
title: An Algorithm That Returns the Largest Element Among All Elements in a C++ vector
pubDatetime: 2024-03-14 05:45:03.193000+00:00
description: A useful algorithm – an algorithm that returns which element is the largest among all vector elements
category: Programming & CS
tags: []
language: en
translationOf: c-모든-vector-요소-중-제일-큰-element-return-해주는-알고리즘
translationStatus: approved
draft: false
velogSeries:
- GOAT 알고리즘 (c++, python...)
---

![](/images/velog/9e2e5b15b9492e05.png)


# GOAT!
- A useful algorithm – an algorithm that returns which element is the largest among all vector elements
 Or, if you do not know the principle behind the algorithm or are told not to use a library, copy and paste the library itself
```
#include <iostream>
#include <vector>

int main() {
    // 총 5개의 integer 요소가 들어있는 vector 생성
    std::vector<int> numbers = {10, 20, 30, 40, 50};

    // 가장 큰 요소를 찾기 위한 변수 초기화
    int maxElement = numbers[0];

    // 모든 요소를 순회하면서 가장 큰 요소를 찾는 과정
    for (int i = 1; i < numbers.size(); ++i) {
        if (numbers[i] > maxElement) {
            maxElement = numbers[i];
        }
    }

    // 가장 큰 요소 출력
    std::cout << "가장 큰 요소: " << maxElement << std::endl;

    return 0;
}

![](/images/velog/2885fa54c57200e4.png)

```
