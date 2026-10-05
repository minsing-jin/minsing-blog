---
title: "구름 ide nextjs installation log"
pubDatetime: 2022-12-30T14:53:50.597Z
description: "next js 설치"
category: "web_study"
canonicalURL: "https://velog.io/@minsing-jin/구름-ide-nextjs-installation-log"
velogSeries: ["web_study"]
---

# Installation Log

1. node.js 스택 선택(node version은 16.x로 최신버전 설치)

2. yarn 설치(npx같은것임)

3. next js 공식문서 automatic setup 대로 따라감
3-1. error case1(4 high severity vulnerabilities)
- npm audit fix
- npm error로 npm ERR! audit This command requires an existing lockfile.이 나온다면
- npm i --package-lock-only 후 다시 npm audit fix

4. cd [파일명]으로 파일 들어가기

5. npm run dev 실행시켜 localhost 3000으로 들어갈것

6. 연결 거부 issue 발생시 구름 ide의 프로젝트 > 실행 url과 포트 메뉴를 실행/ 포트번호 맞춘후 아래 박스 선택후 사이트 들어가기(아래 링크 참조)
https://velog.io/@eldpswp99/%EA%B5%AC%EB%A6%84-ide-React-localhost-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95-%EC%82%AC%EC%A7%80%EB%B0%A9
(그냥 영상처럼 local에서 링크 복붙하면 구름 ide의 서버에서 여는것이 아닌 사지방 네트워크의 로컬호스트에서 여는것이기 때문에 오류 발생, 구름 서버에서 열어야함.)


참고강의: https://www.youtube.com/watch?v=KvoFvmu5eRo

next.js 공식 문서:https://nextjs.org/docs/getting-started

--------------------------------------------

# 실행
1. cd [파일명]
2. npm run dev

마지막 레코드 부분:https://youtu.be/KvoFvmu5eRo?t=1834



# tip
1.npm version update는

> npm install -g npm@9.6.7
