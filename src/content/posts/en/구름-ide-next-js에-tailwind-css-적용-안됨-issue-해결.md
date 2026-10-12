---
title: 'Error report: Issue resolved—Tailwind CSS not being applied to Next.js on goorm IDE'
pubDatetime: 2023-01-01 04:39:19.122000+00:00
description: 5 days of trial and error
category: Programming & CS
tags: []
language: en
translationOf: 구름-ide-next-js에-tailwind-css-적용-안됨-issue-해결
translationStatus: approved
draft: false
velogSeries:
- web_study
---

This error report is caused by the issue of Tailwind CSS not being applied at https://www.youtube.com/watch?v=KvoFvmu5eRo&t=1826s에서 30:31.


~~1. In the terminal, go back to the root folder with ```cd ..```.~~


2. Enter ```npm install autoprefixer``` in the terminal to install autoprefixer
Reference link:https://github.com/reactGo/reactGo/issues/177


3. Go back with ```cd [파일명]```


4. In the styles file,
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
change it to
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```
and save


5. Check whether Tailwind CSS has been applied with ```npm run dev```



![](/images/velog/6720125dc3c65d4b.png)
