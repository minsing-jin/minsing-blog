---
title: If a Problem Only Tells You That A and B Are Dependent, Without Giving the Intersection Probability or Conditional Probability
pubDatetime: 2025-01-30 07:06:42.013000+00:00
description: Before the LLM era, I had questions in high school but could not formulate them clearly, so I ended up lost in a maze. What should I do if a problem does not provide the probability of an intersection or a conditional probability, and only tells me that A and B are dependent without directly giving a conditional probability?
category: Programming & CS
tags: []
language: en
translationOf: 문제에서-a와-b가-종속적이라는-정보만-있고-교집합-확률이나-조건부-확률이-주어지지-않았다면
translationStatus: approved
draft: false
velogSeries:
- Background Knowledge
---

![](/images/velog/b1e48a7079fe588a.png)



## Problem Situation
Before the LLM era, I had questions in high school but could not formulate them clearly, so I ended up lost in a maze. What should I do if a problem does not provide the probability of an intersection or a conditional probability, and only tells me that A and B are dependent? 




### **Can the intersection probability of dependent events be found without additional information?**  


That's a good question! Let's look at **what to do if a problem only tells us that A and B are dependent, without providing the intersection probability or conditional probability**.  


---


### **1. Basic Problem Situation**
Let's assume that a problem provides only the following conditions.  
![](/images/velog/54d0b60ec68dd338.png)
 


In this case, **can we find the intersection probability P(A ∩ B)?**  


---


### **2. Why P(A ∩ B) Cannot Be Found Without Additional Information**
The formula we can use is:


![](/images/velog/00fb43595f1d6980.png)



However, **if we do not have P(A | B) or P(B | A), we cannot use this formula.**  
In other words, **it is impossible to calculate P(A ∩ B) without additional information.**  


💡 **By analogy**  
This is similar to trying to calculate "**the probability that two people are friends when one person is A and the other person is B**." We know that A and B influence each other (they are dependent), but **without knowing how much they influence each other (the conditional probability), we cannot determine the exact probability.**


---


### **3. Solution: Find Additional Information**
So what should we do in this situation?  
We need to obtain the following kinds of **additional information**.  


#### **(1) Look for clues in the problem that can be used to derive a conditional probability**  
- In some cases, **there may be hidden information in the problem.**  
- For example, if the problem includes a clue such as **"if A occurs, B is twice as likely to occur,"** we can convert it into a conditional probability.  


#### **(2) Use experimental data or statistical information**  
- In real life, it is often difficult to calculate an intersection probability directly.  
- Therefore, **we can collect data through experiments and then estimate the conditional probability using empirical probabilities.**  
- For example, we can analyze past data on the two events A and B to approximate P(A | B) or P(B | A).  


#### **(3) Use Bayes' theorem**  
- If **we know the prior probability P(B) and the probability P(B | A) that B occurs when A occurs,**  
![](/images/velog/f1ca6bdcfc660ee6.png)

  We can use the formula to **find the necessary conditional probability and then use it to determine the intersection probability.**  


---


### **4. Conclusion: The Probability Cannot Be Found Without Additional Information**
✔ **The information that A and B are dependent alone is not enough to find P(A ∩ B).**  
✔ **Additional information such as P(A | B) or P(B | A) is required.**  
✔ **You need to look for hidden clues in the problem, and you can also use experimental data or Bayes' theorem.**  


Do you understand it clearly now? 😊  
If you have any additional questions, feel free to ask anytime!
