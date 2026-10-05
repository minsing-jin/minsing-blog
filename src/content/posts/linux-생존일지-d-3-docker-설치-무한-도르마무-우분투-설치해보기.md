---
title: "linux 생존일지 D-3 (PostgreSQL 설치)"
pubDatetime: 2024-05-24T16:55:47.355Z
description: "안쓰는 노트북을 원격으로 접속하여 조종하고자 한다. 안쓰는 노트북과 쓰는 노트북 두개를 들고다니기 너무 무겁다. 이것을 해결하기 위해서 Any Desk라는 리얼타임 타 컴퓨터 접속 장치를 알아보겠습니다~"
category: "linux 생존일지"
canonicalURL: "https://velog.io/@minsing-jin/linux-생존일지-D-3-Docker-설치-무한-도르마무-우분투-설치해보기"
velogSeries: ["linux 생존일지"]
---

![](/images/velog/978b36687027e73b.png)

# 🍳동기
Second brain의 데이터들을 저장하기 위해서는 DB는 필수이다. 여러 DB에 대해서 알아보고 직접 리눅스 환경에서 써보고자 postgresql을 선정했다. 다양한 레퍼런스와 입문하기 좋은 조건들을 PostgreSQL은 가지고 있다고 해서 이번 기회에 설치 해보고 사용해보고자 했다.

# 🍳튜토리얼
## Step1. apt-get 업데이트 및 PostgreSQL 설치
맨 처음 apt-get을 업데이트 해준다.
```
$ sudo apt-get update
$ sudo apt-get install postgresql postgresql-contrib
```

![](/images/velog/5f970776e2aec736.png)

## Step2. 실행해보기
postgresql 설치시 postgres 계정이 자동생성된다.
본 명령어는 postgres계정을 변경하는 명령어이다.
```
$ sudo -i -u postgres
```
![](/images/velog/14a04dda81c83a8c.png)


postgres계정으로 변경된것을 확인할 수 있다.
![](/images/velog/94e4b79fef1fc189.png)


이제 postgresql로 들어가보자.
```
$ psql
```
![](/images/velog/2c6d1ebed9178ba2.png)

postgreSQL가 잘 설치되었다는것을 알 수 있으며, 설치버전은 12.18이다.


# 🍳 느낀점
첫 DB를 설치해봤다. 데이터들을 저장하는 곳은 그동안은 구글 드라이브 혹은 로컬에 폴더와 바탕화면이었는데 postgreSQL을 설치하고 이제는 데이터들을 저장하는 DB 공간을 만들고, 프로젝트를 진행할때 활용해야겠다. DB조작을 위해 SQL을 익히고 이것저것 조작해보며 이번기회에 익혀봐야겠다.


> 참고
1. 튜토리얼 참고: https://dejavuqa.tistory.com/16
