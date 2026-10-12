---
title: What is a POMDP?
pubDatetime: 2025-06-29 06:20:11.458000+00:00
description: POMDP
category: Programming & CS
tags: []
language: en
translationOf: pomdp가-뭐야
translationStatus: approved
draft: false
velogSeries:
- RL
---

![](/images/velog/1f3692ff2c8f13fa.png)



## 📌 POMDP Components (Formula-Based)


A POMDP is defined by the following 7 elements:


$$
\text{POMDP} = \langle S, A, T, R, O, Z, \gamma \rangle
$$


| Symbol                | Meaning                                             |
| ----------------- | ---------------------------------------------- |
| $S$               | Set of states                                 |
| $A$               | Set of actions                                |
| $T(s' \mid s, a)$ | State transition probability: the probability of transitioning from state $s$ to $s'$ when action $a$ is taken |
| $R(s, a)$         | Reward function: the expected reward for taking action $a$ in state $s$            |
| $O$               | Set of observations                          |
| $Z(o \mid s', a)$ | Observation probability: the probability of obtaining observation $o$ after reaching $s'$ when $a$ is taken   |
| $\gamma$          | Discount factor (0 ≤ $\gamma$ ≤ 1)                         |


---


## 📌 1. **belief state**


Since the agent cannot directly know the current state, it maintains a probability distribution over states as follows:


$$
b(s) = P(\text{current state is } s)
$$


This is called the **belief state**.
In other words, it has the following probability distribution over the state space $S$:


$$
b: S \rightarrow [0, 1], \quad \sum_{s \in S} b(s) = 1
$$


---


## 📌 2. **Belief Update Formula (Bayes Filter)**


The formula for updating the belief after receiving observation $o$ following action $a$ is:


$$
b'(s') = \eta \cdot Z(o \mid s', a) \cdot \sum_{s \in S} T(s' \mid s, a) \cdot b(s)
$$


Here:


* $b(s)$: prior belief
* $T(s' \mid s, a)$: state transition probability
* $Z(o \mid s', a)$: observation probability
* $\eta$: normalization constant (so that the total sum is 1)


---


## 📌 3. **Value Function**


The value function based on the belief is defined as follows:


$$
V(b) = \max_{a \in A} \left[ \sum_{s \in S} b(s) R(s, a) + \gamma \sum_{o \in O} P(o \mid b, a) V(b_{a,o}) \right]
$$


Here:


* $P(o \mid b, a)$: probability of observing $o$ after taking action $a$ in belief state $b$
* $b_{a,o}$: result of updating the belief after action $a$ and observation $o$
* $V(b_{a,o})$: value of the updated belief


---


## 📌 4. **Calculating Observation Probabilities**


$$
P(o \mid b, a) = \sum_{s'} Z(o \mid s', a) \sum_{s} T(s' \mid s, a) b(s)
$$


---


## 🧠 Key Summary


| Concept            | Formula                                                          |                     |            |
| ------------- | ----------------------------------------------------------- | ------------------- | ---------- |
| Belief $b(s)$ | Probability of being in state $s$                                               |                     |            |
| Update          | (b'(s') = \eta Z(o                                          | s',a) \sum\_s T(s'  | s,a) b(s)) |
| Value function          | (V(b) = \max\_a \[ \sum\_s b(s) R(s,a) + \gamma \sum\_o P(o | b,a) V(b\_{a,o}) ]) |            |


---


## ❗ Challenges


* **Belief space** is a continuous, high-dimensional probability distribution → computational cost is very high
* Therefore, **approximation algorithms** (e.g., Particle Filter, Point-based Value Iteration) are often used
