---
title: When should you use static methods?
pubDatetime: 2023-12-01 14:10:17.173000+00:00
description: Static methods are mainly used when implementing utility methods.
category: Programming & CS
tags: []
language: en
translationOf: static-method는-언제쓰나유
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/c8257d9c2e95ab12.png)


# Conclusion
Static methods are mainly used when implementing utility methods.


Instance variables cannot be accessed from static methods, and static methods cannot be used through instances.


cf) What is a utility function?: General functions that perform various calculations and processing on behalf of the user. Since they are used repeatedly, setting them up well makes subsequent work easier.


# Characteristics
1. They can be called without a class instance, but cannot be called from an instance. 
2. They are useful for creating utility functions.
Source: https://mygumi.tistory.com/253 [Maigumi's HelloWorld: Tistory]


# By what criteria should static methods be chosen?
In one sentence, it is as follows.
>
"Would this method be called even if no instance had been created?"  => "Yes."


If the above is true, you can consider it static. To explain in a little more detail, let’s look at the following five points.
1. If it is written as a utility class and does not assume change.
2. If the method does not use instance variables.
3. It does not depend on instance creation.
4. If a method is shared, it can be extracted as a static method.
5. Generally, they are said not to be overridden, but the example below shows that it is totally possible.
```python
class Parent:
  @staticmethod
  def static_method():
      print("부모 클래스의 정적 메소드")

class Child(Parent):
  @staticmethod
  def static_method():
      print("자식 클래스의 정적 메소드")

```


Source: https://mygumi.tistory.com/253 [Maigumi's HelloWorld: Tistory]


# Advantages and disadvantages of static methods
Advantage: Since they are used repeatedly like utility classes, they make tasks easier and improve code readability.
Disadvantage: Since they are a structure that simply contains methods without state, they are a concept that deviates from object-oriented programming.


**cf) What is a utility method?**
General functions that perform various calculations and processing on behalf of the user. Since they are used repeatedly, setting them up well makes subsequent work easier.


>Reference links
[When should static methods be used?](https://mygumi.tistory.com/253)
[Nice explanation](https://velog.io/@gjtang/staticmethod)
