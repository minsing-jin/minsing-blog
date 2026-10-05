---
title: "Error report: 구름 ide 다음 서명들은 공개키가 없기 때문에 인증할 수 없습니다"
pubDatetime: 2023-02-18T14:34:05.968Z
description: "fucking error"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/Error-report-구름-ide-다음-서명들은-공개키가-없기-때문에-인증할-수-없습니다"
velogSeries: ["web_study"]
---

# 상황
sudo apt-get update를 하던중 오류가 나타났다.
오류 원문은 다음과 같다.

```
오류:6 https://cli-assets.heroku.com/apt ./ InRelease
  다음 서명들은 공개키가 없기 때문에 인증할 수 없습니다: NO_PUBKEY 0000000000000
받기:5 https://packages.cloudfoundry.org/debian stable InRelease [2,679 B]
```


# 해결

해결법은 다음과 같다. 

```
$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys [오류원문의 공개키 복붙]
```


# 원인
-ubuntu를 설치해서 처음 사용할 때 또는 apt-get update 를 처음 진행할때 공개키로 인해 진행이 안되는 경우가 생깁니다

 

GPG란? GNU Privacy Guard(GnuPG)의 OpenPGP 이다.

OpenPGP 표준을 사용하여 디지털 암호화 및 서명 서비스를 제공하는 툴이다.
공용키 시스템에서 각 사용자는 개인키와 공용키로 구성된 키 쌍을 가진다.
사용자의 개인 키는 비밀로 유지되므로 절대 공개할 필요가 없다.
공개키는 이용자가 소통하고자 하는 사람에게 누구나 부여할 수 있다
즉 배포 파일의 인증을 확인하는데 사용되느 소프트웨어 패키지 이다

 
정확한 내용은 크게 신경 쓸 필요 없이 아래 가이드 대로 인증 요청을 하면 추가로 인증할 필요 없이 적용이 된다

 
 
 
 
>> 원문출처)
https://oopaque.tistory.com/98
