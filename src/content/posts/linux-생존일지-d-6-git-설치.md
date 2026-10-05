---
title: "linux 생존일지 D-6 (Git 설치)"
pubDatetime: 2024-05-24T17:02:05.461Z
description: "버전컨트롤 렛츠고우"
category: "linux 생존일지"
canonicalURL: "https://velog.io/@minsing-jin/linux-생존일지-D-6-Git-설치"
velogSeries: ["linux 생존일지"]
---

![](/images/velog/769b5919057e8aeb.png)

# 🍳 동기
프로젝트를 진행한다면 소스코드 version control은 필수적이다. 개발환경을 갖추는데에 있어서 버전관리를 하기 위해 가장 대표적인 git을 설치하게 되었다

# 🍳 튜토리얼
현재 나는 ubuntu에서 git을 설치하고자했으므로 git의 공식 문서에서 linux의 ubuntu 부분을 참고한다.

## Step1. 패키지 리스트 업데이트

```
sudo apt install git-all
```
![](/images/velog/3105d32021870280.png)


## Step2. 깃 설치

```
sudop apt install git
```
![](/images/velog/b4109a24df46319d.png)
s
## Step3. 잘 설치되었는지 확인 하기 위해서 git version 확인
```
git --version
```
![](/images/velog/f9a2427e45e2fedc.png)

## Step4. 사용해보기
깃에 push했을시에 올라갈 내 정보 입력
```
git config --global user.name [이름]

git config --global user.mail [메일 주소]
```

![](/images/velog/2a766a154cafdaa0.png)

git clone해서 프로젝트가 잘 받아졌는지 확인해보기

```
git clone [url 주소] 
```

![](/images/velog/e9f1e1f64ffb43af.png)

잘 받아졌다.
![](/images/velog/111f488e875f92ce.png)


# 🍳 느낀점
프로젝트를 진행할시 중요한 버전컨트롤에 핵심적인 프로그램인 git을 설치해보고, 작동하는지 체크하기 위해서 직접 활용까지 해봤다. 여러 프로그램을 설치해보면서 리눅스를 환경에서 나의 맞춤형 개발환경을 찾아 나아가봐야겠다.

>참고문헌
1. 튜토리얼참고 : https://coding-factory.tistory.com/502
https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98
