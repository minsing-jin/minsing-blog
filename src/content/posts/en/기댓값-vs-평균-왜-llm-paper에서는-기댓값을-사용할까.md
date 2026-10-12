---
title: 'Expected Value vs. Mean: Why Do LLM Papers Use Expected Value?'
pubDatetime: 2025-03-03 07:01:54.057000+00:00
description: 'Expected value: a value calculated based on probabilities to predict the future; a prediction of possible future outcomes (induction—judgment predicting the future based on experience, observation, and evidence) Mean: a value calculated from existing data from a frequentist perspective; a definite value based on data that has already been observed (deduction—based on data that is already known'
category: Programming & CS
tags: []
language: en
translationOf: 기댓값-vs-평균-왜-llm-paper에서는-기댓값을-사용할까
translationStatus: approved
draft: false
velogSeries:
- Background Knowledge
---

![](/images/velog/9309ed466516eb7f.png)


# Expected Value vs. Mean
- Expected value: a value calculated based on probabilities to predict the future; a prediction of possible future outcomes (inductive—future predictions based on experience/observation/evidence)


- Mean: a value calculated from existing data from a frequentist perspective; a definite value based on data that has already been observed (deductive—judgment based on data that is already known)


Why do twist smc and LLMs use expected values? Aren’t the mean and expected value the same thing?
LLMs use expected values because they take a Bayesian perspective, continually updating the prior based on uncertain quantities using prior information.




# Is this the difference in perspective between Gaussian and Bayesian approaches?! 


Gaussian: analyzing phenomena and drawing conclusions from observed values such as frequencies (normal distribution)
Bayesian: predicting the future based on empirical probabilities (probability)
