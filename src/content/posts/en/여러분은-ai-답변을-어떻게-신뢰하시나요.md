---
title: How Do You Trust AI Answers?
pubDatetime: 2025-02-10 07:03:43.550000+00:00
description: '\bAI Answer Fact-Checker: cluehunter'
category: Build Log
tags: []
language: en
translationOf: 여러분은-ai-답변을-어떻게-신뢰하시나요
translationStatus: approved
draft: false
velogSeries:
- Playground
---

![](/images/velog/ef77f0497d8d3a27.png)


Previously, when using AI chatbots such as Perplexity or ChatGPT, verifying the reliability of their answers required clicking each source link one by one and searching through the content yourself. Verifying incorrect information caused by hallucinations required additional time and effort.
That’s when we thought there was a need for a tool that would automatically find the exact passages referenced in an answer when you click the original source cited by the AI.


Accordingly, we developed ClueHunter, a Chrome extension that helps you verify the sources referenced by AI at a glance. 


Previously, you had to click each source link provided by Perplexity and search through the content yourself. Now, ClueHunter automatically scrolls through the source page and highlights the key information!
![](/images/velog/57bca74d698a3c93.png)


![](/images/velog/f8e69d23780c9ae8.png)



Currently, it is available as a Chrome extension dedicated to Perplexity, but we plan to expand it for use with various AI chatbots, including ChatGPT and Claude AI.


🛠 ClueHunter is an open-source project, and we welcome your feedback!
- [ClueHunter Chrome Extension](https://chromewebstore.google.com/detail/cluehunter-perplexity/mhkmlamlmdlkgpmfgbdnhohbggldekjf?hl=ko)
- [ClueHunter.js](https://github.com/RiceBobb/ClueHunter.js)
- [ClueHunter-Perpelxity](https://github.com/RiceBobb/ClueHunter-Perplexity)
