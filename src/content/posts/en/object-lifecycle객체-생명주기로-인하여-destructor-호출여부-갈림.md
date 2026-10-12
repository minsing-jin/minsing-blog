---
title: Object lifecycle (whether the destructor is called depends on the object's lifetime)
pubDatetime: 2024-05-20 16:25:50.025000+00:00
description: 'When the destructor is called and when it is not (keyword: object lifecycle)'
category: Programming & CS
tags: []
language: en
translationOf: object-lifecycle객체-생명주기로-인하여-destructor-호출여부-갈림
translationStatus: approved
draft: false
velogSeries:
- GOAT 알고리즘 (c++, python...)
---

![](/images/velog/2442b5eea940424a.png)


# 🎯 Motivation
Do you know the difference between the two pieces of code?


1. Code 1
```cpp
Point pt2(10, 20), pt3(30, 40);
    Point pt4 = pt2 + pt3;
```


2. Code 2


```cpp
Point pt2(10, 20), pt3(30, 40), pt4;
pt4 = pt2 + pt3;
```


The second piece of code calls the destructor. I spent five hours in a Dormammu-like time loop wondering why the destructor was being called.


# 🎯 Conclusion
- In the first piece of code, the temporary object is immediately destroyed after the operation through the operator, but in the second piece of code, the temporary object is destroyed after the assignment operation, so the destructor is called.


> Keywords worth referencing
- Concept of temporary objects: [https://vansoft1215.tistory.com/27]
- Concept of lifecycle


--------
# 🌱 Explanation 1


In the first piece of code, the temporary object is destroyed after initialization is complete. This is because, according to the C++ standard, the lifetime of a temporary object is extended until initialization is complete. In the second piece of code, the temporary object is destroyed after the assignment operation, so the destructor is called.


### First code
```cpp
Point pt2(10, 20), pt3(30, 40);
Point pt4 = pt2 + pt3;
```
In this code, the `pt2 + pt3` operation creates a temporary object, and this temporary object is used to directly initialize `pt4`. After initialization is complete, the temporary object is destroyed. Therefore, the destructor is called only after initialization is complete.


### Second code
```cpp
Point pt2(10, 20), pt3(30, 40), pt4;
pt4 = pt2 + pt3;
```
In this code, `pt4` is first created using the default constructor. Then, the `pt2 + pt3` operation is performed, creating a temporary object. This temporary object is assigned to `pt4`. After the assignment operation is complete, the temporary object is destroyed, at which point the destructor is called.


### When a temporary object is destroyed
A temporary object is destroyed after the entire expression has been evaluated. In the first piece of code, the temporary object is destroyed after initialization is complete, so the destructor is called. In the second piece of code, the temporary object is destroyed after the assignment operation is complete, so the destructor is called.


In the first piece of code, the temporary object is destroyed after initialization is complete, while in the second piece of code, the temporary object is destroyed after the assignment operation is complete.



------------


# 🌱Explanation 2
I will show you how to overload the `+` operator for adding two objects without a destructor. Here, we will implement operator overloading using a simple 2D vector class.


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


In this example, the `Vector2D` class overloads the `+` operator so that two vectors can be added. The `pt1 + pt2` operation calls the `operator+` method of the `pt1` object, passing `pt2` as an argument. As a result, a new `Vector2D` object is returned.


When this code is executed, `(4.0, 6.0)` is printed. In this way, operator overloading can be used without a destructor.


Citations:
[1] https://stackoverflow.com/questions/9351166/does-overloading-operator-works-inside-the-class
[2] https://www.geeksforgeeks.org/operator-overloading-cpp/
[3] https://www.programiz.com/cpp-programming/operator-overloading
[4] https://cplusplus.com/forum/beginner/60378/
[5] https://cplusplus.com/forum/beginner/187/
[6] https://learn.microsoft.com/en-us/cpp/standard-library/overloading-the-output-operator-for-your-own-classes?view=msvc-170
[7] https://cplusplus.com/forum/beginner/52664/
[8] https://en.cppreference.com/w/cpp/language/operators
