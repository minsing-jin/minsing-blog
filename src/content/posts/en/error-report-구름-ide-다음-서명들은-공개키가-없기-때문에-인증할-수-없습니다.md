---
title: 'Error report: The following signatures could not be verified because the public key is not available in Goorm IDE'
pubDatetime: 2023-02-18 14:34:05.968000+00:00
description: fucking error
category: Programming & CS
tags: []
language: en
translationOf: error-report-구름-ide-다음-서명들은-공개키가-없기-때문에-인증할-수-없습니다
translationStatus: approved
draft: false
velogSeries:
- web_study
---

# Situation
An error appeared while running sudo apt-get update.
The original error message is as follows.


```
오류:6 https://cli-assets.heroku.com/apt ./ InRelease
  다음 서명들은 공개키가 없기 때문에 인증할 수 없습니다: NO_PUBKEY 0000000000000
받기:5 https://packages.cloudfoundry.org/debian stable InRelease [2,679 B]
```



# Solution


The solution is as follows. 


```
$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys [오류원문의 공개키 복붙]
```



# Cause
-Upon installing Ubuntu and using it for the first time, or running apt-get update for the first time, the process may fail to proceed because of a public key.

 


What is GPG? It is OpenPGP from GNU Privacy Guard (GnuPG).


It is a tool that provides digital encryption and signing services using the OpenPGP standard.
In a public-key system, each user has a key pair consisting of a private key and a public key.
A user's private key is kept secret and therefore never needs to be disclosed.
A public key can be given to anyone with whom the user wishes to communicate.
In other words, it is a software package used to verify the authenticity of distribution files.

 
The exact details are not particularly important; simply make the authentication request according to the guide below, and it will be applied without requiring any additional authentication.

 
 
 
 
>> Original source)
https://oopaque.tistory.com/98
