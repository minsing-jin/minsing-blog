---
title: "다른 함수에서 호출되는 함수가 있어?(콜백 함수 Callback Function)"
pubDatetime: 2023-12-11T12:49:51.239Z
description: "피카츄 function 너로 정했다! 나와!"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/다른-함수에서-호출되는-함수가-있어콜백-함수-Callback-Function"
velogSeries: ["악당 개념패거리들 정리"]
---

![](/images/velog/640fdb43dd086624.png)

# 결론
- 직접 호출이 아닌 다른 함수에 의해 호출되는 함수이다.
- 파라미터에 함수가 전달되고, 전달받은 함수를 호출해서 사용한다

**예졔)**
```python
def callback_func(func):
	for i in range(5):
    	func(i)
        
def print_hello(num):
	print('hello', num)
    
callback_func(print_hello)
```



> 참고문헌
https://coding-yesung.tistory.com/20
