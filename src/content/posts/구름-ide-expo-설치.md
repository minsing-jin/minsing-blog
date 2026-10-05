---
title: "구름 ide expo 설치"
pubDatetime: 2022-12-24T10:56:57.322Z
description: "리눅스 에러 꺼...꺼져! (expo설치 안되는분 컴온컴온~)"
category: "web_study"
canonicalURL: "https://velog.io/@minsing-jin/구름-ide-expo-설치"
velogSeries: ["web_study"]
---

수많은 에러의 과정과 버전을 맞추기 위한 이틀간의 노력이다. 이틀동안 개인정비시간에 리눅스 명령창만 봤다. 싸지방에서 구름 ide로 코딩...... 쉽지 않다!

다음의 명령어 순서대로 터미널에 입력하면 정상적으로 expo의 qr코드가 터미널창에 등장할것이다.

**아참 ubuntu는 18.x버전은 오류를 일으켜서 16.x버전으로 처음 컨테이너생성과정에서 설정했다.**

**1. npx expo install react-native-webview**
**2. npm install -g expo-cli**
**3. npm install -g n**
**4. n stable**
**5. node -v -> 아래와 같이 에러가 뜰것임**
node: /lib/x86_64-linux-gnu/libm.so.6: version `GLIBC_2.27' not found (required by node)
node: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.25' not found (required by node)
node: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.28' not found (required by node)

** 6. sudo apt-get remove nodejs**
** 7. nvm install 16.15.1 -> nvm명령어를 찾을수 없음이라고 뜸**
**8. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash**
**9. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash**
**10. . ~/.nvm/nvm.sh**
**11. nvm install 16.15.1**
**12. expo start**
**13. package.json에 "type": "module" 추가**
----------------------------------------------
## 다음의 4곳의 사이트에서 큰도움을 얻었다.(시행과정)
1. expo 기본설치: https://docs.expo.dev/versions/latest/sdk/webview/
2. 이상한 syntax error가 터미널에서 뜸: https://forum.goorm.io/topic/16978/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C%EB%A1%9C-expo-%EC%8B%A4%ED%96%89%EC%A4%91-%EC%83%9D%EA%B8%B0%EB%8A%94-%EB%AC%B8%EC%A0%9C%EA%B0%80-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4/4
3. 위의 링크에서 node -v을 체크할려했지만 
`node: /lib/x86_64-linux-gnu/libm.so.6: version GLIBC_2.27' not found (required by node)`
`node: /lib/x86_64-linux-gnu/libc.so.6: version GLIBC_2.25' not found (required by node)`
`node: /lib/x86_64-linux-gnu/libc.so.6: version GLIBC_2.28' not found (required by node)`

에러가 떴기때문에 폭풍 구글링 결과 nodejs 버전 다르게해서 다시 설치해야징:https://stackoverflow.com/questions/72921215/getting-glibc-2-28-not-found

4. 근데 nvm 명려어를 찾을수 없다네 하하 그래서 nvm설치 결정하기 위해서 이 링크에서 . ~/.nvm/nvm.sh 에 nvm활성화까지 시행: https://jsikim1.tistory.com/176

5. 다시 3번에 링크에 돌아와서 nvm install 16.15.1 정상설치

6. expo start 렛츠고우


--------------------------------------------------------

구름 ide 뭐가 안되는게 많냐!!!!!!!!!!!!!!! 웹앱좀 만들어보자 쫌!!

>
사진 출처: https://namu.wiki/w/%EB%BB%90%ED%81%90
