---
title: "Supervised Learning(Regression)"
pubDatetime: 2022-10-09T10:49:30.692Z
description: "Regression에 대해서 알아봅시다."
category: "Data & ML"
canonicalURL: "https://velog.io/@minsing-jin/Supervised-LearningRegression"
velogSeries: ["Classical machine learning"]
---

# Regression

>
## Regression이란?

데이터를 **가장 잘 설명하는 모델**을 찾아 입력값에 따른 미래 결과값을 예측

𝑌≈𝛽0+𝛽1𝑋 -> 적절한 𝜷𝟎, 𝜷𝟏값을 찾자!(방식은 gradient decent등등 여러가지 있음)

![](/images/velog/7e4cd8abb3ec88e1.png)

<br/>
<br/>
<br/>

>
## Regression 유형

### Simple Linear Regression

- 데이터를 설명하는 모델을 **직선 형태**로 가정

	𝑌≈𝛽0+𝛽1𝑋

#### cf) 어느 모델이 성능이 좋은가?(loss 함수 이용)
- 실제 값과 예측값의 차이의 합 -> 예외 존재
![출처](/images/velog/3dcc5c72bdacbf22.png)

- 실제 값과 예측 값 **차이의 제곱의 합**으로 비교할것!

![](/images/velog/02f0995d9f9c5e9f.png)

- 요녀석을 조절해서 loss 함수의 크기를 작게 하는 방향으로 감

**방식**

1) Gradient descent
- 𝛽0, 𝛽1값을 loss 함수 값이 작아지게 계속 업데이트
-> 𝛽0, 𝛽1값 랜덤하게 초기화
-> 𝛽0, 𝛽1값을 어떻게 하면 줄일 수 있는지 알수 있는 Gradient값 계산
-> Gradient값을 활용하여 𝛽0, 𝛽1값 업데이트
-> loss값과 gradient값이 최소가 될때까지 반복
내용참고: 군장병 ai/sw 역량 강화 프로그램 / 중급프로젝트과정
https://military22.elice.io/courses/26526/lectures/204993/materials/13/list 

2) Normal equation(least squares)
3) Brute force search
4) .....

<br/>
<br/>
<br/>

### Multiple Linear Regression
- 여러개의 feature들로 predict

	𝑌≈𝛽0+𝛽1𝑋1+𝛽2𝑋2+𝛽3𝑋3+⋯++𝛽𝑀𝑋𝑀

#### cf) Loss Function
- 마찬가지로 **입력값과 실제값의 차이의 제곱의 합**으로 정의
-> 마찬가지로 기울기, y절편 조절해서 lossFunction 작게 함.
-> gradient decent 이용

#### 특징

- 여러 개의 입력값과 결괏값 간의 correlation 확인 가능
- 어떤 입력값이 결괏값에 어떠한 영향을 미치는지 알수 있음
- 여러 개의 입력값 사이 간의 **correlation이 높을 경우** 결과에 대한 신뢰성 잃을 가능성
-> 선형관계에 대해서 좀더 심층적인 이해
<br/>
<br/>
<br/>

## Regression evaluation

**목표를 얼마나 잘 달성했는지의 정도**를 평가 해야함. 실제 값과 모델이 예측하는 값의 **차이에** 기반한 평가방법 사용

ex) 𝑅𝑆𝑆,𝑀𝑆𝐸,𝑀𝐴𝐸,𝑀𝐴𝑃𝐸,𝑅^𝟐

- train set에 대한 정확도(train_Y, pred_y)와 test set(test_Y, pred_y)에 대한 정확도를 알아봄.
- 각각에 대한 장단점은 따로 구글링 해볼것/ **어떨때 뭘 써야하는지**


>
참고자료
1. regression 그림: https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=mykepzzang&logNo=220933439872
2. 내용 참고[군장병 ai/sw 역량 강화 프로그램 / 중급프로젝트과정]: https://military22.elice.io/courses/26526/lectures/204993/materials/13/list
