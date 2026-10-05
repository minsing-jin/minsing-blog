---
title: "static method는 언제쓰나유?"
pubDatetime: 2023-12-01T14:10:17.173Z
description: "주로 static method는 유틸리티 메서드를 구현할때 많이 쓴다."
category: "고오급 스킬들 공략집"
canonicalURL: "https://velog.io/@minsing-jin/static-method는-언제쓰나유"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/c8257d9c2e95ab12.png)

# 결론
주로 static method는 유틸리티 메서드를 구현할때 많이 쓴다.

인스턴스 변수가 static method에는 접근이 불가능하며 인스턴스로 쓰지 못한다.

cf) 유틸리티함수란: 여러 가지 계산과 처리를 대신하는 일반함수들, 반복적으로 사용되므로 잘 작정해두면 이후 작업이 간편해짐

# 특징
1. 클래스의 인스턴스 없이 호출이 가능하며, 인스턴스에서는 호출 할 수 없다. 
2. 유틸리티 함수를 만드는데 유용하게 사용된다.
출처: https://mygumi.tistory.com/253 [마이구미의 HelloWorld:티스토리]

# 정적 메소드는 무슨 기준으로 정해야하는가?
한 문장으로 말하자면 다음과 같다.
>
"어떤 메소드가 인스턴스가 생성되지 않았더라도, 호출 할 것인가?"  => "그렇다."

위와 같다면, 그것은 정적이라고 보면 된다.조금 더 자세히 말하자면 다음과 5가지를 보자.
1. 만약 유틸리티 클래스로 작성되고, 변화를 가정하지 않는다.
2. 만약 메소드가 인스턴스 변수를 사용하지 않는다.
3. 인스턴스 생성에 의존하지 않는다.
4. 메소드가 공유되고 있다면, 정적 메소드로 추출해낼 수 있다.
5. 일반적으로는 오버라이딩 안된다는데 아래 예시로 쌉가능
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

출처: https://mygumi.tistory.com/253 [마이구미의 HelloWorld:티스토리]

# 정적 메소드의 장단점
장점: 유틸리티 클래스 같이 반복적으로 사용하므로 작업이 간편함, 코드의 가독성을 높여줌
단점: 상태를 가지고 있지 않은 단순히 메소드만 가지고 있는 구조이기 때문에, 객체 지향에 벗어난 개념이 됨

**cf) 유틸리티 메서드란?**
여러 가지 계산과 처리를 대신하는 일반함수들, 반복적으로 사용되므로 잘 작정해두면 이후 작업이 간편해짐

>참고링크
[static method는 언제 써야하는가?](https://mygumi.tistory.com/253)
[네이스한 설명](https://velog.io/@gjtang/staticmethod)
