---
title: "Python Class 용어정리"
pubDatetime: 2022-11-23T14:18:10.671Z
description: "class 악당 용어들"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/Python-Class-용어정리"
velogSeries: ["악당 개념패거리들 정리"]
---

## 전략: 예제 lab들 풀어보면서 모르는 문제들 보충설명과 용어정리보면서 학습
-----------------------------------------------------------
### class 연습문제 예제들
https://wikidocs.net/7035

### class 보충설명 링크
https://server-talk.tistory.com/211

심화 설명: https://zzsza.github.io/development/2020/07/05/python-class/

------------------------------------------------------------------

### 용어정리


**객체 (object)** : 클래스로 만들어낸 피조물

    Ex) a = Cookie()

 

**생성자(constructor) :** 객체를 생성할 때 자동 호출, 특정 이름이 정해져 있으며, 메소드와 유사한 구조로 이루어져 있음

    Ex) def __init__(self):

 

**클래스 (class) :** 일종의 청사진

    Ex) class Cookie :

 

**필드 (field) :** 클래스에 내장된 변수

 

**메소드 (method) :** 클래스 내부에 선언된 함수

    Ex) def Make_Cookie() :

 

**속성 (attribute) :** 필드 + 메소드 = 속성

 

**인스턴스 (instance) :** 클래스를 통해 생성된 결과물로 '실체'라고도 한다. 
cf)
실제 코드에서 반영이 되지 않은 class를 인스턴스를 통해 **실체화** 시킴

    Ex) a = Cookie() 에서 a가 인스턴스에 해당한다.

 

**정적 메소드 (static method) :** self 매개변수를 가지지 않는 메소드로 인스턴스 필드에 접근이 불가능하다.

    정적 메소드는 메소드 선언 앞에 @staticmethod라고 표기해야 한다.

 

**인스턴스 메소드 (instance method) :** self로 인스턴스 필드에 접근하는 메소드

    Ex) def Make_Cookie(self) :

 

**클래스 메소드 (class method) :** cls로 클래스 필드에 접근하는 메소드이며, 정적 메소드처럼 @classmethod라고 메소드 선언 앞에 표기해야 한다.

    Ex) def Make_Cookie(cls) :

 

**인스턴스 변수 :** self가 붙은 변수

    Ex) self.variablename

 

**클래스 변수 :** class 내부에 선언된 변수이며, 일반적인 변수와 동일한 형태이다.

    Ex) Cookies = 0
    
    
**self** : 자기 자신을 참조하는 변수? 지금까지 봤던 클래스 안에 있던 self에 대해 찾아보니  "인스턴스 자신", "그 시점의 자신", "메소드의 임의의 인수"등 다양하게 부르고 있었다. 그러나 클래스의 구성을 취득할 때에 정형의 구문으로써 기억해두면 괜찮은 것 같다.

 

정적 메소드나 클래스 메소드는 필드에 접근하지 않을 때 사용하며, 특별히 클래스 변수에 접근해야 할 때는 클래스 메소드를 사용함.

 

**인스턴스를 이용한 접근**

    Ex) instancename.methodname()

 
**클래스를 이용한 접근**

    Ex) classname.methodname()
    
  
**네임스페이스란? :**
- 특정한 객체를 이름에 따라 구분할 수 있는 범위

- 이름들과 실제 객체들 사이의 매핑

- 소속된 네임스페이스가 다르다면 같은 이름이 다른 개체를 가리키도록 하는 것 가능해짐

> 보충설명 링크
https://velog.io/@chldppwls12/Python-%EB%84%A4%EC%9E%84%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4

**한번에 알아보기 좋은 코드**
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
## 상속 -> 예제들을 통해서 이해하는것이 빠름

**상속(inheritance) :** 기존 정의 되어있는 클래스에 정의된 속성(Attribute = field(클래스 내장 변수) + method)들을 이어받아, 그대로 사용 하거나 수정, 또는 다른 속성들을 추가하여 사용하는 것을 말함.



**부모 클래스(parent class/super class) :** 상속에서 기존에 정의되었던 클래스 



**자식 클래스(child class/sub class) :** 상속을 통해 새롭게 생성되는 클래스
 
 
 
**메소드 오버라이드(method override) :** 메소드를 부모클래스에 있는 녀석을 그대로 사용하는 것이 아닌 다른 메소드로 **덮어씌우기**

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


**super() 메소드 :** 상위클래스의 메소드(constructor or 다른 메서드들)를 불러올때 호출
>
**tip) **
기반 클래스의 __ init__() 메소드를 명시적으로 호출 해주어야 한다. 
super()를 이용하는 방법이 '항상' 권장된다.

> 상속 보충설명은 여기서 참고할것
https://kukuta.tistory.com/337

 ---------------------------------------------------------------------
# 취약 개념 정리

## cls vs self

### self란 무엇인가?
- 인스턴스 필드에 접근하기 위해서 인스턴스 메서드에서 사용

잘 설명되어있는 보충설명: https://wikidocs.net/1742

### cls란 무엇인가?
- class 필드에 접근하기 위해서 class 메서드에 self처럼 사용 
--------------------------------------------------------
## __ 뭐시기 __ 는 뭐야?
### CASE 1 : 언더스코어( _ )가 독립적으로 사용되는 경우

-> 인터프리터에서 마지막 실행결과 값을 가지는 변수로 사용된다.

### CASE 2: 변수로 사용될 경우 

-> 변수 값을 굳이 사용할 필요가 없을때 사용한다.

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
변수를 문자로 할당해주어도 되지만 굳이 사용하지 않을 경우에 _로 치환하여 줍니다. 변수명이 낭비될 필요가 없기 때문이죠.

## CASE 3 : __이름__

-> 내장된 특수한 함수와 변수를 나타낸다.

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

__init__은 클래스의 생성자 함수이며, __add__ 함수는 연산자 오버로드용으로 사용됐다.
 


## CASE 4 : 네이밍
-> 가장 많이 사용하는 경우고 변수 이름 뒤에 _가 붙는 경우, 함수 이름 왼쪽 _를 붙이는 경우, 변수 왼쪽에 __를 붙이는 경우, 그리고 맹글링할 때 사용한다. 

- 자세한 설명은 아래 링크 확인
 

참고문헌 & 보충설명: https://ebbnflow.tistory.com/255
 
> 참고문헌
https://arainablog.tistory.com/38
사진출처: https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=goding1945&logNo=90163932276
