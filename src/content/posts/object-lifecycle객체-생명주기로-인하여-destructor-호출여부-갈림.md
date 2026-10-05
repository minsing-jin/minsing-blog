---
title: "object lifecycle(객체 생명주기로 인하여 destructor 호출여부 갈림)"
pubDatetime: 2024-05-20T16:25:50.025Z
description: "destructor가 호출될때와 안될때(keyword: 오브젝트 라이프 사이클)"
category: "GOAT 알고리즘 (c++, python...)"
canonicalURL: "https://velog.io/@minsing-jin/object-lifecycle객체-생명주기로-인하여-destructor-호출여부-갈림"
velogSeries: ["GOAT 알고리즘 (c++, python...)"]
---

![](/images/velog/2442b5eea940424a.png)

# 🎯 계기
두 코드의 차이점을 아는가?

1. 1번코드
```cpp
Point pt2(10, 20), pt3(30, 40);
    Point pt4 = pt2 + pt3;
```

2. 2번코드

```cpp
Point pt2(10, 20), pt3(30, 40), pt4;
pt4 = pt2 + pt3;
```

2번째 코드는 destructor가 호출된다. 5시간 도르마무 왜 destructor가 호출되는지 고민이 많았다.

# 🎯 결론
- 첫번째 코드는 operator를 통해서 임시객체가 연산후 바로 소멸되지만 두번째코드는 임시 객체가 대입 연산후 소멸되므로 destructor가 호출된다.

> 참고할만한 키워드
- 임시객체에 대한 개념: [https://vansoft1215.tistory.com/27]
- lifecycle에 대한 개념

--------
# 🌱 설명 1

첫 번째 코드에서 임시 객체는 초기화가 완료된 후에 소멸됩니다. 이는 C++ 표준에 따라 임시 객체의 생명 주기가 초기화가 완료될 때까지 연장되기 때문입니다. 두 번째 코드에서는 임시 객체가 대입 연산 후에 소멸되므로 디스트럭터가 호출됩니다.

### 첫 번째 코드
```cpp
Point pt2(10, 20), pt3(30, 40);
Point pt4 = pt2 + pt3;
```
이 코드에서는 `pt2 + pt3` 연산이 임시 객체를 생성하고, 이 임시 객체는 `pt4`로 직접 초기화됩니다. 초기화가 완료된 후에 임시 객체는 소멸됩니다. 따라서 디스트럭터는 초기화가 완료된 후에만 호출됩니다.

### 두 번째 코드
```cpp
Point pt2(10, 20), pt3(30, 40), pt4;
pt4 = pt2 + pt3;
```
이 코드에서는 `pt4`가 먼저 기본 생성자로 생성됩니다. 그런 다음 `pt2 + pt3` 연산이 수행되어 임시 객체가 생성됩니다. 이 임시 객체는 `pt4`에 대입됩니다. 대입 연산이 끝난 후, 임시 객체는 소멸되며, 이때 디스트럭터가 호출됩니다.

### 임시 객체의 소멸 시점
임시 객체는 전체 표현식이 평가된 후에 소멸됩니다. 첫 번째 코드에서는 초기화가 완료된 후에 임시 객체가 소멸되므로 디스트럭터가 호출됩니다. 두 번째 코드에서는 대입 연산이 완료된 후에 임시 객체가 소멸되므로 디스트럭터가 호출됩니다.

첫 번째 코드에서는 초기화가 완료된 후에 임시 객체가 소멸되고, 두 번째 코드에서는 대입 연산이 완료된 후에 임시 객체가 소멸됩니다.


------------

# 🌱설명 2
디스트럭터 없이 두 객체를 더하는 `+` 연산자를 오버로딩하는 방법을 보여드리겠습니다. 여기서는 간단한 2D 벡터 클래스를 사용하여 연산자 오버로딩을 구현해 보겠습니다.

```cpp
#include <iostream>

class Vector2D {
public:
    float x, y;

    Vector2D(float x = 0, float y = 0) : x(x), y(y) {}

    // + 연산자 오버로딩
    Vector2D operator+(const Vector2D& other) const {
        return Vector2D(this->x + other.x, this->y + other.y);
    }

    void print() const {
        std::cout << "(" << x << ", " << y << ")" << std::endl;
    }
};

int main() {
    Vector2D pt1(1.0, 2.0);
    Vector2D pt2(3.0, 4.0);

    // 두 객체를 더하는 연산
    Vector2D result = pt1 + pt2;

    result.print(); // 출력: (4.0, 6.0)

    return 0;
}
```

이 예제에서 `Vector2D` 클래스는 `+` 연산자를 오버로딩하여 두 벡터를 더할 수 있도록 합니다. `pt1 + pt2` 연산은 `pt1` 객체의 `operator+` 메서드를 호출하여 `pt2`를 인자로 전달합니다. 결과적으로 새로운 `Vector2D` 객체가 반환됩니다.

이 코드를 실행하면 `(4.0, 6.0)`이 출력됩니다. 이 방식으로 디스트럭터 없이도 연산자 오버로딩을 할 수 있습니다.

Citations:
[1] https://stackoverflow.com/questions/9351166/does-overloading-operator-works-inside-the-class
[2] https://www.geeksforgeeks.org/operator-overloading-cpp/
[3] https://www.programiz.com/cpp-programming/operator-overloading
[4] https://cplusplus.com/forum/beginner/60378/
[5] https://cplusplus.com/forum/beginner/187/
[6] https://learn.microsoft.com/en-us/cpp/standard-library/overloading-the-output-operator-for-your-own-classes?view=msvc-170
[7] https://cplusplus.com/forum/beginner/52664/
[8] https://en.cppreference.com/w/cpp/language/operators
