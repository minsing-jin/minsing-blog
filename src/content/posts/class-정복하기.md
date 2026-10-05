---
title: "Class 정복하기"
pubDatetime: 2023-10-06T16:31:29.399Z
description: "Fucking 객체지향을 깨달아보자"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/Class-정복하기"
velogSeries: ["악당 개념패거리들 정리"]
---

# 10/6일 배운것(코드를 보면서 코드가 의미하는 바가 무엇인가 질문으로 공부하는게 효과적임)
<br>
<br>
<br>

**- 객체와 인스턴스 차이는 무엇이냐?**
=> 객체(Object)는 소프트웨어 세계에 구현할 대상이고, 이를 구현하기 위한 설계도가 클래스(Class)이며, 이 설계도에 따라 소프트웨어 세계에 구현된 실체가 인스턴스(Instance)이다.
둘이 비슷한 개념이라고 생각하면 될듯하다. 다만 클래스는 객체와 인스턴스와는 다른 개념인것 정도는 알고 있어야한다.

[출처](https://cerulean85.tistory.com/149)

**- 객체지향이 무엇이냐?**
=> 코드를 논리로 정리하기 위해서 논리적인 방법론(시각적 + 논리적인 코드 구조)
<br>

**- class가 무엇이냐?**
=> 아이템(클래스내 변수)들과 스킬(메서드)가 모아져 있는 / 도구와 동작들이 모아져 있는 직업, 역할
<br>

**- 생성자가 무엇이냐?**
=> 클래스가 실행될때 기존 태초마을에서 무조건 실행되는 코드
<br>

**- 인스턴스(객체)가 무엇이냐?**
=> 클래스로 찍어낸 것들
<br>

**- 인스턴스 = 클래스이름(parameter) -> 클래스 옆에 들어가는 파라미터는 무엇이냐?**
=> 생성자의 파라미터
<br>

**- Field란**
=> class에서 field란 클래스에 소속된 변수들을 멤버 변수 또는 필드라고 부른다.

**- self가 무엇이냐?**
=> 자기 자신, 인스턴스를 만들기 위한 인스턴스 자기 자신을 나타내는 것(사실 정의하는게 아직도 어렵다)

10/20일 보강
=> 인스턴스를 받는 파라미터로 모든 메서드는 처음에 인스턴스를 파라미터로 받는것 부터 시작이다. 이것이 없을경우에는 arguments를 하나 더 받는다고 에러가 뜬다.
[네이스한 설명](https://wikidocs.net/1742)
-> 위 링크에서 f.func2()가 저장된 메모리와 class의 self가 지정한 메모리의 값이 동일한걸 확인할 수 있다.
즉 인스턴스 선언 -> 매서드 사용 -> 매서드의 self에 인스턴스가 들어감.
<br>
한줄정리: self는 매서드 썼을때 인스턴스 불러올 자리



### **- 속성이 무엇이냐?**
-> 클래스 내부에 포함되어 있는 메서드나 변수

- 매서드 -> 기술, 동작 스킬
- 클래스내의 변수 -> 아이템, 도구
<br>


|**[속성 종류](https://076923.github.io/posts/Python-37/)**|

- 클래스 속성(메서드/변수):
-> 모든 클래스에 동일하게 영향
-> 인스턴스 생성시 초기화 X
-> 클래스명.클래스 속성
**_-> 단, 클래스메서드를 선언시 데코레이터 @를 붙여 @classmethod라고 붙여야하며 인스턴스 속성과는 사용법에 차이가 있음._**
[느낌이 global변수]
```python
class 클래스명:
    클래스 속성 = 값

    def __init__(self, *args, *kwargs):
        self.인스턴스 속성 = 값

    ...
```

> 
 **<민싱식 정리> **
-> 인스턴스 공통 
-> 클래스 공통
-> 변하면 다른곳에서 클래스 변수를 사용하는곳 모두 변하게 됌

<br>

- 인스턴스 속성(메서드/변수)(멤버속성)
-> 인스턴스 초기화할때 생성
-> self사용
-> 인스턴스 생성때 or 생성후 allocate, 변함
-> 인스턴스명.인스턴스 속성
[느낌이 local변수]

```python
class Daeheeyun:

    class_value = 0

    def __init__(self):
        self.instance_value = 0

    def set_class_value(self):
        Daeheeyun.class_value = 10

    def set_instance_value(self):
        self.class_value = 20


instance1 = Daeheeyun()
instance2 = Daeheeyun()

print("--클래스 속성 변경--")
instance1.set_class_value()
print(instance1.class_value, instance2.class_value)

print("--인스턴스 속성 변경--")
instance1.set_instance_value()
print(instance1.class_value, instance2.class_value)

print("--속성(Attribute) 출력--")
print(instance1.__dict__)
print(instance2.__dict__)
```

>
**<민싱식 정리>** 
-> 인스턴스마다 값이 달라질수 있음 
-> 다른 메모리에 변수/매서드 개념으로 저장

<br>

### 번외) [메서드 패거리](https://www.daleseo.com/python-class-methods-vs-static-methods/)

#### 1. Instance method
- 인스턴스로 쓸수 있는 메서드
- 인스턴스로 쓰기 위해선 self가 필요
- 인스턴스로써 인스턴스 속성 접근 가능
- 다른인스턴스 메서드 호출 가능
- 클래스 속성 접근, 클래서 매서드 호출가능<+ 다른 종류(static method, abstract mehthod등 self로 모두 불러올 수 있음.)>
-> self로 불러온다?

```python
class Counter:
    def __init__(self, value = 0):
        self.value = value

    def increment(self, delta = 1):
        self.value += delta

    def decrement(self, delta = 1):
        self.value -= delta
```

#### 2. Class method
static method, abstract method 깨닫고 정리
- 사용할때 클래스 변수 사용하는것과 마찬가지로 클래스명.클래스매서드명
- 단, 생성자는 cls로 시작 -> cls는 class 자신
- cls로 인스턴스 변수나 인스턴스 메서드는 불러올수 없음

[ex)](https://daleseo.com/python-class-methods-vs-static-methods/)
```python
class User:
    def __init__(self, email, password):
        self.email = email
        self.password = password

    @classmethod
    def fromTuple(cls, tup):
        return cls(tup[0], tup[1])

    @classmethod
    def fromDictionary(cls, dic):
        return cls(dic["email"], dic["password"])
```

**사용법은 다음과 같다.**

```python
>>> user = User("user@test.com", "1234")
>>> user.email, user.password
('user@test.com', '1234')

>>> user = User.fromTuple(("user@test.com", "1234"))
>>> user.email, user.password
('user@test.com', '1234')

>>> user = User.fromDictionary({"email": "user@test.com", "password": "1234"})
>>> user.email, user.password
('user@test.com', '1234')
```


#### 3. Static method
- 정적 메서드는 인스턴스 메서드나 클래스 메서드와 달리 첫번째 매개 변수가 할당되지 않습니다. 따라서 정적 메서드 내에서는 인스턴스/클래스 속성에 접근하거나, 인스턴스/클래스 메서드를 호출하는 것이 불가능하다.
- 시작 매개변수x (self, cls... (x))
=> 인스턴스/클래스 속성 접근x, 인스턴스 클래스 매서드 호출 (x)
=> 사용법: 클래스이름.매서드명(param)
- 주로 유틸리티들을 구현할때 쓰므로 클래스의 매서드들을 인스턴스 없이 바로바로 사용
- @staticmethod


[ex](https://www.daleseo.com/python-class-methods-vs-static-methods/))
```python
class StringUtils:
    @staticmethod
    def toCamelcase(text):
        words = iter(text.split("_"))
        return next(words) + "".join(i.title() for i in words)

    @staticmethod
    def toSnakecase(text):
        letters = ["_" + i.lower() if i.isupper() else i for i in text]
        return "".join(letters).lstrip("_")
```

**사용법은 다음과 같다.(클래스이름.매서드(param))**

```python
>>> StringUtils.toCamelcase("last_modified_date")
'lastModifiedDate'
>>> StringUtils.toSnakecase("lastModifiedDate")
'last_modified_date'

```

#### 4. Abstract method
- 부모 클래스에서 아무것도 없는 메서드를 만든후 자식클래스에서 상속 받아 method overrriding을 통해 자식클래스의 성격에 맞게 메서드에서 동작들을 추가함.
- 인스턴스로 만들수 없음
-> 때문에 추상매서드를 빈매서드로 만들수밖에 없다.

**<지리는 [jeffery](https://velog.io/@vkehfdl1)식 비유>**
- Abstract method는 깡통이다!
-> 부모 클래스에서 깡통의 정보(이것은 자동차이다)를 넘겨주고 
깡통을 상속받은 자식클래스에서 부모 클래스의 깡통껍데기를 가지고
method overriding을 통해 문짝은 어떻게 열리는지, 바퀴는 어떻게
굴러가는지, 작동방법은 어떻게 되는지 기능을 자식클래스의 성격에 맞춰서
찍어낸다.(람보르기니를 만들거나, 지프차를 만들거나, 모닝을 만들거나 자식클래스의 용도에 따라서)

**왜 쓰는가?**
- 부모 클래스의 기능이름을 명시해주고(깡통에 뭘 붙어줘야할지 정도 알려줌), 자식 클래스에서는 부모클래스에서 상속받은 메서드를 가지고 이것저것 기능들을 붙여넣음. 자식 클래스의 성격에 맞춰서 알아서 맞춰줘야한다.

**cf)**
- Abstract class를 만들어서 사용. Abstract class는 빈깡통들만 모아둬서 인스턴스를 만들지 못한다. 때문에 Abstract class를 상속받은 자식 클래스만이 인스턴스를 만들수 있고, 자식클래스는 Abstract class의 Abstract method들의 성격들을 물려받아 기능들을 구현해야만 오류가 나지 않는다.

**여기서 나올 수 있는 물음**
- Abstract class안에는 Abstract method만이 들어갈 수 있는것인가?
=> 일반 매서드가 들어갈 수 있다! 일반 메서드가 들어간다면 따로 자식클래스에서 구현할필요 없이 그대로 상속받은 것이므로 바로 매서드로 사용할 수 있다. 아래 예제코드를 통해 확인해보자
```python
from abc import *
 
 
class Human(metaclass=ABCMeta):
    # 추상 메서드
    @abstractmethod
    def walk(self):
        print('Human walk : 사람은 걸어요')
 
    # 추상 메서드
    @abstractmethod
    def talk(self):
        pass
 
    # 일반 메서드
    def sleep(self):
        print('Human sleep : 사람은 자요')
 
 
# 자식 클래스 : 어른 클래스
class Adult(Human):
    def walk(self):
        print('Adult walk : 어른은 걷습니다.')
 
 
# 자식 클래스 : 아기 클래스
class Baby(Human):
    # 추상 메서드
    def walk(self):
        print('Baby walk : 아기는 기어갑니다.')
 
    def talk(self):
        print('Baby talk : 아기는 옹알이를 합니다.')
 
 
# 객체 생성
# human = Human() # error
# adult = Adult() # error
baby = Baby()
 
# 재정의한 추상 메서드
baby.walk()
baby.talk()
 
# 부모 클래스 메서드
baby.sleep()
```
결과
![](/images/velog/a2e72c26e7754935.png)

[출처](https://blockdmask.tistory.com/445)


<br>
<br>



**- 왜 객체지향을 쓰는거냐?**
-> 기존에 일일히 임무를 주기 어려움(노가다 코딩)
-> 직업들(class) 역할들을 category화해서 거기에 해당하는 도구들(클래스의 변수)들과 그것을 사용, 동작하는 스킬들을 모아 set화 시키자!
-> 직업, 역할에 따라 효율적으로 메뉴얼을 주어 일시키기 가능
<br>


```python
class 칠판닦이:
    성격 = "더러움" # 클래스 변수
    def __init__(self, 교실: Classrom):
        self.담당_교실 = 교실
        self.지우개_깨끗함 = 0 # 멤버 변수/ 인스턴스변수
        self.칠판_닦기()

    def 칠판_닦기(self):
        pass # 함수 안의 내용~~


칠판닦이_영수 = 칠판닦이(101호)    # 인스턴스는 클래스로 찍어낸 녀석들
칠판닦이_영수.지우개_깨끗함 = 1

칠판닦이_영희 = 칠판닦이(102호)

칠판닦이_영수.지우개_깨끗함 == 칠판닦이_영희.지우개_깨끗함

칠판닦이.성격 = '깨끗함'

칠판닦이_철수 = 칠판닦이(111)
칠판닦이_철수.성격

칠판닦이_영수.칠판_닦기()
```

본 코드는 https://www.youtube.com/watch?v=vrhIxBWSJ04 영상 기준으로 공부했습니다.
<br>
<br>
<br>


# 10/7 상속, Static method, abstract method



# 공부하면서 생긴 궁금증들 Q&A
## 1. self가 없다는건 무엇을 의미할까
-> self, cls가 없으면 자기 자신을 명시하지 못했기 때문에 그에 따른 속성들에 접근이 불가능함.
-> 인자 접근 가능성의 차이
what if?)
- self가 있다면(인스턴스를 사용할 수 있다는걸 의미한다) -> 인스턴스를 이용하여 모든 매서드, 변수 접근,변동 가능
- cls가 있다면 -> 클래스를 이용하여 모든 class 변수, class 매서드 사용가능




## 2. 생성자의 인스턴스 변수를 매서드에서 받는 방법

### 결론
- 생성자의 인스턴스 변수를 매서드에서 받을려면 매서드의 파라미터로 받는것이 아닌 바로 매서드의 self.인스턴스변수명으로 받으면 바로 사용할 수 있다. 

-> self.인스턴스변수명 은 인스턴스로 사용할 수 있으며 인스턴스로 활용할 매서드들에서 사용할 수 있는 변수임.
-> 매서드의 파라미터로 받는 변수 이름은 **매서드 안에서의 로컬변수**

### 어떻게 몰랐는가?
#### 상황
test document들이 너무 많아 따로 파일을 만들어 클래스들에 다양한 매서드들로 만들었다.

```python

class TEST_DOCUMENT_CODE_SPLITEER:
    # Here is test documents with all language that splitter can split for test.
    def __init__(
            self,
            PYTHON_TEST_DOCUMENT: Document = None
    ):
        self.PYTHON_TEST_DOCUMENT = PYTHON_TEST_DOCUMENT

    def PYTHON_TEST_DOCUMENT(self, PYTHON_TEST_DOCUMENT):
        if PYTHON_TEST_DOCUMENT is None:
            return Document(
                page_content="""
                            def hello_world():
                                print("Hello, World!")
                            
                            # Call the function
                            hello_world()
                                """,
                metadata={
                    'source': 'test_source',
                    # Check whether the metadata_etc contains the multiple information from the TEST DOCUMENT metadatas or not.
                    'Data information': 'test for python code document',
                    'Data reference link': 'https://python.langchain.com/docs/modules/data_connection/document_transformers/text_splitters/code_splitter#python'
                }
            )
        else:
            return PYTHON_TEST_DOCUMENT

```


```python
from test_document_for_code_splitter import Test_Document_Code_Splitter

# Here is test documents with all language that splitter can split for test.
# Which file do you want to test ?

# 왜 안됌???????? 똑같이 인스턴스 선언하고 매서드 불러왔는데
test_doc = Test_Document_Code_Splitter()
TEST_DOCUMENT = test_doc.PYTHON_TEST_DOCUMENT()
```

위에서 `PYTHON_TEST_DOCUMENT`의 파라미터가 없다로 에러가 뜬다.

난 분명히 생성자에서 `PYTHON_TEST_DOCUMENT: Document = None`으로 미리 default value를 설정해 주었고, 
`self.PYTHON_TEST_DOCUMENT = PYTHON_TEST_DOCUMENT`로 인스턴스 변수화 시켜주었다.
그리고 매서드에 `def PYTHON_TEST_DOCUMENT(self, PYTHON_TEST_DOCUMENT):`로 생성자에서 선언한 인스턴스 변수를 매서드 파라미터로 input을 했다고 생각했다.

**해결**
=> 위의 매서드 `def PYTHON_TEST_DOCUMENT(self, PYTHON_TEST_DOCUMENT):` 의 `PYTHON_TEST_DOCUMENT`는 매서드 내의 local variable이므로 생성자의 `self.PYTHON_TEST_DOCUMENT`과는 이름은 같지만 아예 다른 녀석이다.

따라서 `def PYTHON_TEST_DOCUMENT(self):` 로 고치고,
`if self.PYTHON_TEST_DOCUMENT is None:`로 생성자의 인스턴스 변수를 매서드에 이런식으로 불러오면 된다!



# 3. 불필요한 반복을 줄여라!
1. 매서드를 불러올때마다 반복되는 split과 create document

2. 토크나이저 이름을 선택하는것과 상관없이 항상 불필요한 다른 토크나이저도 파일 다운로드 받아서 생성자에서 인스턴스가 계속 만들어짐

항상 효율을 생각하자 불필요한 반복이 없는가>\?

참고문헌
https://engineer-mole.tistory.com/99
https://www.youtube.com/watch?v=vrhIxBWSJ04
https://076923.github.io/posts/Python-37/
https://www.daleseo.com/python-class-methods-vs-static-methods/
