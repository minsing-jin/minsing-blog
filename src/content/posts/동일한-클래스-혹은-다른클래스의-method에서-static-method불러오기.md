---
title: "동일한 클래스 혹은 다른클래스의 method에서 static method불러오기"
pubDatetime: 2023-12-01T13:35:03.988Z
description: "static method의 class명.매서드명을 쓰면 된다."
category: "고오급 스킬들 공략집"
canonicalURL: "https://velog.io/@minsing-jin/동일한-클래스-혹은-다른클래스의-method에서-static-method불러오기"
velogSeries: ["고오급 스킬들 공략집"]
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

위의 예시와 같이 static method의 class명.매서드명을 쓰면 된다.

클래스명으로 하는 이유는 인스턴스를 만들지 않기때문이다. 인스턴스 method는 self자리에 인스턴가 들어감.
