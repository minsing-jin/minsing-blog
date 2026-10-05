---
title: "Zip함수, Variable argument(*/가변인자), keyword argument(**/키워드인자) 악당녀석들"
pubDatetime: 2022-10-03T07:39:32.437Z
description: "*이 도대체 뭐야~~~~~"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/Zip함수-Variable-argument가변인자-keyword-argument키워드인자-악당녀석들"
velogSeries: ["악당 개념패거리들 정리"]
---

# 동기
프로그래머스 2차원 matrix의 행렬 곱을 표현하는 문제가 나왔다. 2시간의 노가다를 하고 정답 코드를 봤는데.....

```python
def productMatrix(A, B):
    return [[sum(a*b for a, b in zip(A_row,B_col)) for B_col in zip(*B)] for A_row in A]
```

이렇게 나의 2시간이 무심한듯 바로 한줄로 끝내버리는 행님들이 있었다. 현타가 좀 오다가 다시 정신을 잡고, 코드를 이해하다가 **zip(* B)** 라는 녀석을 발견했고, list comprehension에서 요녀석이 등장한건 처음봐서 찾아봤다.


<br>

<br>

<br>



# 코드 설명
```python
def productMatrix(A, B):
    return [[sum(a*b for a, b in zip(A_row,B_col)) for B_col in zip(*B)] for A_row in A]
```

여기서 A의 행을 for문으로 A_row에 풀고, zip(B)를 통해서 B의 있는 녀석들을 * 로 언패킹을 해서 [2, 3, 2] [4, 2, 4] [3, 1, 4] 로 2차원배열을 1차원의 여러개의 배열로 만든다. 

그리고 zip을 통해서 각각의 배열들의 index 순서대로 다시 튜플로 (2, 4, 3), (3, 2, 1), (2, 4, 4) 이런식으로 재구성해서 인덱스 순서대로 바로 A_row의 값들과 곱을 할 수 있도록 만든다.

잘 가공된 A_row와 B_col을 for문을 통해 행렬곱의 공식에 맞게 순차적으로 곱하고 더해주면서 정답 matrix를 만든다.



<br>

<br>

<br>

# Zip이란?

용도: 두개 이상의 iterable한 객채룰 인자로 받아 각각의 자료형들을 **index순서대로** 묶어서 튜플형태로 출력해준다.

여기서 보면 각각 a와 b의 list들을 index순서대로 서로 묶어주고 튜플형태로 출력해준다.

```python
# zip(*iterable) : 동일한 개수로 이루어진 자료형을 묶어 줌
a = ['one', 'two', 'three']
b = ['a', 'b', 'c']
list(zip(a, b))
>>> [('one', 'a'), ('two', 'b'), ('three', 'c')]
```



행렬에서 전치행렬 생성할때, 즉 transpose를 하고 싶다면 zip과 가변인자를 사용한다.

```python
# 전치행렬 생성
a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
b = list(zip(*a))
b
>>> [(1, 4, 7), (2, 5, 8), (3, 6, 9)]
```

가변인자 개념이 있는 예제코드: [출처](https://chancoding.tistory.com/144)




주로 for문에서 두개 이상의 list와 같은 iterable한 객체들을 받아서 두개이상의 변수들을 전개하는데에 쓴다.


```python
>>> for number, upper, lower in zip("12345", "ABCDE", "abcde"):
...     print(number, upper, lower)
...
1 A a
2 B b
3 C c
4 D d
5 E e

```

### 23년 11월 17일 추가
pandas dataframe도 동일하게 zip으로 묶을 수 있다.
```python
result = make_passages.apply(self.__make_passages_and_retrieval_gt, axis=1)
make_passages['passages'], self.ingest_data['retrieval_gt'], self.ingest_data['retrieval_gt_order'] = zip(*result)

```

<br>

<br>

<br>

# * 이랑 **은 뭐야?(가변인자/키워드인자)

## 3. 가변인자/키워드 인자



**가변인자란** : 이름 그대로 길이가 변할 수 있는 argument를 말합니다. 함수에서 매개변수에 값이 여러개 들어오면 바로 객체들을 **튜플로 묶어**(패킹) 변수에 저장함.

**장점** : 임의의 함수에 인자로 몇개의 데이터가 들어올지 모르게 되는 경우에 사용하면 편리합니다. 
이때 여러 api나 잘 짜여진 코드를 구경하다보면 함수에 * args나 ** kwargs라고 되있는 표현들을 많이 볼 수 있다.

이게 바로 가변인자를 사용하겠다는 의미이다. 한개와 두개의 차이는 positional과 keyward 인자의 차이다. 


```python
def function(a, b = None):
...
```

여기서 a는 positional arguments, b는 keyword arguments라고 칭합니다. 모두 아시다시피 a는 값이 없는 경우 error가 뜨게 되며, b는 default값으로 None값을 주게 된다.

아래 예제처럼 args는 tuple 또는 list, kwargs는 dict에 저장되어 출력되는 것을 볼 수 있으며, 동시에 사용할 수도 있다. 

```python
def args_function(*args):
    print(args)

def kwargs_function(**kwargs):
    print(kwargs)
    
args_function('a', 'b') # ('a', 'b')
kwargs_function(a = 100, b = 200) # {'a':100, 'b':200}
```

argument의 종류 설명 링크 -> https://wikidocs.net/22799 
좀더 정확히 적용하면서 이해하고 싶다면 neis한 예제 코드들을 모아놓음
-> https://goodthings4me.tistory.com/31 







**키워드 인자** : 가변인자와 같은 말로 함수 정의시 매개 변수 ** args는 딕셔너리의 생성으로 이어지며 딕셔너리(key=value)의 형태로 전달해야함. 쉽게 **딕셔너리 형태로 받을 수 있게 전달해서 딕셔너리 형태로 저장**한다는겨

<br>

<br>

<br>

## 언패킹 ( * )
위에서 잠깐 볼 수 있듯이 가변인자( * )는 리스트에서 두번,세번 묶여져 있는 녀석들을 언패킹해주는 녀석들이다. 예제코드를 한번 보자

``` python
B = [[2, 3, 2], [4, 2, 4], [3, 1, 4]]
print(*B)

>>>[2, 3, 2] [4, 2, 4] [3, 1, 4]

```

로 2차원 array B녀석을 감싸고 있던 괄호를 없애버리고, 1차원 list 여러개로 만들어버렸다. 이것이 바로 * 의 언패킹 기능이다.




[neis한 예제코드 설명](https://goodthings4me.tistory.com/31)


>
본 포스팅은 아래 사이트를 참고하여 작성하였습니다.
GoodThings4Me: https://goodthings4me.tistory.com/31
위키독스: https://wikidocs.net/22799 
대학원생이 쉽게 설명해보기: https://hwiyong.tistory.com/193
슈퍼마리오 사진: https://ko.newhotgames.com/%EC%8A%88%ED%8D%BC-%EB%A7%88%EB%A6%AC%EC%98%A4-64-%EA%B6%81%EA%B7%B9-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%AA%A8%EB%93%A0-%EB%B3%84-%EB%B9%A8%EA%B0%84-%EB%8F%99%EC%A0%84-%EB%AA%A8%EC%9E%90%EB%A5%BC/
