---
title: "__init__.py가 뭐야?"
pubDatetime: 2023-10-11T05:58:27.409Z
description: "import가 왜 안돼유? / 왜 클래스를 만들었는데 못불러유?(TypeError: 'class' object is not callable)"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/init.py가-뭐야"
velogSeries: ["악당 개념패거리들 정리"]
---

파이썬 프로젝트를 진행하다가 import가 오류가 나는 경우가 있었다.
![](/images/velog/e5cbbf8012260292.png)

10/13 추가 억까 -> import부분에 오류가 나는것이 아닌 인스턴스를 만들때 억까가 나올수도 있다.(아래 사진의 노란색 줄친부분)
![](/images/velog/dba113246b1e4da3.png)

-> 동일하게 __init__.py 파일에 내가 만든 클래스가 모듈이라는 것을 명시해주어야한다.

<br>

# 왜 그런것인가?
**한줄정리: 모듈 BM25Reranker를 패키지로 인식하지 못해서 생기는 문제**

해당 디렉터리 [RAGchain.reranker]가 패키지의 일부임을 알려주는 역할을 해야하는 __init__.py가 디렉커리 안에 있어야한다. 하지만 BM25reranker등 패키지에 포함된 디렉터리에 __init__.py 파일이 없다면 패키지로 인식되지 않는다.

또한 다음과 같은 상황에서는 __init__.py 파일은 있지만 기존에 있는 reranker들은 존재하지만 내가 지금 새로 만들고 있는 bm25 reranker 녀석은 내용이 추가가 되어있지 않아 오류가 생긴것이다.

사실 파일만 추가되어있어도 자동으로 해당 디렉터리는 패키지로 인식되는데 정상적으로 인식하지 못하는 이번 경우에 있어서는 __init__.py내 아래와 같이 import할 모듈을 정의한다.

# 해결
__init__.py 내 아래와 같이 import할 모듈을 정의한다.

```python
from RAGchain.reranker import BM25Reranker
```

아래 예시 그림을 보면 이해가 쉽다.
![](/images/velog/620667cc713843b1.png)



# 첨언
__init__.py내에 변수를 작성하면 패키지 내에서 공용으로 사용하는 변수로 정의되어 각기 다른 모듈로부터 import하여 사용할 수 있다.

> 
python 3.3 버전부터는 __init__.py 파일이 없어도 패키지로 인식한다. 하지만 하위버전 호환을 위해서는 __init__.py파일을 생성하는것이 좋다.




> 참고자료
1. https://dojang.io/mod/page/view.php?id=2450
2. https://passwd.tistory.com/entry/Python-initpy
