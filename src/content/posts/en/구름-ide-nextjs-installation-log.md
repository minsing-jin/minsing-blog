---
title: goorm IDE Next.js installation log
pubDatetime: 2022-12-30 14:53:50.597000+00:00
description: Next.js installation
category: Programming & CS
tags: []
language: en
translationOf: 구름-ide-nextjs-installation-log
translationStatus: approved
draft: false
velogSeries:
- web_study
---

# Installation Log


1. Select the Node.js stack (install the latest version in the 16.x Node version series)


2. Install Yarn (similar to npx)


3. Follow the Next.js official documentation's automatic setup
3-1. error case 1 (4 high-severity vulnerabilities)
- npm audit fix
- If an npm error shows npm ERR! audit This command requires an existing lockfile.
- Run npm i --package-lock-only, then run npm audit fix again


4. Enter the file with cd [filename]


5. Run npm run dev and go to localhost 3000


6. If a connection refused issue occurs, go to goorm IDE's Project > Run URL and Port menu, run it / match the port number, then select the box below and enter the site (see the link below)
https://velog.io/@eldpswp99/%EA%B5%AC%EB%A6%84-ide-React-localhost-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95-%EC%82%AC%EC%A7%80%EB%B0%A9
(If you simply copy and paste the link locally as shown in the video, an error occurs because it opens on the localhost of the military network rather than on goorm IDE's server; it must be opened on the goorm server.)



Reference lecture: https://www.youtube.com/watch?v=KvoFvmu5eRo


Next.js official documentation:https://nextjs.org/docs/getting-started


--------------------------------------------


# Execution
1. cd [filename]
2. npm run dev


Last record section:https://youtu.be/KvoFvmu5eRo?t=1834




# tip
1. npm version update is


> npm install -g npm@9.6.7
