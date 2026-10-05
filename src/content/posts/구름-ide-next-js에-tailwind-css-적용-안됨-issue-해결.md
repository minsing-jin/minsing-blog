---
title: "Error report:구름 ide next js에 tailwind css 적용 안됨 issue 해결"
pubDatetime: 2023-01-01T04:39:19.122Z
description: "5일간의 삽질"
category: "web_study"
canonicalURL: "https://velog.io/@minsing-jin/구름-ide-next-js에-tailwind-css-적용-안됨-issue-해결"
velogSeries: ["web_study"]
---

본 error report는 https://www.youtube.com/watch?v=KvoFvmu5eRo&t=1826s에서 30:31에 tailwind css가 적용이 안되는 issue에 기인한다.

~~1. 터미널에 ```cd ..``` 으로 root folder에 다시 빠꾸 친다.~~

2. ```npm install autoprefixer``` 터미널에 입력하여 autoprefixer설치
참고 링크:https://github.com/reactGo/reactGo/issues/177

3. 다시 ```cd [파일명]``` 으로 컴백

4. styles 파일에
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
대신에
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```
로 수정후 저장

5. ```npm run dev``` 으로 tailwind css 적용되었는가 확인


![](/images/velog/6720125dc3c65d4b.png)
