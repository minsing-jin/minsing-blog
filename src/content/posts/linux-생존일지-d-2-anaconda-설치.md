---
title: "linux 생존일지 D-1 (Anaconda 설치)"
pubDatetime: 2024-05-21T15:43:52.704Z
description: "파이썬 ai 개발환경을 만들기 위한 한걸음을 또 나아갔다. 아주굿"
category: "linux 생존일지"
canonicalURL: "https://velog.io/@minsing-jin/linux-생존일지-D-2-Anaconda-설치"
velogSeries: ["linux 생존일지"]
---

![](/images/velog/d545704a967cdf43.png)



# 🍳설치 튜토리얼
## Step1. Download

```
wget https://repo.anaconda.com/archive/Anaconda3-2024.02-1-Linux-x86_64.sh
```

![](/images/velog/b56746fe94b150b0.png)

## Step2. 설치하기
```
bash Anaconda3-2024.02-1-Linux-x86_64.sh
```

이후에 나오는 license agreement를 봐야 intallation process를 진행할수 있어서 Enter를 계속 누르면서 skip하자

![](/images/velog/c22f4055a8b1cfc2.png)


라이센스 조항들 accept할거냐 물어보면 yes를 입력하자
![](/images/velog/4e5fa3c404845d4b.png)

이후 anaconda의 설치 경로에 대한 confirm도 enter클릭
![](/images/velog/5688bf85ae2404e2.png)


conda init도 yes
![](/images/velog/385189c003d38578.png)

## Step3. conda 제대로 설치되었는지 check
```
conda --version
```
![](/images/velog/e71b07e900150b5a.png)

## Step4. 실행해보기
Bash의 경우 터미널을 닫았다가 다시 열거나 .bashrc 파일을 소싱하여 실행할 수 있다.

```
source ~/.bashrc
```

![](/images/velog/b52a7c0fcd22e352.png)

conda status 확인

![](/images/velog/7efca74911bc3992.png)

conda로 python version확인
![](/images/velog/fb0ca206dff2caef.png)


마침내 conda 가상환경 설치가 완료되었다.

# 🍳 느낀점
개발환경을 갖추기 위한 가상환경 anaconda설치가 무사히 완료되었다. 독립적인 패키지 관리를 통해서 여러 프로젝트를 진행할수 있게 되었다. 지금 base에서 여러 프로그램을 설치해보며 최소한의 나만의 개발환경 패키지를 만들어 보면 재밌을것 같다.


> 참고문헌
1. 튜토리얼 참고: https://meuse.tistory.com/entry/Linux%EC%97%90-Anaconda-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0
