---
title: PCA (Principal Component Analysis)
pubDatetime: 2022-10-23 06:59:41.695000+00:00
description: What is PCA?
category: Data & ML
tags: []
language: en
translationOf: pcaprinciple-component-analysis
translationStatus: approved
draft: false
velogSeries:
- Classical machine learning
---

![](/images/velog/b92632e847c756c7.png)


# What is PCA?
- PCA is one of the dimensionality reduction techniques. It reduces the dimensions of multiple features while preserving the properties of the original data, allowing us to identify trends among features and create principal components.


Principal component: A new variable created by combining existing variables, with no correlation to one another


# Background
High-dimensional data is difficult to analyze because it is challenging to compute and visualize. 


Therefore, it is necessary to reduce the dimensionality of the data while preserving the distribution of the original data as much as possible. This is called dimensionality reduction.


Of course, it is possible to select and use data from only some of the necessary variables (feature selection), but since it is impossible to know in advance whether there are any close relationships among the variables, this approach cannot be considered to accurately reflect the distribution of the original data.



# Uses
- Identifying trends
- Simplifying complex features and using PCA on the new features
- Gaining insight (checking correlations between features, proportional relationships....)
- Used for feature reduction


ex) 
For example, using the iris dataset


1. Apply PCA to the sepal length and sepal width features to identify the tendency for sepal width to increase as sepal length increases
2. Replace the two features with the PCA result to perform feature reduction


**cf)**
- 'Sepal length' and 'sepal width' are merely two different forms in which the fundamental data called 'flower size' is expressed. Data that cannot be directly measured in this way but lies beneath the measured data and remains unseen is called a **latent variable**.



To gain an in-depth understanding of the mathematical model, I should study more linear algebra.


If you would like to follow along with an example, refer to the link: http://matrix.skku.ac.kr/math4ai-intro/W12/


If there is anything incorrect, please leave a comment


>
1. PCA image: http://matrix.skku.ac.kr/math4ai-intro/W12/
2. Content reference:http://matrix.skku.ac.kr/math4ai-intro/W12/
(There are good examples as well, so refer to the link)
