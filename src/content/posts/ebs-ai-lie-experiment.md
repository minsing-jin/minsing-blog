---
title: "학생들은 AI의 거짓말을 알아챌 수 있을까: EBS 〈생각의 멸종〉 실험 기록"
pubDatetime: 2026-11-02T06:30:10+09:00
description: "EBS 다큐프라임 〈생각의 멸종〉 실험에서 진실과 거짓을 섞어 말하는 수업용 AI 에이전트와 교사용 대시보드를 만들었다. 중학생들은 수업·과제·토론 내내 챗봇의 거짓 정보를 알아채지 못했고, 문제는 AI의 오답이 아니라 그럴듯한 답 앞에서 판단을 내려놓는 사람이었다."
category: "AI & Agents"
tags: ["AI", "교육", "LLM", "EBS", "NomaDamas", "오픈소스"]
modDatetime: 2026-11-03T06:16:48.224Z
draft: false
ogImage: "https://jinminseong.com/images/posts/ebs-ai-lie-experiment/og.jpg"
summary: "EBS 다큐프라임 〈생각의 멸종〉 실험에서 진실과 거짓을 섞어 말하는 수업용 AI 에이전트와 교사용 대시보드를 만들었다. 중학생들은 수업·과제·토론 내내 챗봇의 거짓 정보를 알아채지 못했고, 문제는 AI의 오답이 아니라 그럴듯한 답 앞에서 판단을 내려놓는 사람이었다."
concepts: ["AI 리터러시", "환각", "검증", "교육용 에이전트", "판단 위임"]
related: ["ai의-긴-답변을-읽다-보면-내-생각이-사라진다", "여러분은-ai-답변을-어떻게-신뢰하시나요"]
language: "ko"
status: "published"
---

> 생각대로 살지 않으면 사는 대로 생각하게 된다.

우리는 AI의 거짓말을 어떻게 알아챌 수 있을까요? 어쩌면 우리는 AI를 검증하기보다, 이미 믿고 있는 것은 아닐까요?

저는 이번에 EBS 다큐프라임 〈생각의 멸종〉에서 진행한 실험에 NomaDamas로 참여해, 실험 설계와 수업용 AI 에이전트 및 교사용 모니터링 대시보드를 개발했습니다.

![EBS 다큐프라임 〈생각의 멸종〉 예고편 장면. 학생이 태블릿으로 'EBS with ChatGPT' 수업용 챗봇을 사용하고 있고, "나보다 더 똑똑한 AI가 말한 거면 무조건 맞겠지?"라는 자막이 보인다.](/images/posts/ebs-ai-lie-experiment/01-trailer-tablet.jpg "EBS 다큐프라임 〈생각의 멸종〉 예고편")

이번 실험에서 가장 흥미로웠던 부분은 AI가 얼마나 그럴듯하게 거짓말을 할 수 있는지가 아니라, **배우는 학생들 입장에서 얼마나 쉽게 그 거짓말을 믿어버리는가**였습니다.

## 실험이 시작된 질문

저 역시 대학생이지만 잘 모르는 분야에 대해서는 AI가 제시하는 답을 별다른 검증 없이 받아들일 때가 있습니다. 추가로 출처를 확인하고 사실관계를 검증하기보다, 이해했다고 착각하는 순간들이 있는 것이죠.

그렇다면 이제 막 배우기 시작하는 학생들은 어떨까요? 학생들은 정답을 빠르게 얻기 위해 LLM을 사용합니다. 하지만 AI가 알려주는 답이 맞는지, 그 근거가 타당한지 직접 검증하는 경험도 충분히 하고 있을까요?

이번 실험은 이런 질문에서 출발했습니다.

**수업에서 AI가 의도적으로 진실과 거짓이 섞인 정보들을 전달한다면 학생들은 이를 알아챌 수 있을까?**

## 거짓말 에이전트와 교사용 대시보드

선생님들이 사전에 준비한 거짓 정보와 사례를 바탕으로 저는 거짓말 로직과 난이도를 설계했습니다. 학생들에게는 서로 다른 난이도의 거짓말이 무작위로 주어지도록 실험을 구성했습니다.

저는 이를 실제 수업에서 활용할 수 있도록 거짓말 에이전트와 교사가 학생들의 대화 및 답변 과정을 모니터링할 수 있는 대시보드를 구현했습니다.

![학생용 'EBS with ChatGPT' 화면. 도덕 수업에서 학생이 "칸트의 기준은 무엇이야?"라고 묻자 AI가 "칸트는 행위자의 동기보다 행동이 가져온 결과를 더 중요하게 보았다"라는 거짓 답변을 한다.](/images/posts/ebs-ai-lie-experiment/03-student-chat.jpg "학생용 화면: AI가 칸트에 대해 거짓 답변을 한다")

![교사용 '실시간 교실 관찰' 대시보드. 학생 목록, 학생에게 보인 대화, 정답 기준과 거짓 주장 레벨을 나란히 보여주는 교사용 검수 영역으로 구성되어 있다.](/images/posts/ebs-ai-lie-experiment/04-teacher-dashboard.jpg "교사용 실시간 교실 관찰 대시보드")

## 학생들은 알아채지 못했다

그리고 실제 중학생을 대상으로 역사·도덕 수업에서 실험을 진행했습니다.

![EBS 다큐프라임 〈생각의 멸종〉 예고편 장면. 교실 화면에 'EBS with ChatGPT' 첫 화면이 띄워져 있고 "어느 틈에 생긴"이라는 자막이 보인다.](/images/posts/ebs-ai-lie-experiment/02-trailer-classroom.jpg "실제 수업 화면 (EBS 〈생각의 멸종〉 예고편)")

결과는 놀라웠습니다. **실험에 참여한 학생들은 수업을 듣고, 과제를 수행하고, 토론하는 과정에서도 챗봇이 전달한 거짓 정보를 알아채지 못했습니다.**

단순히 AI가 틀린 답을 내놓는 문제가 아니었습니다. 그럴듯한 답변을 제시하는 AI 앞에서 사람은 자신의 판단을 얼마나 쉽게 내려놓을 수 있는가에 관한 문제였습니다.

우리는 일상에서도 비슷한 경험을 합니다. 고민 상담을 할 때, 새로운 정보를 알아볼 때, 잘 모르는 분야를 공부할 때 AI의 답변을 그대로 받아들이곤 합니다. 내가 모르는 것을 AI가 알고 있다는 사실만으로 그 답변까지 사실이라고 생각하게 되는 것은 아닐까요?

## 다시 생각하게 된 질문들

이번 실험을 통해 다시 생각하게 된 질문들이 있습니다.

- 정답을 빠르게 얻는 것이 진정한 배움일까요?
- AI가 문제를 풀고 정답을 맞히는 능력에서 인간을 뛰어넘었다면, 우리는 무엇을 가르치고 배워야 할까요?
- 정답만 남은 사회에서 인간에게 필요한 생각하는 힘은 무엇일까요?

이전에 Markr AI에서 LLM Evaluation을 진행하며 사람과 AI의 성능을 비교하는 수능 국어 벤치마크를 만들었던 경험이 있습니다. 당시 o1-preview가 단 한 문제만 틀리는 결과를 보여주며 AI의 발전이 우리에게 어떤 질문을 던지는지 고민할 기회가 있었습니다.

이번에는 한 걸음 더 나아가, AI가 사람의 생각과 판단에 어떤 영향을 미치는지 실제 교육 현장에서 실험하고 구현할 수 있었습니다.

개인적으로 오픈소스와 기술들을 개발하는 것을 넘어, 제가 만든 기술이 사람들에게 생각할 거리를 던지고 사회적으로 의미 있는 질문을 제기하는 데 기여할 수 있었다는 점에서 더욱 뜻깊은 경험이었습니다.

## 오픈소스와 데모

이번 작업을 NomaDamas 오픈소스 프로젝트로 공개했습니다. 수업에서 활용하셔야 한다면 편하게 사용하세요!

- 오픈소스 GitHub: [NomaDamas/EBS-Gurapingala-teacher](https://github.com/NomaDamas/EBS-Gurapingala-teacher)
- DEMO mockup page
  - 학생용: [ebs-gurapinggala.jinminseong.com](https://ebs-gurapinggala.jinminseong.com/)
  - 선생님용: [ebs-gurapinggala.jinminseong.com/teacher](https://ebs-gurapinggala.jinminseong.com/teacher/)

EBS 다큐프라임 〈생각의 멸종〉

- 첫 방송: 2026년 11월 2일(월) 밤 9시 55분, EBS1
- 본방송: [EBS](https://www.ebs.co.kr/)
- 프로그램 안내 및 다시보기: [EBS 다큐프라임](https://docuprime.ebs.co.kr/docuprime/newReleaseView/680?c.page=1)
- 생각의 멸종 YouTube 채널: [@ebsliteracy](https://www.youtube.com/@ebsliteracy/videos)
- 예고편 1: [YouTube](https://www.youtube.com/watch?v=Xpy0v_dfUYE)
- 예고편 2: [YouTube](https://www.youtube.com/watch?v=66G8FzerdJo)

## 감사의 말

이번 프로젝트를 통해 의미 있는 질문을 던질 수 있도록 기회를 마련해 주시고 함께 고민해 주신 EBS 제작진 여러분께 진심으로 감사드립니다.

그리고 NomaDamas를 만들고, 에이전트 설계를 도와주신 Markr AI Cheol H. Jeong 박사님, 함께 에너지를 나누며 도전을 이어나갈 수 있게 도와주신 Jeffrey Kim, DoYun Ha, Bobb (Byoungwook) Kim, Hojin Yang, Yongbin Choi, DongGeon Han 님께도 감사드립니다.

여러분은 AI가 제시한 답을 어떻게 검증하고 계신가요?
