---
title: Overfitting with k-fold cross-validation
pubDatetime: 2024-12-05 03:30:12.928000+00:00
description: Hyperparameter tuning and CV overfitting
category: Data & ML
tags: []
language: en
translationOf: k-fold-cross-validation에-대해서-overfitting-되는것
translationStatus: approved
draft: false
velogSeries:
- Classical machine learning
---

![](/images/velog/ded43d34c10b5baf.png)


Since this is an experimental experience, please elaborate if there are any incorrect parts in my opinions.


# Motivation
I am working on modeling to estimate missing values. 


I am tuning hyperparameters, and in K-fold CV, I increased n_trial to around 1000 and proceeded with tuning in the direction of improving performance on k-fold CV. However, performance on the test set was poor; instead, the model with the default parameters, without hyperparameter tuning, performed better on the test set. 


# Interpretation
This can be interpreted as meaning that the hyperparameter-optimized model has lower generalizability. Therefore, it can be seen that excessive optimization of performance on k-fold CV may instead reduce the model's generalizability due to overfitting to the data used for CV.


# Conclusion
I realized that early stopping exists for a reason.


Even if test performance is too good, overfitting or data leakage should be suspected.
