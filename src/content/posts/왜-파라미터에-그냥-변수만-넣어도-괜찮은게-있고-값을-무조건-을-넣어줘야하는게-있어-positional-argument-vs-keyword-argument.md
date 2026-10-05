---
title: "왜 파라미터에 그냥 변수만 넣어도 괜찮은게 있고, 값을 무조건 =을 넣어줘야하는게 있어? (Positional argument vs Keyword argument)"
pubDatetime: 2023-10-24T10:50:30.089Z
description: "왜 값을 넣어줘야하는 파라미터가 있고, 안넣어도 되는 파라미터가 있지?"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/왜-파라미터에-그냥-변수만-넣어도-괜찮은게-있고-값을-무조건-을-넣어줘야하는게-있어-Positional-argument-vs-Keyword-argument"
velogSeries: ["악당 개념패거리들 정리"]
---

# 결론
1. `**kwarg`와 `*arg` 같은 옵션으로 들어가는 파라미터는 무슨 파라미터인지 모르므로 이름으로 언급해주는 keyword argument를 써줘야한다
2. keyword argument는 매서드나 함수 선언후 그 argument 선언후 값을 대입해줘야한다.

positional argument인지 keyword argument인지 결정은 함수 혹은 매서드에서 파라미터를 넣을때
-> 이름넣고 =을 붙여 값을 대입하는가
-> 안붙이고 순서대로 값만 대입하는가
로 운명이 갈린다.

**헷갈린부분**
-> 원본함수에서 defualt value를 먼저 넣어줬다고 해서 무조건 keyargument가 아니다!
-> '=' 이 들어간다고 해서 무조건 keyword argument가 아니다!



# 물음
- 왜 함수 parameterd에는 그냥 변수만 넣어도 괜찮은게 있고, 값을 무조건 값을 넣어줘야하는게 있는것인가?

## 계기
code splitter 클래스를 만들던중 langchain의 from_language 매서드를 사용하려던 중 
![](/images/velog/4bbf17556917c8f3.png)

생성자 파라미터에는 분명히  chunk_size와 chunk_overlap의 default value들을 만들어 줘서 그대로 넣었는데 `positional argument after keyword argument` 에러가 난것이다.



# 해결
![](/images/velog/4bbf17556917c8f3.png)

1. 여기서 보이는 chunk_size와 chunk_overlap은 `**kwarg`로 optional한 argumentd이기 때문에 이름으로 무엇인지 지정해줘야하므로 keyword argument를 써줘야한다.

2. 애초에 앞서 language 파라미터를 keyword parameter로 **먼저** 써줬기 때문에 나머지도 keyword parameter로 모두 바꾸거나
원래 매서드의 Poisitonal argument의 순서에 영향이 가지 않도록 하여 keyword parameter를 맨뒤로 빼주는 방법이 있다.


![](/images/velog/a2c8aebbc866dc3e.png)
이런식으로 무조건 대입을 해줘야한다.

------------------------------

# Positional Arguement
- 함수에 그냥 argument로만 설정되어있는 부분
- 함수를 불러오고 파라미터에 값을 넣을때 위치를 무조건 지켜야함.

**한계**
- 함수에 argument가 너무 많다면 argument를 개발하다 헷갈려서 다른곳으로 넣을 수 있는 실수
-> 위치가 상관없는 argument를 만들려면 어떡할까?
-> **이름으로만 찾을 수 있게** 하자!

**그것이 바로 keyword argument이다.** 

```Python
def student_info(name, sex, age) :
  print(f"""
  이름 : {name}
  성별 : {sex}
  나이 : {age}
  """)

>>> student_info("고길동", "남자", 50)
이름 : 고길동
성별 : 남자
나이 : 50

# 단점 : 순서를 잘못 알면 원하는 결과 값이 나오지 않음
>>> student_info("고길동", 50, "남자")
이름 : 고길동
성별 : 50
나이 : 남자
```

# Keyword Argument
- 함수에 argment = value 로 되어있는 형태
- 함수 파라미터에 값을 대입할때 위치 상관없이 이름만 잘 언급하고 값을 대입하면 된다.

아래 예시처럼 원래는 `def student_info(name, sex, age)`에서 파라미터 순서가 name, sex, age순서대로 대입을 해야하지만 (age = 50, name = "고길동", sex = "남자") 이런식으로 keyword argument를 사용하면 순서 상관없이 가능하다.

```python
>>> student_info(age = 50, name = "고길동", sex = "남자")
이름 : 고길동
성별 : 남자
나이 : 50
```



# 규칙
## 1. positional argument와 순서 상관 없는 keyword argument들을 섞어놓을때 규칙은?
**결론: 혼합해서 사용하고 싶다면 positional argument 패거리들을 먼저 쓰고 keyword argument 패거리들을 써주면 되겠다.**

다음과 같은 예시만 피하면 된다.
```python
def student_info(name, sex, age= 1, hobby) :
  print(f"""
  이름 : {name}
  성별 : {sex}
  나이 : {age}
  취미: {hobby}
  """)
```
위와 같이 순서 상관 있는 hobby가 순서 상관없는 keyword argument인 age 뒤에 있다. 이렇게 된다면
![](/images/velog/8929a473ae954496.png)
syntaxerror가 뜬다.

### 왜 하면 안돼?
저렇게 positional argument 패거리사이에 keyword argument패거리가 들어가버리면 순서가 상관 없어버리는 녀석이 순서가 상관있는 녀석 사이로 끼어들어가기 때문에
순서 상관있는 녀석 다음의 순서 상관있는 녀석들이 순서의 의미가 없어져버린다. 몇번째인지 정의가 되지 않는다는것



## 2. Default값 설정할때

함수를 정의할 때 default 값 파라미터를 non-default 값 파라미터 앞에 선언하면 안된다. 아래와 같이 default 값 파라미터를 앞에 선언하면, SyntaxError가 뜨면서 함수가 선언되지 않습니다.

```python
def student_info(age= 10, level) :
  print(f"""
  나이 : {age}
  게임 레벨 : {level}
  """)
```

```
> Traceback (most recent call last):   
    File "python", line 1 

SyntaxError: non-default argument follows default argument
```

왜냐하면 default 값 파라미터가 앞에 선언되어버리면, 이후에 함수를 호출할 때 입력한 특정 인자가 어떤 파라미터에 대입되는지 알 수 없기 때문입니다. default 값 파라미터 자체가 입력이 될 수도, 안될 수도 있는 값이기 때문에, 정확히 원하는 값을 반환하는데 어려움이 있습니다.

-> 저렇게 되면 함수선언할때 들어가는 argument가 어떤 파라미터에 대입되는지 모른다. 
```python
student_info(50)
```
위와 같은 코드에서 나이가 50인지 게임 레벨이 50인지 모른다




# 대원칙
## 1. Keyword Argument는 무조건 ()안에서 대입하자
## 2. Positional Argument가 먼저 그다음 Keyword Argument
## 3. Default Value가 들어가야하는 파라미터는 무조건 non-default parameter 뒤로



[레전드 참고문헌](https://velog.io/@devmin/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%ED%95%A8%EC%88%98%EC%9D%98-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98%EC%9D%98-%ED%8A%B9%EC%A7%95-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)
