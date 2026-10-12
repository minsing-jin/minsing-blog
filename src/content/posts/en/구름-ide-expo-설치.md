---
title: Cloud IDE Expo Installation
pubDatetime: 2022-12-24 10:56:57.322000+00:00
description: Linux errors, go... go away! (Anyone who can't install Expo, come on, come on~)
category: Programming & CS
tags: []
language: en
translationOf: 구름-ide-expo-설치
translationStatus: approved
draft: false
velogSeries:
- web_study
---

This is the result of two days of effort spent matching the processes and versions for countless errors. I spent my personal maintenance time for two days staring only at the Linux command prompt. Coding with the cloud IDE in the military PC room...... It's not easy!


If you enter the following commands in the terminal in order, the Expo QR code should appear normally in the terminal window.


**Oh, Ubuntu 18.x caused errors, so I set it to version 16.x during the initial container creation process.**


**1. npx expo install react-native-webview**
**2. npm install -g expo-cli**
**3. npm install -g n**
**4. n stable**
**5. node -v -> The following errors will appear**
node: /lib/x86_64-linux-gnu/libm.so.6: version `GLIBC_2.27' not found (required by node)
node: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.25' not found (required by node)
node: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.28' not found (required by node)


** 6. sudo apt-get remove nodejs**
** 7. nvm install 16.15.1 -> It says that the nvm command cannot be found**
**8. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash**
**9. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash**
**10. . ~/.nvm/nvm.sh**
**11. nvm install 16.15.1**
**12. expo start**
**13. Add "type": "module" to package.json**
----------------------------------------------
## I received a great deal of help from the following 4 websites (the process)
1. Basic Expo installation: https://docs.expo.dev/versions/latest/sdk/webview/
2. A strange syntax error appeared in the terminal: https://forum.goorm.io/topic/16978/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C%EB%A1%9C-expo-%EC%8B%A4%ED%96%89%EC%A4%91-%EC%83%9D%EA%B8%B0%EB%8A%94-%EB%AC%B8%EC%A0%9C%EA%B0%80-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4/4
3. I tried to check node -v at the link above, but 
`node: /lib/x86_64-linux-gnu/libm.so.6: version GLIBC_2.27' not found (required by node)`
`node: /lib/x86_64-linux-gnu/libc.so.6: version GLIBC_2.25' not found (required by node)`
`node: /lib/x86_64-linux-gnu/libc.so.6: version GLIBC_2.28' not found (required by node)`


Because the errors appeared, after frantically Googling, I realized I had to reinstall it with a different nodejs version:https://stackoverflow.com/questions/72921215/getting-glibc-2-28-not-found


4. But it said that the nvm command could not be found, haha. So, in order to install nvm, I followed this link and proceeded as far as activating nvm with . ~/.nvm/nvm.sh: https://jsikim1.tistory.com/176


5. I returned to the link in step 3 and successfully installed nvm install 16.15.1


6. expo start, let's go



--------------------------------------------------------


Why are there so many things that don't work in Cloud IDE!!!!!!!!!!!!!!! Let's make a web app already!!


>
Photo source: https://namu.wiki/w/%EB%BB%90%ED%81%90
