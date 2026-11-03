---
title: "Can Students Catch an AI's Lies? Notes from the EBS 'Extinction of Thinking' Experiment"
pubDatetime: 2026-11-02T06:30:10+09:00
description: "For the EBS Docuprime 'Extinction of Thinking' experiment, I built a classroom AI agent that mixes truth with lies and a teacher dashboard. Middle school students never caught the false information; the issue was not AI's wrong answers but how easily people set aside judgment before plausible ones."
category: "AI & Agents"
tags: ["AI", "Education", "LLM", "EBS", "NomaDamas", "Open Source"]
modDatetime: 2026-11-03T06:16:48.383Z
draft: false
summary: "For the EBS Docuprime 'Extinction of Thinking' experiment, I built a classroom AI agent that mixes truth with lies and a teacher dashboard. Middle school students never caught the false information; the issue was not AI's wrong answers but how easily people set aside judgment before plausible ones."
concepts: ["AI literacy", "hallucination", "verification", "educational agents", "delegated judgment"]
related: ["ai의-긴-답변을-읽다-보면-내-생각이-사라진다", "여러분은-ai-답변을-어떻게-신뢰하시나요"]
language: "en"
translationOf: "ebs-ai-lie-experiment"
translationStatus: "approved"
status: "published"
---

> "If you don't live the way you think, you end up thinking the way you live."

How can we tell when an AI is lying? Perhaps, instead of verifying AI, we already believe it.

With NomaDamas, I took part in an experiment for the EBS Docuprime documentary *Extinction of Thinking* (〈생각의 멸종〉). I designed the experiment and built the classroom AI agent and the teacher monitoring dashboard.

![A scene from the EBS Docuprime 'Extinction of Thinking' trailer. A student uses the 'EBS with ChatGPT' classroom chatbot on a tablet, with the subtitle "If an AI smarter than me said it, it must be right, right?"](/images/posts/ebs-ai-lie-experiment/01-trailer-tablet.jpg)

The most interesting part of the experiment was not how convincingly an AI can lie, but **how easily students who are still learning end up believing those lies**.

## The Question Behind the Experiment

I am a university student myself, and in fields I don't know well, I sometimes accept AI answers without much verification. Instead of checking sources and facts, there are moments when I mistake following along for understanding.

What about students who are just starting to learn? Students use LLMs to get answers quickly. But do they get enough experience checking whether the AI's answer is right and whether its reasoning holds up?

The experiment started from this question:

**If an AI in class deliberately delivered a mix of true and false information, would students notice?**

## A Lying Agent and a Teacher Dashboard

Based on false information and examples prepared in advance by the teachers, I designed the lying logic and difficulty levels. The experiment assigned lies of different difficulty to students at random.

To make this usable in a real classroom, I built the lying agent and a dashboard where teachers can monitor students' conversations and how they arrive at their answers.

![The student-facing 'EBS with ChatGPT' screen. In an ethics class, a student asks "What is Kant's standard?" and the AI falsely answers that Kant valued the consequences of an action more than the agent's motive.](/images/posts/ebs-ai-lie-experiment/03-student-chat.jpg)

![The teacher's 'Live Classroom Observation' dashboard, showing the student list, the conversation the student saw, and a teacher review panel with the correct standard and the level of the false claim side by side.](/images/posts/ebs-ai-lie-experiment/04-teacher-dashboard.jpg)

## The Students Did Not Notice

We then ran the experiment in history and ethics classes with real middle school students.

![A scene from the EBS Docuprime 'Extinction of Thinking' trailer. The 'EBS with ChatGPT' start screen is displayed on a classroom screen.](/images/posts/ebs-ai-lie-experiment/02-trailer-classroom.jpg)

The results were striking. **Throughout the lesson, the assignment, and the discussion, the participating students did not notice the false information the chatbot gave them.**

This was not simply a problem of AI giving wrong answers. It was about how easily people set aside their own judgment in front of an AI that gives plausible answers.

We have similar experiences in everyday life. When we ask for advice, look up new information, or study an unfamiliar field, we often accept AI answers as they are. Do we start to believe an answer is true simply because the AI knows something we don't?

## Questions I Am Thinking About Again

The experiment brought me back to a few questions:

- Is getting the right answer quickly really learning?
- If AI has surpassed humans at solving problems and getting answers right, what should we teach and learn?
- In a society where only answers remain, what kind of thinking power do people need?

Previously at Markr AI, while working on LLM evaluation, I built a Korean CSAT (Suneung) Korean-language benchmark comparing human and AI performance. At the time, o1-preview got only one question wrong, which made me think about what questions AI progress raises for us.

This time I could go a step further and test, in a real classroom, how AI influences people's thinking and judgment.

Beyond building open source and technology, it was especially meaningful that something I built could give people something to think about and help raise a socially meaningful question.

## Open Source and Demo

We released this work as a NomaDamas open source project. If you want to use it in your class, feel free!

- Open source GitHub: [NomaDamas/EBS-Gurapingala-teacher](https://github.com/NomaDamas/EBS-Gurapingala-teacher)
- Demo mockup pages
  - Student: [ebs-gurapinggala.jinminseong.com](https://ebs-gurapinggala.jinminseong.com/)
  - Teacher: [ebs-gurapinggala.jinminseong.com/teacher](https://ebs-gurapinggala.jinminseong.com/teacher/)

EBS Docuprime *Extinction of Thinking* (〈생각의 멸종〉)

- First broadcast: Monday, November 2, 2026, 9:55 PM KST, EBS1
- Live broadcast: [EBS](https://www.ebs.co.kr/)
- Program info and replays: [EBS Docuprime](https://docuprime.ebs.co.kr/docuprime/newReleaseView/680?c.page=1)
- YouTube channel: [@ebsliteracy](https://www.youtube.com/@ebsliteracy/videos)
- Trailer 1: [YouTube](https://www.youtube.com/watch?v=Xpy0v_dfUYE)
- Trailer 2: [YouTube](https://www.youtube.com/watch?v=66G8FzerdJo)

## Thanks

My sincere thanks to the EBS production team for creating the opportunity to raise a meaningful question and for thinking it through with us.

Thanks also to Dr. Cheol H. Jeong of Markr AI, who founded NomaDamas and helped design the agent, and to Jeffrey Kim, DoYun Ha, Bobb (Byoungwook) Kim, Hojin Yang, Yongbin Choi, and DongGeon Han for sharing their energy and helping me keep taking on challenges.

How do you verify the answers AI gives you?
