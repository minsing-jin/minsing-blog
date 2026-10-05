---
title: "linux 생존일지 D-8 (MongoDB 설치)"
pubDatetime: 2024-05-24T17:10:23.912Z
description: "RAG 오픈소스 프로젝트에 참여했을 당시 RAG를 위해서 사용했던 DB가 MongoDB였다. DB 연결은 나의 task가 아니어서 할수 있는 기회는 없었지만 리눅스로 한학기 살아보기에서 직접 리눅스에 설치하여 사용해보면서 재미있는 프로젝트 아이디어가 생기면 바로 사용해"
category: "linux 생존일지"
canonicalURL: "https://velog.io/@minsing-jin/linux-생존일지-D-8-MongoDB-설치"
velogSeries: ["linux 생존일지"]
---

![](/images/velog/ea7bc9a6ce2be345.png)

# 🍳 동기
RAG 오픈소스 프로젝트에 참여했을 당시 RAG를 위해서 사용했던 DB가 MongoDB였다. DB 연결은 나의 task가 아니어서 할수 있는 기회는 없었지만 리눅스로 한학기 살아보기에서 직접 리눅스에 설치하여 사용해보면서 재미있는 프로젝트 아이디어가 생기면 바로 사용해보고 싶었다.

# 🍳 튜토리얼
## Step1. MongoDB 공개 GPG 키 가져오기

```
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

```
다음과 같이 ok가 나오면 제대로 가져온것이다.
![](/images/velog/06339fa32fe7bec8.png)

아래 명령어에 대한 자세한 설명은 [이 링크에 있다.](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04)
```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```
![](/images/velog/a9592bf12cb8a841.png)

## Step2. 설치
디스크 사용에 대한 물음이 나오면 y를 입력해주면 된다.
```
sudo apt update
sudo apt install mongodb-org
```
![](/images/velog/406f8cae0b7ef6cc.png)


## Step3. 실행해보기
설치를 해봤으면 잘 작동하는지 실험해봐야한다. mongodb service를 시작하고 status를 확인해보자

```
(base) linux@DESKTOP-A1L15U9:~$ sudo systemctl start mongod.service
(base) linux@DESKTOP-A1L15U9:~$ sudo systemctl status mongod
```
아래 사진과 같이 잘 작동하는것을 확인 할 수 있다.
![](/images/velog/7ed2557b6c0cc6df.png)


# 🍳 느낀점
생애 첫 DB를 설치해보고 실행까지 해본 경험이었다. 오픈소스 프로젝트를 진행할때도 DB를 누군가가 연결해놓은것을 쓰기는 했지만 직접 설치에서 부터 관리까지는 해보지 못했고, 해보고 싶었다. 이번 기회에 mongoDB사용을 조금더 익혀서 나의 second brain 프로젝트에 활용해보는 디딤돌이 될것이다.


> 참고문헌
1. 튜토리얼 참고: https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04
