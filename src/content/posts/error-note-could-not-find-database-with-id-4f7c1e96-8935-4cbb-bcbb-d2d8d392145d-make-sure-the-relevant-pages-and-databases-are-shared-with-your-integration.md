---
title: "Error note: \\\"Could not find database with ID: 4f7c1e96-8935-4cbb-bcbb-d2d8d392145d. Make sure the relevant pages and databases are shared with your integration.\\\""
pubDatetime: 2023-01-12T14:51:54.140Z
description: "notion api postman에서 쓸때 오류"
category: "web_study"
canonicalURL: "https://velog.io/@minsing-jin/Error-note-Could-not-find-database-with-ID-4f7c1e96-8935-4cbb-bcbb-d2d8d392145d.-Make-sure-the-relevant-pages-and-databases-are-shared-with-your-integration"
velogSeries: ["web_study"]
---

![](/images/velog/266ef163940ba3c5.png)

요자식이 https://youtu.be/KvoFvmu5eRo?t=5420 이부분에서 말썽이다. 


# 해결책

notion에 open as full page로 간다음에 링크에 notion database id를 복사해서 get에 database id 부분에 복붙해놔야함.

![](/images/velog/e0dc63e0a2efc73e.png)


근데 이 notion database id 전체를 붙여넣으면 query error가 뜨기 때문에

1ebc5f9be9ff403e9a2a788356d580be?v=dc91475edf394fa58c4cbbe10acf66b4

가 있다면 'v='를 포함한 다음부분 전체를 삭제하여

1ebc5f9be9ff403e9a2a788356d580be?



GET에 notion database id에 붙여넣으면 ok!
![](/images/velog/78c63c7903b388b5.png)
