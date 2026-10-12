---
title: Calling a static method from a method of the same class or a different class
pubDatetime: 2023-12-01 13:35:03.988000+00:00
description: Use the class name.method name format for a static method.
category: Programming & CS
tags: []
language: en
translationOf: 동일한-클래스-혹은-다른클래스의-method에서-static-method불러오기
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/4fcdd1d3f448a646.png)



```python
class MyClass:
   @staticmethod
   def static_method():
       print("This is a static method in a class")
       
   def another_method(self):
       MyClass.static_method() # 동일한 클래스의 정적 메소드를 호출

```

```python
class Parent:
   @staticmethod
   def static_method():
       print("부모 클래스의 정적 메소드")

class Child(Parent):
   def method(self):
       Parent.static_method() # 부모 클래스의 정적 메소드를 호출

c = Child()
c.method() # 출력: 부모 클래스의 정적 메소드

```


As in the example above, use the class name.method name format for a static method.


The reason for using the class name is that no instance is created. For an instance method, an instance goes in the self position.
