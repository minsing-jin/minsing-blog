---
title: "파이썬 getter -> __getitem__이란?"
pubDatetime: 2025-05-05T07:19:35.178Z
description: "\\n\\ngetitem은 파이썬에서 객체가 인덱싱(obj[key]) 또는 슬라이싱(obj[start:stop])될 때 호출되는 메서드입니다. 이 메서드를 클래스 안에 정의하면, 해당 클래스의 인스턴스를 리스트나 딕셔너리처럼 사용할 수 있습니다.\\n\\n📌 기본 사용법\\n\\n🎯 주요 특징\\n\\nobj[key]가 호출되면 obj.getitem(key)가 자동으로 호출됩니다...."
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/파이썬-getter-getitem이란"
velogSeries: ["악당 개념패거리들 정리"]
---

![](/images/velog/45253a0cfd5fb4b3.png)


`__getitem__`은 파이썬에서 **객체가 인덱싱(`obj[key]`) 또는 슬라이싱(`obj[start:stop]`)될 때 호출되는 메서드**입니다. 이 메서드를 클래스 안에 정의하면, 해당 클래스의 인스턴스를 리스트나 딕셔너리처럼 사용할 수 있습니다.

---

### 📌 기본 사용법

```python
class MyList:
    def __init__(self, data):
        self.data = data

    def __getitem__(self, index):
        print(f"Called with index: {index}")
        return self.data[index]

my_list = MyList([10, 20, 30])
print(my_list[1])  # => Called with index: 1
                   # => 20
```

---

### 🎯 주요 특징

* `obj[key]`가 호출되면 `obj.__getitem__(key)`가 자동으로 호출됩니다.
* `key`는 정수뿐만 아니라 슬라이스(slice), 튜플, 문자열 등도 될 수 있습니다.

---

### ✅ 슬라이싱도 지원 가능

```python
class MyList:
    def __init__(self, data):
        self.data = data

    def __getitem__(self, index):
        print(f"Index received: {index}")
        return self.data[index]

lst = MyList([1, 2, 3, 4, 5])
print(lst[1:4])  # 슬라이스 객체(slice(1,4,None))가 전달됨
```

---

### 📦 예제: 2차원 배열 흉내내기

```python
class Matrix:
    def __init__(self, rows):
        self.rows = rows

    def __getitem__(self, index):
        return self.rows[index]

m = Matrix([[1, 2], [3, 4]])
print(m[0][1])  # 2
```

---

### ⚠️ 주의사항

* `__getitem__`은 **읽기 전용**입니다. 쓰기를 하려면 `__setitem__`을 정의해야 합니다.
* `KeyError`, `IndexError` 등을 적절히 처리해주는 것이 좋습니다.

---

궁금하다면 `__setitem__`, `__delitem__` 도 함께 설명해줄 수 있어요. 추가로 알려드릴까요?
