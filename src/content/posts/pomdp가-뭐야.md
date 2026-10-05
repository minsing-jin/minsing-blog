---
title: "POMDP가 뭐야?"
pubDatetime: 2025-06-29T06:20:11.458Z
description: "POMDP"
category: "RL"
canonicalURL: "https://velog.io/@minsing-jin/POMDP가-뭐야"
velogSeries: ["RL"]
---

![](/images/velog/1f3692ff2c8f13fa.png)


## 📌 POMDP 구성요소 (수식 기반)

POMDP는 다음 7개의 요소로 정의됩니다:

$$
\text{POMDP} = \langle S, A, T, R, O, Z, \gamma \rangle
$$

| 기호                | 의미                                             |
| ----------------- | ---------------------------------------------- |
| $S$               | 상태(state)들의 집합                                 |
| $A$               | 행동(action)들의 집합                                |
| $T(s' \mid s, a)$ | 상태 전이 확률: 행동 $a$를 취했을 때, 상태 $s$에서 $s'$로 전이할 확률 |
| $R(s, a)$         | 보상 함수: 상태 $s$에서 행동 $a$를 했을 때의 기대 보상            |
| $O$               | 관측값(observation)들의 집합                          |
| $Z(o \mid s', a)$ | 관측 확률: $a$를 했을 때 $s'$에 도달한 뒤, 관측값 $o$를 얻을 확률   |
| $\gamma$          | 할인율 (0 ≤ $\gamma$ ≤ 1)                         |

---

## 📌 1. **belief state** (신념 상태)

에이전트는 현재 상태를 직접 알 수 없으므로, 다음과 같이 상태에 대한 확률 분포를 유지합니다:

$$
b(s) = P(\text{현재 상태가 } s)
$$

이를 **belief state**라고 부릅니다.
즉, 상태 공간 $S$에 대해 다음과 같은 확률 분포를 가집니다:

$$
b: S \rightarrow [0, 1], \quad \sum_{s \in S} b(s) = 1
$$

---

## 📌 2. **Belief 업데이트 수식 (Bayes 필터)**

행동 $a$ 후 관측 $o$를 받았을 때 belief를 업데이트하는 수식은:

$$
b'(s') = \eta \cdot Z(o \mid s', a) \cdot \sum_{s \in S} T(s' \mid s, a) \cdot b(s)
$$

여기서:

* $b(s)$: 기존 신념
* $T(s' \mid s, a)$: 상태 전이 확률
* $Z(o \mid s', a)$: 관측 확률
* $\eta$: 정규화 상수 (전체 합이 1이 되도록)

---

## 📌 3. **가치 함수 (Value Function)**

belief에 기반한 가치 함수는 다음과 같이 정의됩니다:

$$
V(b) = \max_{a \in A} \left[ \sum_{s \in S} b(s) R(s, a) + \gamma \sum_{o \in O} P(o \mid b, a) V(b_{a,o}) \right]
$$

여기서:

* $P(o \mid b, a)$: belief 상태 $b$에서 행동 $a$ 후 관측 $o$가 나올 확률
* $b_{a,o}$: 행동 $a$ 후 관측 $o$에 대한 belief 업데이트 결과
* $V(b_{a,o})$: 업데이트된 belief에 대한 가치

---

## 📌 4. **관측 확률 계산**

$$
P(o \mid b, a) = \sum_{s'} Z(o \mid s', a) \sum_{s} T(s' \mid s, a) b(s)
$$

---

## 🧠 핵심 요약

| 개념            | 수식                                                          |                     |            |
| ------------- | ----------------------------------------------------------- | ------------------- | ---------- |
| Belief $b(s)$ | 상태 $s$에 있을 확률                                               |                     |            |
| 업데이트          | (b'(s') = \eta Z(o                                          | s',a) \sum\_s T(s'  | s,a) b(s)) |
| 가치함수          | (V(b) = \max\_a \[ \sum\_s b(s) R(s,a) + \gamma \sum\_o P(o | b,a) V(b\_{a,o}) ]) |            |

---

## ❗ 어려운 점

* **Belief space**는 연속적인 고차원 확률 분포 → 계산량이 매우 큼
* 그래서 **근사 알고리즘** (예: Particle Filter, Point-based Value Iteration)이 자주 사용됨
