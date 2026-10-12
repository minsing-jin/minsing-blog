---
title: What is a class method? How do you access methods of a nested class from a nested class?
pubDatetime: 2024-11-28 12:44:21.470000+00:00
description: The reason for using a class method rather than an instance method when using methods in a nested class stems from the relationship between the nested class and the outer class and the differences in how instance methods and class methods work. A nested class (nested class) is an outer
category: Programming & CS
tags: []
language: en
translationOf: class-method란-중첩클래스에서-nested된-클래스-매서드-접근하는방법
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

![](/images/velog/084005091a3eb4cc.png)


The reason for using a **class method** rather than an **instance method** when using methods in a **nested class** stems from the differences in the **relationship between the nested and outer classes** and the **behavior of instance methods and class methods**.


---


### **1. Relationship Between the Nested Class and the Outer Class**
- A **nested class** is a class defined inside an outer class.
- **A nested class is not directly connected to an instance of the outer class.**
  - In other words, the nested class can be used independently even when no instance of the outer class has been created.


Because of this characteristic, an **explicit connection between instances** is required to use an instance of the outer class inside the nested class. In contrast, class methods are useful because they can be called without an instance of the outer class.


---


### **2. Difference Between Instance Methods and Class Methods**


#### **(1) Instance Methods**
- The **first parameter** is `self`, which refers to the instance that made the call.
- They can be called only after an instance has been created and access that instance's attributes and methods.


#### **(2) Class Methods**
- The **first parameter** is `cls`, which refers to the class itself that made the call.
- They operate at the class level and can be called even when no instance exists.
- They are useful when accessing class attributes or other class methods.


---


### **3. Why Instance Methods Do Not Work in a Nested Class**
- A nested class is not automatically connected to an instance of the outer class.
- Because an instance method requires an instance of the outer class through `self`, an error occurs when it is called without an instance of the outer class.


#### **Example: Problem When Using an Instance Method**
```python
class Outer:
    def __init__(self, name):
        self.name = name

    class Inner:
        def greet(self):  # 인스턴스 메서드
            return f"Hello from {self.name}"  # self.name에 접근 시 오류 발생

# 호출
outer = Outer("OuterInstance")
inner = outer.Inner()  # 이 코드는 오류 발생
inner.greet()
```


#### **Result:**
```plaintext
AttributeError: 'Inner' object has no attribute 'name'
```


- Since the `Inner` class is not connected to an instance of the `Outer` class (`self.name`), it cannot access the outer class's attributes from an instance method.


---


### **4. Why Class Methods Solve the Problem**
- Class methods can be called without an instance of the outer class.
- Since `cls` refers to the outer class itself, accessing the outer class's attributes and methods does not require a connection to an instance.


#### **Solution Example: Using a Class Method**
```python
class Outer:
    name = "OuterClass"

    class Inner:
        @classmethod
        def greet(cls):
            return f"Hello from {cls.__name__}"

# 호출
outer = Outer()
inner = outer.Inner()  # 중첩 클래스 호출
print(inner.greet())
```


#### **Result:**
```plaintext
Hello from Inner
```


- The `greet` method operates at the class level through `cls`, so it does not require an instance connection to the outer class.


---


### **5. Summary of the Difference Between Instance Methods and Class Methods**


| **Characteristic**               | **Instance Method**                             | **Class Method**                                |
|------------------------|-----------------------------------------------|------------------------------------------------|
| Caller             | Instance (`self`)                               | Class (`cls`)                                   |
| First parameter       | `self` (instance reference)                        | `cls` (class reference)                            |
| Requires an instance of the outer class | Required                                      | Not required                                   |
| When available         | After an instance is created                              | Immediately after the class is defined                             |
| Common uses     | Manipulating instance attributes/methods                     | Accessing class attributes/methods, creating factory methods, etc. |


---


### **6. When Should You Use a Class Method?**
1. **Class-level operations**:
   - When class attributes or class-level operations are needed.
2. **Independent operations without a connection to the outer class**:
   - When no instance connection to the outer class is required, as with a nested class.
3. **Factory methods**:
   - Use class methods to create objects according to specific conditions.


---


### **7. Summary**
- When a connection to an instance of the outer class is not required in a nested class, the problem can be solved by using a class method (`@classmethod`).
- An instance method needs to be directly connected to an instance of the outer class, and it will not work without this connection.
- Since `cls` refers to the class itself and does not require an instance of the outer class, it can be more suitable for use in a nested class.
