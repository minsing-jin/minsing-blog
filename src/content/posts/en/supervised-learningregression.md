---
title: Supervised Learning (Regression)
pubDatetime: 2022-10-09 10:49:30.692000+00:00
description: Let's learn about regression.
category: Data & ML
tags: []
language: en
translationOf: supervised-learningregression
translationStatus: approved
draft: false
velogSeries:
- Classical machine learning
---

# Regression


>
## What is Regression?


Find the **model that best explains the data** and predict future outcomes based on input values


𝑌≈𝛽0+𝛽1𝑋 -> Let’s find the appropriate 𝜷𝟎, 𝜷𝟏 values! (There are various methods, such as gradient descent)


![](/images/velog/7e4cd8abb3ec88e1.png)


<br/>
<br/>
<br/>


>
## Types of Regression


### Simple Linear Regression


- Assume the model that explains the data has a **linear form**

	𝑌≈𝛽0+𝛽1𝑋


#### cf) Which model performs well? (using a loss function)
- The sum of the differences between the actual and predicted values -> exceptions exist
![출처](/images/velog/3dcc5c72bdacbf22.png)


- Compare them using the **sum of the squared differences between the actual and predicted values**!


![](/images/velog/02f0995d9f9c5e9f.png)


- Adjust this value and move in the direction that reduces the loss function’s magnitude


**Methods**


1) Gradient descent
- Continuously update the 𝛽0, 𝛽1 values so that the loss function value decreases
-> Randomly initialize the 𝛽0, 𝛽1 values
-> Calculate the gradient values to determine how to reduce the 𝛽0, 𝛽1 values
-> Update the 𝛽0, 𝛽1 values using the gradient values
-> Repeat until the loss value and gradient value reach their minimums
Content reference: Military Service Members’ AI/SW Competency Enhancement Program / Intermediate Project Course
https://military22.elice.io/courses/26526/lectures/204993/materials/13/list 


2) Normal equation (least squares)
3) Brute-force search
4) .....


<br/>
<br/>
<br/>


### Multiple Linear Regression
- Predict using multiple features

	𝑌≈𝛽0+𝛽1𝑋1+𝛽2𝑋2+𝛽3𝑋3+⋯++𝛽𝑀𝑋𝑀


#### cf) Loss Function
- Likewise, it is defined as the **sum of the squared differences between the input values and the actual values**
-> Likewise, make the lossFunction smaller by adjusting the slope and y-intercept.
-> Use gradient descent


#### Characteristics


- Can identify the correlation between multiple input values and the outcome values
- Can determine how each input value affects the outcome value
- **When the correlation between multiple input values is high**, the reliability of the results may be lost
-> A more in-depth understanding of linear relationships
<br/>
<br/>
<br/>


## Regression evaluation


The **degree to which the goal has been achieved** must be evaluated. Use evaluation methods based on the **difference** between the actual values and the values predicted by the model


ex) 𝑅𝑆𝑆,𝑀𝑆𝐸,𝑀𝐴𝐸,𝑀𝐴𝑃𝐸,𝑅^𝟐


- Examine the accuracy for the train set (train_Y, pred_y) and the accuracy for the test set (test_Y, pred_y).
- Look up the advantages and disadvantages of each separately on Google / **which one to use in which situation**



>
References
1. Regression illustration: https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=mykepzzang&logNo=220933439872
2. Content reference [Military Service Members’ AI/SW Competency Enhancement Program / Intermediate Project Course]: https://military22.elice.io/courses/26526/lectures/204993/materials/13/list
