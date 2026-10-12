---
title: Python Class Terminology Summary
pubDatetime: 2022-11-23 14:18:10.671000+00:00
description: class villain terms
category: Programming & CS
tags: []
language: en
translationOf: python-class-용어정리
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

## Strategy: Learn by solving the example labs while filling in explanations for unfamiliar problems and reviewing terminology
-----------------------------------------------------------
### Class practice problem examples
https://wikidocs.net/7035


### Class supplementary explanation links
https://server-talk.tistory.com/211


In-depth explanation: https://zzsza.github.io/development/2020/07/05/python-class/


------------------------------------------------------------------


### Terminology



**Object (object)** : An object created from a class

    Ex) a = Cookie()

 


**Constructor (constructor) :** Automatically called when creating an object; it has a specific name and consists of a structure similar to a method

    Ex) def __init__(self):

 


**Class (class) :** A kind of blueprint

    Ex) class Cookie :

 


**Field (field) :** A variable built into a class

 


**Method (method) :** A function declared inside a class

    Ex) def Make_Cookie() :

 


**Attribute (attribute) :** Field + method = attribute

 


**Instance (instance) :** The result created through a class, also called a “real entity.” 
cf)
A class that has not been reflected in actual code is **materialized** through an instance

    Ex) In a = Cookie(), a is the instance.

 


**Static method (static method) :** A method that does not have a self parameter and cannot access instance fields.

    A static method must be marked with @staticmethod before the method declaration.

 


**Instance method (instance method) :** A method that accesses instance fields through self

    Ex) def Make_Cookie(self) :

 


**Class method (class method) :** A method that accesses class fields through cls; like a static method, it must be marked with @classmethod before the method declaration.

    Ex) def Make_Cookie(cls) :

 


**Instance variable :** A variable preceded by self

    Ex) self.variablename

 


**Class variable :** A variable declared inside a class, in the same form as an ordinary variable.

    Ex) Cookies = 0
    
    
**self** : A variable that refers to itself? When I looked up self, which I had seen inside classes so far, I found that it was described in various ways, such as “the instance itself,” “itself at that point in time,” and “an arbitrary argument of a method.” However, it seems fine to remember it as standard syntax when learning the structure of a class.

 


Static methods or class methods are used when fields are not accessed, and a class method is used specifically when a class variable needs to be accessed.

 


**Access using an instance**

    Ex) instancename.methodname()

 
**Access using a class**

    Ex) classname.methodname()
    
  
**What is a namespace? :**
- A scope in which specific objects can be distinguished according to their names


- A mapping between names and actual objects


- If the namespaces to which they belong are different, the same name can refer to different objects


> Supplementary explanation link
https://velog.io/@chldppwls12/Python-%EB%84%A4%EC%9E%84%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4


**Code that is easy to understand at a glance**
```python
# 258 클래스 메소드 - 2
# 사람 (Human) 클래스에 (이름, 나이, 성별)을 받는 setInfo 메소드를 추가하세요.

class Human:
    def __init__(self,name,age,sex):
        self.name = name
        self.age = age
        self.sex = sex
    
    def who(self):
        print("이름: {} 나이: {} 성별: {}".format(self.name, self.age, self.sex))
        
    def setInfo(self,name,age,sex):
        self.name = name
        self.age = age
        self.sex = sex
        
    
areum = Human("불명", "미상", "모름") # 디폴트 상태 만들기
areum.who()      # Human.who(areum)

areum.setInfo("아름", 25, "여자") # 입력값에 따른 출력물들 만들기
areum.who()      # Human.who(areum)
```
--------------------------------------------------
## Inheritance -> It is quickest to understand it through examples


**Inheritance (inheritance) :** Refers to taking over the attributes (Attribute = field (class built-in variable) + method) defined in an already-defined class and using them as they are, modifying them, or adding other attributes for use.




**Parent class (parent class/superclass) :** The class that was previously defined in inheritance 




**Child class (child class/subclass) :** The class newly created through inheritance
 
 
 
**Method override (method override) :** **Overwriting** a method from the parent class with a different method instead of using it as is


**ex)**
```python
class Base :           # 기본 클래스
    def foo(self) :
        print('Base foo')
    
    def bar(self) :
        print('Base bar')

class Derived(Base) :  # 상속을 받는 파생 클래스
    
    def bar(self) :    # 부모 클래스로 부터 상속 받은 함수를 재정의(Override)
        print('Derived bar')
        
d = Derived()
d.foo()                # Derived는 foo()함수가 없지만 부모로 부터 상속 받은 foo() 함수 호출
d.bar()                # Derived 클래스에서 재정의한 bar() 함수 호출
```



**super() method :** Called when invoking a method of the superclass (constructor or other methods)
>
**tip) **
The __ init__() method of the base class must be called explicitly. 
Using super() is “always” recommended.


> Refer here for supplementary information on inheritance
https://kukuta.tistory.com/337

 ---------------------------------------------------------------------
# Summary of Weak Concepts


## cls vs self


### What is self?
- Used in instance methods to access instance fields


Well-explained supplementary information: https://wikidocs.net/1742


### What is cls?
- Used like self in class methods to access class fields 
--------------------------------------------------------
## What is __ whatever __?
### CASE 1 : When the underscore ( _ ) is used independently


-> It is used in the interpreter as a variable containing the value of the last execution result.


### CASE 2: When used as a variable 


-> Used when there is no need to use the variable's value.


```pthon
for _ in range(5): # 단순히 5번 반복할 목적으로
    print('hello world')

for _ in range(3): # _를 i로 바꿔서 보면 우리에게 익숙한 표현식일 것이다.
    print(_)

def values():
    return (1,2,3,4) # 튜플을 반환

a, b, _, _ = values() # 반환된 튜플 값중 2개만 필요할 경우
print(a, b)

```
You could assign a value to a variable by name, but when you do not intend to use it, you replace it with _. This is because there is no need to waste a variable name.


## CASE 3 : __name__


-> Represents built-in special functions and variables.


```python
class vector:
  def __init__(self, x,y,z):
    self.x = x
    self.y = y
    self.z = z

  def __add__(self, other):
    x_ = self.x + other.x
    y_ = self.y + other.y
    z_ = self.z + other.z

    return vector(x_,y_,z_)

  def show(self):
    print(f"x:{self.x}, y:{self.y}, z:{self.z}")


v1 = vector(1,2,3)
v2 = vector(4,5,6)
v3 = v1 + v2
v3.show()
```


__init__ is a class constructor function, while the __add__ function was used for operator overloading.
 



## CASE 4 : Naming
-> This is the most commonly used case, and it is used when _ is appended to the end of a variable name, when _ is added to the left of a function name, when __ is added to the left of a variable, and when name mangling is performed. 


- Check the link below for a detailed explanation
 


References & supplementary explanation: https://ebbnflow.tistory.com/255
 
> References
https://arainablog.tistory.com/38
Photo source: https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=goding1945&logNo=90163932276
