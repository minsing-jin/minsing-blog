---
title: Design Process (feat. Retrospective on the KPMG Ideathon)
pubDatetime: 2024-04-04 06:13:50.604000+00:00
description: Agile~
category: Founder Notes
tags: []
language: en
translationOf: design-process
translationStatus: approved
draft: false
velogSeries:
- About Minsing
---

# Applying Agile to AI Projects 
AI projects can be difficult to manage effectively using traditional project management methods because of their complexity and uncertainty. Accordingly, it is necessary to apply the Agile philosophy to respond flexibly to rapidly changing technologies and achieve optimal results through continuous learning and improvement. However, although an AI project is something of a cousin to a traditional software project, applying the approach used to operate software projects directly to AI projects will result in failure to implement Agile. Through the seven Agile best practices introduced on the datascience site (https://www.datascience-pm.com/agile-ai/), we will explore how to use Agile development methodologies in the context of AI projects. 


## Why It Is Necessary
The reason for adopting an Agile approach for AI is to experience failure quickly and learn from it. Many companies and data scientists believe that adding predictive capabilities is valuable only if it succeeds in the short term, but this is unrealistic. This is because the iterative approach is rooted in the scientific method of formulating hypotheses and validating theories. Not every theory or prediction proves to be true.
First, we must focus on the right business problem. It is difficult to identify a business case in which an AI solution can bring about a significant transformation for the business. The cost of collecting, cleaning, and storing data may be greater than the cost of solving the modeling problem.
Second, in some use cases, existing data may not contain the essential signals needed for modeling efforts. Above all, the important thing is to make an effort to model as many possible actions as quickly as possible. Business leaders should formulate various hypotheses and enable their teams to try each modeling experiment.
For example, in the Spectra Premium project, a large Canadian automotive parts manufacturer, the initial modeling attempts were disappointing. However, by examining the data more deeply and trying different approaches, the team was able to raise overall accuracy to more than 90%.
Unlike software engineering teams, data science teams cannot guarantee their modeling results. Every data science exercise begins with a hypothesis, and sometimes it is not possible to reject the null hypothesis.
The more quickly a team iterates through experiments and tests hypotheses, the more likely it is to achieve the remarkable results that AI can provide for a business. Flexibility and a willingness to change play an important role in the success of AI projects.


## 1. Staying True to Agile's Foundational Principles
Agile is not about adhering to a prescribed process. Rather, it is a philosophy that supports teams in managing themselves, learning, adapting, and contributing. All team members must first understand the principles toward which the team is striving. Like the Agile Manifesto, there are four initial declarations and twelve principles, which provide a starting point for incorporating the Agile philosophy into AI projects.
![](/images/velog/12d2d1f8d1c5a58e.png)



## 2. Layering Frameworks Built with Agile
Many teams try to adopt Agile frameworks, but they begin without sufficiently understanding their essence or importance. This is a common problem, especially among teams trying to apply software development methods to artificial intelligence projects.


Rather than applying an Agile framework simply "to practice Agile," teams should understand Agile's basic principles and choose or create a framework based on them. There are various options, including Scrum, Kanban, Data-Driven Scrum, or a customized framework suited to the characteristics of the team. However, regardless of which one is chosen, simply applying a framework does not make a team Agile. Instead, these approaches should be regarded as means of supporting the journey toward Agile, so the team must understand the nature of the AI project, the team's tendencies, and the personalities of its members, and **work toward fitting the most optimized Agile framework for the team.**


## 3. Collaboration Across Departments
Each AI project spans multiple disciplines. To implement Agile effectively, an AI team should be composed of diverse members who can comprehensively understand both the technical and business contexts. For more details, refer to the Data Science Roles Guide.


## 4. Building a Minimum Viable AI (MVAI)
To reduce complexity, increase development speed, and maximize learning in the early stages of a project, teams should strive to deliver a reduced-scale but valuable AI solution as quickly as possible. Broken down further, MVAI (the minimum viable product in data science, also known as an MVP) is:
- Minimal - Enables the team to deliver a solution quickly.
- Valuable - Enables stakeholders to address their core requirements.
- Artificial Intelligence - Mimics human intelligence.


## 5. Improving the Model Incrementally
The first model we create may not be perfect. In most situations, this is not a problem. If we try to create the "best possible model," it may take too long to deliver anything. Instead, we should follow the Agile principle of starting with a basic solution and continually improving it.
We must think creatively. Some teams deliver a basic ML model. Others begin with a heuristic (business rules) solution. Still others may begin with a person providing the answers behind the scenes (the Wizard of Oz approach). We should deploy this initial solution, collect real-world data, and improve the approach based on user interactions. Over time, these approaches develop into more accurate and effective AI implementations.


## 6. Measuring Progress
Agile AI is both a process and a journey. Without effectively measuring performance, it is difficult to determine where we are on this journey. This includes many model performance metrics that data scientists may be inclined to overlook, such as recall, precision, or RSME, but process metrics such as business KPIs, stakeholder and team happiness, and cycle time are also important to examine. Using a variety of data science project metrics provides a deeper understanding of where the project currently stands and how it is progressing.


## 7. Learning Quickly and Effectively
Learning is a fundamental element running through Agile, artificial intelligence, and professional development. In particular, Agile centers on practices that help teams learn and respond quickly. Similarly, artificial intelligence is built on computer systems that learn through experience (machine learning). To become an effective practitioner in these areas, we must likewise focus on learning. The following are resources for applying Agile.
- Scrum in AI - This book by Paolo Sammicheli covers many of the concepts explored in this post and places particular emphasis on the use of Scrum in AI initiatives.(https://www.scrum-ai.com/)
- Agile AI - This O'Reilly book covers the processes and tools AI teams use to improve agility.(https://www.oreilly.com/library/view/agile-ai/9781492074984/ch01.html)


-------------
# An Agile Case from Silicon Valley - Apple


Apple primarily uses Scrum, an Agile software development methodology, for its software development projects. Scrum is a popular Agile framework that focuses on iterative and incremental development while emphasizing collaboration, flexibility, and the delivery of high-quality software. Scrum includes the following key elements:
1. Cross-functional teams: Apple forms cross-functional teams composed of developers, designers, testers, and other necessary roles to work collaboratively on software projects.
2. Sprints: Development work is divided into time-boxed iterations called sprints, which typically last one to four weeks. Each sprint focuses on delivering a potentially shippable product increment.
3. Product backlog: The product backlog contains a prioritized list of features, improvements, and bug fixes and serves as the primary source of work for the development team. This list is continuously refined and adjusted throughout the project.
4. Sprint planning: At the beginning of each sprint, the team selects a set of items to work on from the product backlog. They define the work required to complete each item and estimate the effort needed.
5. Daily stand-up meetings: The team holds daily stand-up meetings, also known as daily Scrums, to synchronize activities, discuss progress, and identify obstacles. The meetings are generally short and focused.
6. Sprint review: At the end of each sprint, the team conducts a sprint review to demonstrate completed work to stakeholders, gather feedback, and make necessary adjustments to the product backlog.
7. Sprint retrospective: The team holds a retrospective to look back on the sprint and identify opportunities for improvement. This meeting discusses what went well, what could be improved, and action items for future sprints.
Apple's Agile implementation, including Scrum, enables flexibility, collaboration, and the rapid delivery of high-quality software. This allows Apple to iterate quickly, respond to customer feedback, and adapt to changing market needs while focusing on providing seamless user experiences across its various software products and services.



# Conclusion
Rather than insisting on any one approach, such as Agile or Scrum, we should lead projects flexibly by considering various factors, including the nature of the project and the team's tendencies. Based on my own experience, research, and study, there is **no single right answer** for the design process used to carry out a team project. We simply have to keep searching.
The parts we can control are bringing together people who are self-learning, self-driven, and self-motivated, and developing a rhythm and harmony among them.


A Google engineering director also pointed out the shortcomings of Agile's short-term planning and said that it should be applied flexibly.
(https://www.quora.com/Why-do-some-developers-at-strong-companies-like-Google-consider-Agile-development-to-be-nonsense/answer/David-Jeske?share=1)



---------------
# [Extra]


# Retrospective on My Team Project (feat. KPMG Ideathon)
## Why did I do it?
I participated in this competition to recruit team members who shared the same goals, conduct various experiments for leading a team and develop my abilities, and design a system. I also wanted to develop my ability to create ideas.


## What I Learned from the Project After Learning About the Design Process
My consideration of efficient team operations began at the KPMG Ideathon after completing my military service. The topic was improving work efficiency using generative AI, and our team created a facilitation bot to optimize meetings. There were many factors that could make meetings extremely inefficient: going far off the agenda, becoming emotionally heated, discussing topics unrelated to the core issue, team members not being well prepared for the meeting, and deciding who should participate. These concerns were also connected to efficient team operations. To build the team, I contacted people who were interested in generative AI through the College of Software Convergence portfolio site, while also researching GitHub and blogs. I had many concerns about operating the team from a leadership position after bringing together senior students whose skills were far superior to mine.


I believe the weapons I could possess were the drive to carry out and manage projects and build teams, as well as the tenacity to lead a project through to the end even if I were left alone. To further optimize these abilities, I reflected every day after working on team projects and built a system by asking senior developers around me, industry professionals, and PhDs for advice. 


However, when building the team, I recruited one or two acquaintances simply to meet the number of participants required for the competition, which resulted in the team being divided into four hardworking members and two others. The problem was that even though there were four self-learning, self-driven, and self-motivated members, the other two damaged the team's atmosphere. To successfully complete the project, it would have been right to remove these two members, but that was difficult because of the competition application, and because they were acquaintances, there were many times when I did not have the confidence to give them harsh criticism. Even when I did criticize them, the two members who harmed the team atmosphere strongly pushed back, leading to many major and minor arguments and consuming a great deal of mental and time resources. I realized that I was still lacking when it came to relationships with people while leading a project.


## What I Learned from the Project After Learning About the Design Process
![](/images/velog/2d53562069a143f2.png)



Not only in ideathons but also in team projects, as seen in Principle 5 of the 12 Principles of the Agile Manifesto and in the Manifesto itself, I ultimately felt that **people are the key element that leads a project to success.** I also came to believe that there is no absolute development methodology for leading a project, that even seemingly excellent Agile methodologies have limitations due to short-term planning, and that there can be various methodologies for optimizing a team's performance depending on the team's characteristics and the nature of the project. Ultimately, I think we need the insight and experience to operate an efficient team, supported by the necessary knowledge. 


I developed a desire to work on projects with team members who can practice Agile together. To do this, I must first become a self-learning, self-driven, and self-motivated developer. .



> References and sources
1. 7 Aigle Ai Best Practices: https://www.datascience-pm.com/agile-ai/
2. 10 Best Generatice AI Tools for DevOps Teams in 2024: https://clickup.com/blog/ai-tools-for-devops/
3. scrumb: https://www.scrum.org/
4. Why Big Data Science and Analytics Projects Fail?: https://www.datascience-pm.com/project-failures/
5. Chapter1. Introduction: Agile AI Processes and Outcomes: https://www.oreilly.com/library/view/agile-ai/9781492074984/ch01.html
6. agile manifesto picture: Kyung Hee University Open Source SW Development Methods and Tools lecture materials (Professor Lee Seong-won)
