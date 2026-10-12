---
title: 'Error note: "Could not find database with ID: 4f7c1e96-8935-4cbb-bcbb-d2d8d392145d. Make sure the relevant pages and databases are shared with your integration."'
pubDatetime: 2023-01-12 14:51:54.140000+00:00
description: An error when using the Notion API in Postman
category: Programming & CS
tags: []
language: en
translationOf: error-note-could-not-find-database-with-id-4f7c1e96-8935-4cbb-bcbb-d2d8d392145d-make-sure-the-relevant-pages-and-databases-are-shared-with-your-integration
translationStatus: approved
draft: false
velogSeries:
- web_study
---

![](/images/velog/266ef163940ba3c5.png)


This thing is causing trouble at https://youtu.be/KvoFvmu5eRo?t=5420 this part. 



# Solution


Open it as a full page in Notion, then copy the Notion database ID from the link and paste it into the database ID field in GET.


![](/images/velog/e0dc63e0a2efc73e.png)



However, pasting the entire Notion database ID causes a query error, so if you have


1ebc5f9be9ff403e9a2a788356d580be?v=dc91475edf394fa58c4cbbe10acf66b4


then delete the entire portion including 'v=' and everything after it, leaving


1ebc5f9be9ff403e9a2a788356d580be?




Paste it into the Notion database ID field in GET, and it works!
![](/images/velog/78c63c7903b388b5.png)
