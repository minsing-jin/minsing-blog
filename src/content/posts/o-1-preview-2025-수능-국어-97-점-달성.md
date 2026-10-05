---
title: "o1-preview 2025 수능 국어 97점 달성"
pubDatetime: 2024-11-17T06:17:51.589Z
description: "인간시대의 끝이 도래했다"
category: "Playground"
canonicalURL: "https://velog.io/@minsing-jin/o1-preview-2025-수능-국어-97점-달성"
velogSeries: ["Playground"]
---

#### 🗂️ 본 실험은 [Markr.AI](https://github.com/Marker-Inc-Korea)에서 진행한 프로젝트입니다.
#### [🥇 수능 llm 리더보드 벤치마크 바로가기](https://github.com/Marker-Inc-Korea/Korean-SAT-LLM-Leaderboard/blob/main/Korean_README.md)
#### [🪑 2023 수능 미니벤치마크 튜토리얼 바로가기](https://github.com/Marker-Inc-Korea/Korean-SAT-LLM-Leaderboard/blob/main/korean_sat_mini_test/manual/Kor_manual.md)

----
### [GPT 2025 수능 LLM 벤치마크 평가 결과](https://github.com/Marker-Inc-Korea/Korean-SAT-LLM-Leaderboard/blob/main/Korean_README.md#-notice-25-%EC%88%98%EB%8A%A5-1%EA%B0%9C%EB%85%84-%EB%AA%A8%EB%8D%B8-%EC%84%B1%EB%8A%A5-%EB%B9%84%EA%B5%90-%EA%B2%B0%EA%B3%BC)

|  순위   |      모델명      | 원점수 | 추정 등급컷(2025.11.18기준) |
|:-----:|:-------------:|:---:|:--------------------:|
| 🥇1st |  o1-Preview   | 97  |         1등급          |
| 🥈2nd |    o1-mini    | 78  |         4등급          |
| 🥉3rd |    gpt-4o     | 75  |         4등급          |
|  4th  |  gpt-4o-mini  | 59  |         5등급          |
|  5th  | gpt-3.5-turbo | 16  |         8등급          |


o1-preview가 2025 수능 국어 97점을 달성했다! 리더보드를 만들고 실험을 해보면서 llm의 언어수준을 파악했는데 무려 문제 하나만 틀리고 전부 맞는 성능이 나오는경우는 놀라운 결과이다. 한국어 언어 능력을 평가하는 가장 공신력있는 수능 국어 문제를 한문제 빼고 맞췄다. 

이전 수능 국어 10개년 LLM 리더보드에서 성능 비교 결과, 1위를  차지한 gpt-4o가 평균등급 3등급대에 최고 점수는 86점을 차지했다. LLM이 인간의 언어능력을 따라가기에는 아직 멀었다는것을 체감할 수 있었다. 

하지만 2024 수능에서 o1-preview는 88점 1등급을 달성하여 인간과 함께 언어능력이 우수하다정도였지만 2025 수능에서 기록한 97점이라는 만점에 가까운 점수는, LLM의 한국어 언어능력이 인간의 Performance를 뛰어넘을 시기가 머지 않았음을 보여준다. 

# 🤷 o1-preview가 틀린 단 한문제는 무엇이었는가?
### o1-preview가 틀린 문제는 8번(3점) 비문학 지문
- o1-preview가 틀린 문제는 8번(3점) 비문학 지문으로 지문과 보기간의 세밀한 논리 대조를 요구하는 문제였다. 
- o1-preview가 지문에 답한 근거를 볼 수 있도록 각 선지에 대한 판단의 근거까지 작성할수 있도록 프롬프트를 실험하고, 적용했다. o1-preview는 CoT라는 복잡한 논리적 추론 과정을 거치는데 문제의 특성상 지문과 보기의 맥락을 이해하고 이를 기반으로 숨은 취지를 파악하는데에 있어서 o1-preview가 오류를 범했다. 
- 정답은 1번이지만 o1-preview가 선택한 답은 3번이다. 
- 재밌는 사실은 수험생의 2025 수능 오답률 또한 8번(81.5%)이 가장 높은것으로 나타났다. [참고) EBSi 수능국어 오답률](https://www.ebsi.co.kr/ebs/xip/xipa/retrievePastGrdCutWrongAnswerRate.ebs?tab=1)


# 🪑 벤치마크 배경과 목적
벤치마크 배경은 [Nomadamas에서의 LLM으로 수능 국어 1등급을 달성해보자!](https://github.com/NomaDamas/KICE_slayer_AI_Korean) 프로젝트에서 시작했다. 한창 gpt-4가 출시되어 유명했던 프롬프트 엔지니어링을 통해서 극악무도한 난이도의 수능국어를 출제하는 KICE를 깨보자는 프로젝트였다.

![](/images/velog/a9cfe0f7f36e3bd4.png)

Nomadmas의 프로젝트는 수많은 프롬프트 엔지니어링 실험을 통해서 나온 양질의 프롬프트를 기반으로 이번에는 llm 모델들의 퍼포먼스를 비교하는것에 초점을 맞췄다. 
이에 수능 국어 10개년을 기반으로 지금까지 나온 모델들중 어느모델이 가장 성능이 높은지에 대한 리더보드를 만들게 되었고 그것이 [수능 국어 llm leaderboard](https://github.com/Marker-Inc-Korea/Korean-SAT-LLM-Leaderboard/blob/main/Korean_README.md)이 되었다. 


프로젝트의 주요한 목적은 다음과 같다.

1. Human performance와 LLM performance를 비교할수 있는 벤치마크 정보공유
2. 한국어 언어능력을 평가하는 한국의 가장 공신력 있는 KICE 평가원의 엄선된 벤치마크 데이터셋
3. 해마다 업데이트 되는 새로운 수능국어 벤치마크 데이터셋으로 데이터 리키지 방지
4. 특정 국가나 기업에 종속되지 않은 오픈소스 LLM이 한국 수능 1등급에 도달시키는것


# 🧪 실험 방법
### 1️⃣ 데이터셋 구성 및 파싱:
2015년부터 2024년까지의 수능 국어 10개년 데이터를 수집했다. 수능 국어 pdf에서 text만 추출하고 추출한 텍스트를 
- 질문
- 지문
- 보기
- 선지

로 구분하여 Json으로 파싱했다.

[A]나 [B]와 같은 특정 단어나 문단, 문장을 가리키는 경우는 해당부분을 소괄호로 묶어 표시했다. 표나 사진 같은 경우는 해당 자료를 설명하는 설명 글로 직접 적어서 대체했다. 

![](/images/velog/5af6b9c31dce5611.png)


만들어진 Json 파일들을 기반으로 qa와 corpus로 파싱하여 AutoRAG용 데이터로 만들었다. 

[데이터셋 구성에 대한 자세한 내용은 여기를 참고해주세요](https://github.com/NomaDamas/KICE_slayer_AI_Korean?tab=readme-ov-file#ii-%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%99%94)

### 2️⃣ [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) 활용 벤치마크:
AutoRAG는 최적의 RAG파이프라인을 본인이 활용하는 데이터에 맞게 자동으로 최적화해준다. 

AutoRAG에서 지원하는 기능중에서 yaml파일을 활용하여 다양한 모델들을 간편하게 접근할 수 있고, 프롬프트를 갈아끼울수 있는 GOAT 기능이 있어서 이번 수능 벤치마크 리더보드에 활용하였다. 


2023 수능기준으로 본인이 궁금한 모델들의 performance를 확인할 수 있는 미니 테스트 기능을 추가했으니 궁금하신 분은 [수능벤치마크 미니테스트](https://github.com/Marker-Inc-Korea/Korean-SAT-LLM-Leaderboard/blob/main/korean_sat_mini_test/manual/Kor_manual.md)를 확인해주세요!


### 3️⃣ Evaluation
대회에서는 각 모델이 제시된 문제에 대해 제출한 답안이 실제 정답과 일치하는지 여부를 측정한다. 이때 기존에 정의해놓은 답변 형식에 맞춰 모델 최종답안을 내놓게 되면 이를 보고 LLM이 정답을 추출한다.
추출한 정답과 기존에 만들어놓은 정답지를 기준으로 채점을 하여 최종점수를 매긴다.  


### 4️⃣ Scoring 및 Leaderboard 구성

리더보드의 순위는 각 해의 문제의 난이도를 반영할 수 있는 표준점수의 평균으로 순위를 매겼다. 


# 🎬 향후 방향성

1. 한국 수능과 모의고사 일정에 맞춰 지속적으로 그시점까지 공개된 LLM(즉, 신규 문제를 학습할 여지가 없어 데이터 리키지가 안발생하는 LLM)들을 평가할 계획이다.

2. 목표는 특정 국가나 기업에 종속되지 않은 오픈소스 LLM이 한국 수능 1등급에 도달시키는것

# 🏝️ 생각랜드
- o1 preview가 상위 4%의 언어 수준과 논리력을 갖춘것을 확인할 수 있었다. 이는 LLM이 사람보다 더 뛰어난 판단력과 논리력을 갖추고, 사람들이 이러한 영특한 도구를 더 쉽게 이용할 수 있다는것을 의미한다.
- 이는 곧 화이트칼라의 종말을 예측할수 있다. 기업들은 값비싼 상위 4%의 판단력과 논리성을 가진 인건비가 비싼 사람을 고용하기보다 더 값싸고 빠른 LLM들을 고용하게 되면서 화이트 칼라에 상당한 위협이 될것으로 보인다. 
- - GPU 비용만으로 화이트칼라 업무 대체가 가능해지면 행정, 데이터 분석, 보고서 작성 등 대부분의 사무직이 자동화될 수 있다.
- 오픈소스 AI가 빠른 속도로 발전하며, 6개월~1년 사이에 화이트칼라 종말의 서막이 열릴 가능성이 있다.
- 화이트칼라의 종말은 논리성과 판단력이 더 뛰어난 AI가 “보스”가 되는 시대의 서막이 될 수 있으며 사람은 오히려 LLM이 가지지 못하는 육체적인 노동이 들어간 일들을 하게 될것이다. 즉 인간의 노동의 개념이 재구성 되는 사회적 전환점이 될것이다.
