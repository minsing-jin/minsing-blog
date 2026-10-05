---
title: "linux 생존일지 D-7 (Slack 설치)"
pubDatetime: 2024-05-24T17:09:45.503Z
description: "slack 설치"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/linux-생존일지-D-7-ChatGPT-설치"
velogSeries: ["linux 생존일지"]
---

# 🍳 동기
큰 프로젝트가 있다면 협업이 필요한경우가 많다. 회사에서 리눅스 환경에서 개발한다고 했을때 소통을 위한 툴중 가장 대표적인 slack을 설치해보고자 한다. 

# 🍳 튜토리얼
[슬랙 공식 홈페이지](https://slack.com/intl/ko-kr/help/articles/212924728-Linux%EC%9A%A9-Slack-%EB%B2%A0%ED%83%80--%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C)에서 보면 ubuntu에서 어떻게 slack앱을 다운로드 할 수 있는지 잘 나와있다.

## 설치방법
terminal을 열고, snap을 통해서 slack을 설치할 수 있다.
```
sudo snap install slack
```
![](/images/velog/c0af423e1a19b7fd.png)


## 업데이트 방법
```
sudo apt-get update
sudo apt-get upgrade slack-desktop
```
![](/images/velog/8dd39e21f7ac5217.png)
![](/images/velog/dbe8453612fec1c4.png)

## 삭제 방법
```
sudo snap remove slack
```

## 결과
![](/images/velog/ed2f6a708287c3ab.png)

# 🍳 느낀점
slack에서 ubuntu에 맞춰서 편리하게 설치할 수 환경을 잘 마련해놓았다.
