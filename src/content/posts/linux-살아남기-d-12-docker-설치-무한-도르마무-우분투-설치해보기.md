---
title: "linux 살아남기 D-12 (Docker 설치)"
pubDatetime: 2024-05-24T17:22:28.564Z
description: "도커 렛츠고우"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/linux-살아남기-D-12-Docker-설치-무한-도르마무-우분투-설치해보기"
velogSeries: ["linux 생존일지"]
---

![](/images/velog/1836e0baeafdce1b.png)

# 🍳 동기
AI 서비스를 개발하는데에 서버가 매우 많다면 서버 업데이트가 진행될때 마다 일일이 서버 접속해서 업데이트를 진행시켜줘야한다. 이것을 해결하는것이 서버 환경까지도 모두 소프트웨어화를 진행하는 아이디어이며 가상화를 통해서 특정 소프트웨어 환경을 만들어 local, production서버에 그대로 활용한다는 것이다. 이에 이번 기회에 리눅스로 한학기 살아보면서 도커를 사용해보고 싶었다.


# 🍳 튜토리얼
도커는 리눅스 배포판 종류를 자동으로 인식하여 알맞은 도커 패키지를 설치해주므로 아래 명령어 한줄이면 자동으로 리눅스 배포판 버전을 감지해 맞춤형으로 도커 설치가 진행된다.
```
sudo wget -qO- http://get.docker.com/ | sh
```

![](/images/velog/0223a91d4f8f70db.png)


설치가 완료되었으면 docker가 잘 설치되었는지 version을 확인해보자.

```
docker version
```
![](/images/velog/dc06cde50f5a34ef.png)

도커가 잘 실행되는지 체크해보자
```
sudo systemctl status docker
```
![](/images/velog/a760edf29418399b.png)


# 🍳 느낀점
다양한 배포판의 종류를 자동으로 인식하여 도커가 설치가 되어 설치에는 큰 어려움이 없었다. 이번 기회에 리눅스로 한학기 살아보기를 기회로 도커를 직접 사용해보면서 AI개발 프로젝트를 진행해보고자 한다.

> 참고문헌
1. 튜토리얼 참고:  https://www.leafcats.com/153
