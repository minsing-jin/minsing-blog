---
title: (NumPy Broadcasting) Why do the values come out strange when scoring in NumPy?
pubDatetime: 2024-11-20 14:59:23.044000+00:00
description: In structured data modeling, there was a very large difference between scoring the entire dataset and scoring by stratification when scoring. Calculation error. One shape is a pandas Series, and the other is a pandas DataFrame. The difference between a 2D array and a 1D
category: Programming & CS
tags: []
language: en
translationOf: numpy-브로드캐스팅-numpy에서-scoring할때-값이-이상하게-나온다
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

# Problem
- When scoring a structured data model, there was a very large difference between scoring the entire dataset and scoring by stratification
- Calculation error


# Cause
- One shape was a pandas Series and the other was a pandas DataFrame. This was the difference between a 2D array and a 1D array.
- When implementing SMAPE, the shapes of the ground truth (pandas Series) and prediction (pandas DataFrame) data were different
-> (n,) and (n,1)


- When using NumPy in SMAPE, broadcasting automatically expanded the dimensions, resulting in an incorrect calculation
- When mixing 1D and 2D arrays, broadcasting caused unintended calculations


# Solution
- Flatten the DataFrame values and proceed
