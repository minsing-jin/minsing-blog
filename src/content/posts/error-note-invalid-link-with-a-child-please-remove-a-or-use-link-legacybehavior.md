---
title: "Error note: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior\\n"
pubDatetime: 2023-01-07T11:07:26.657Z
description: "태그 <link>오류"
category: "web_study"
canonicalURL: "https://velog.io/@minsing-jin/Error-note-Invalid-Link-with-a-child.-Please-remove-a-or-use-Link-legacyBehavior"
velogSeries: ["web_study"]
---

영상부분: https://youtu.be/KvoFvmu5eRo?t=3002
## 상황
- nextjs에 있는 링크모듈을 import하여 사용하려던 도중 
![](/images/velog/dd06bef17c089316.png)
다음과 같은 에러가 발생했음.

## 해결
-nextjs 13부터는 <Link>태그 자체에서 자동으로 <a>태그가 랜더링 되므로 <a>태그를 사용하면 오류발생
  
  -> <a>대신 <Link 로 바로 사용>
