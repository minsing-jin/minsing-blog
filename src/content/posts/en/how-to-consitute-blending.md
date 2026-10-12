---
title: Blending
pubDatetime: 2022-11-06 14:50:59.664000+00:00
description: Delicious coffee blending—apparently the No. 1 algorithm in the Netflix prediction competition??
category: Data & ML
tags: []
language: en
translationOf: how-to-consitute-blending
translationStatus: approved
draft: false
velogSeries:
- Classical machine learning
---

I am struggling in a military internet café for the Jeju Island traffic volume prediction competition. I wanted to apply as many of the various techniques I had learned as possible. Since the computers at the military internet café can run models only within a limited amount of time, I wanted to try blending, which is somewhat less time-consuming than stacking.



# What is blending?


It is one of the ensemble techniques: several weak models are trained on the train data, and predictions are made for the validation set and test set. After **respectively** concatenating the multiple validation prediction sets and test prediction sets, the concatenated validation prediction set and y_val are used to train a powerful meta-model. The meta-model then makes predictions using the previously concatenated test prediction sets.


# How do you do it?
## Structure
![](/images/velog/cb6dbf8898348cce.png)


## Procedure
1. Split the train set into a training set and a validation set using a train-test split
2. Train several weak models using the train data
3. Use the trained models to predict the validation set and test set
4. **Respectively** concatenate the multiple validation prediction sets and test prediction sets.


cf) 
1 - Elements for val when concatenating (the previously split X_val and the byproducts that were predicted)
2 - Elements for test when concatenating (the previously split test and the byproducts that were predicted)
<br/>
5. Fit the concatenated validation set and y_val to a powerful meta-model.
6. Use the meta-model to predict the previously concatenated test prediction sets.


### Nice explanations
https://slowsteadystat.tistory.com/21
https://3months.tistory.com/486
-> In the example code from the second link, it seems that y_test for the score was separated into x_test and y_test from the test set when the train set was initially divided into a validation set and a test set in order to calculate the score.


>
Source:
1. Blending structure image: https://slowsteadystat.tistory.com/21
