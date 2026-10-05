---
title: "C++ 모든 vector 요소 중 제일 큰 element return 해주는 알고리즘"
pubDatetime: 2024-03-14T05:45:03.193Z
description: "유용한 알고리즘 – 모든 vector 요소 중 어느것이 큰 요소인지 return 해주는 알고리즘"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/C-모든-vector-요소-중-제일-큰-element-return-해주는-알고리즘"
velogSeries: ["GOAT 알고리즘 (c++, python...)"]
---

![](/images/velog/9e2e5b15b9492e05.png)

# GOAT!
- 유용한 알고리즘 – 모든 vector 요소 중 어느것이 큰 요소인지 return 해주는 알고리즘
 혹은 알고리즘의 원리를 모르겠거나 라이브러리를 사용하지 말라고 하면 라이브로리 자체를 복붙하기
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
