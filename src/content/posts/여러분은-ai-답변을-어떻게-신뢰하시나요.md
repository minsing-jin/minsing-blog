---
title: "여러분은 AI 답변을 어떻게 신뢰하시나요?"
pubDatetime: 2025-02-10T07:03:43.550Z
description: "\\bAI 답변 팩트체커: cluehunter"
category: "Build Log"
canonicalURL: "https://velog.io/@minsing-jin/여러분은-AI-답변을-어떻게-신뢰하시나요"
velogSeries: ["Playground"]
---

![](/images/velog/ef77f0497d8d3a27.png)

기존에는 Perplexity나 ChatGPT 같은 AI 챗봇을 활용할 때, 답변의 신뢰성을 확인하려면 출처 링크를 일일이 클릭하고 내용을 직접 찾아야 했습니다. 환각현상(Hallucination)으로 인한 잘못된 정보까지 검증하려면 추가적인 시간과 에너지가 필요했죠.
그러던중 ai가 참고했다는 원문출처를 클릭하면 답변에서 참고한부분을 자동으로 찾아주는 툴이 필요하다고 생각했습니다.

이에 저희는 ClueHunter는 AI가 참고한 출처를 단번에 검증할 수 있도록 도와주는 크롬 익스텐션을 개발했습니다. 

기존에는 Perplexity에서 제공하는 출처 링크를 하나씩 클릭하고, 내용을 직접 찾아야 했다면, 이제는 ClueHunter가 출처 페이지를 자동 스크롤 & 핵심 내용 강조 표시까지 해줍니다!
![](/images/velog/57bca74d698a3c93.png)

![](/images/velog/f8e69d23780c9ae8.png)


현재는 Perplexity 전용 크롬 익스텐션으로 제공되지만, 앞으로 ChatGPT, Claude AI 등 다양한 AI 챗봇에서도 활용할 수 있도록 확장할 예정입니다.

🛠 ClueHunter는 오픈소스 프로젝트로, 여러분의 피드백을 환영합니다!
- [ClueHunter 크롬 익스텐션](https://chromewebstore.google.com/detail/cluehunter-perplexity/mhkmlamlmdlkgpmfgbdnhohbggldekjf?hl=ko)
- [ClueHunter.js](https://github.com/RiceBobb/ClueHunter.js)
- [ClueHunter-Perpelxity](https://github.com/RiceBobb/ClueHunter-Perplexity)
