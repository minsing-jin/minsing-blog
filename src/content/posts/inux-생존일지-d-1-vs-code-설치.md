---
title: "linux 생존일지 D-2(vsCode 설치)"
pubDatetime: 2024-05-21T15:42:01.438Z
description: "\\n🍳 VsCode 설치 튜토리얼\\n먼저 Microsoft의 GPG 키를 가져와서 리포지토리를 추가해야 한다.\\n\\npackage list들을 update해야한다.\\n\\nVisual studio code 설치하세유~\\n\\n🍳 느낀점\\nvscode 설치 자체는 크게 어렵지 않다. 개"
category: "linux 생존일지"
canonicalURL: "https://velog.io/@minsing-jin/inux-생존일지-D-1-vsCode-설치"
velogSeries: ["linux 생존일지"]
---

![](/images/velog/0ba60b583a818693.png)

# 🍳 동기
개발환경을 구축하기 위해서는 IDE는 필수이다. 어떤 IDE가 제일 좋을지 테스트 해보고 싶어서 제일 기본적인 vscode를 먼저 설치하기로 정했다. 

# 🍳 VsCode 설치 튜토리얼
1. 먼저 Microsoft의 GPG 키를 가져와서 리포지토리를 추가해야 한다.
```
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
```

```
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```

2. package list들을 update해야한다.
```
sudo apt-get update
```
3. Visual studio code 설치하면
```
sudo apt-get install code
```

아래의 사진과 같이 정상적으로 vsc가 설치되고 실행되는 모습을 볼 수 있다.

![](/images/velog/b502372a44bb18a0.png)



# 🍳 느낀점
vscode 설치 자체는 크게 어렵지 않다. 개발자의 가장 기본적인 개발환경 구축을 리눅스로 해보자는 방향으로 잡고자 하였고, 내가 만들고 싶은 AI개발을 위한 개발 환경을 추가적으로 설치하기 위해서 이것저것 설치해볼 예정이다. 윈도우 환경에서 wsl을 통해 리눅스 설치에서 고전을 꽤 했던지라 vscode설치 자체는 어렵지 않았다. 

다음 해보고 싶은것
1. 리눅스에서 도커 설치
2. DB 설치해보기
