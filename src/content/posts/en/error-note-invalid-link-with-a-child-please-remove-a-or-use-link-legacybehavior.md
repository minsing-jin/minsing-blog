---
title: 'Error note: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior\n'
pubDatetime: 2023-01-07 11:07:26.657000+00:00
description: Tag <link> error
category: Programming & CS
tags: []
language: en
translationOf: error-note-invalid-link-with-a-child-please-remove-a-or-use-link-legacybehavior
translationStatus: approved
draft: false
velogSeries:
- web_study
---

Video section: https://youtu.be/KvoFvmu5eRo?t=3002
## Situation
- While trying to import and use the link module in Next.js
![](/images/velog/dd06bef17c089316.png)
the following error occurred.


## Solution
-Starting with Next.js 13, the <Link> tag itself automatically renders an <a> tag, so using an <a> tag causes an error
  
  -> Use <Link directly instead of <a>
