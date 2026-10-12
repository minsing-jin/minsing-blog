---
title: Data preprocessing
pubDatetime: 2022-10-09 08:06:46.521000+00:00
description: Data preprocessing process
category: Data & ML
tags: []
language: en
translationOf: data-preprocessing
translationStatus: approved
draft: false
velogSeries:
- Classical machine learning
---

# Data preprocessing


>
## Role of data preprocessing


1) **Data transformation (feature engineering)** into a form suitable for use as machine learning input
-> To train the model, the data must be transformed into appropriate numerical data.


2) Handling NAN/NULL (missing values) and outliers for **data cleaning**
-> Transforming the data into a form suitable for model training / the items above cannot be used for training


3) Train-test split




![](/images/velog/e27ff39cb9385a49.png)


--------------------------------------------------------------------------
>
## Methods for handling categorical variables


**Nominal data (norminal data)**


- Numerical mapping methods
	- Ordinal encoding
    - Label encoding
    - Binary encoding.....
![](/images/velog/c6dc4a641aab8753.png)

   
- Dummy technique
	- Using the dummy technique, each category is converted to 0 or 1 / new features are created
    - One-hot encoding
    - Dummy encoding (dummy encoding removes a duplicate category present in one-hot encoding.)
![](/images/velog/fb8089529fb2b481.png)


#### Link explaining the difference between one-hot and dummy encoding well
[one-hot encoding vs. dummy encoding]: https://towardsdatascience.com/encoding-categorical-variables-one-hot-vs-dummy-encoding-6d5b9c46e2db  




**Ordinal data**


• Converted by mapping to numerical values, but the differences in magnitude between numerical values can be customized


• The differences in magnitude can affect machine learning results


- Similarly, it is ordinal encoding, but the intervals between values can be adjusted


---------------------------------------------------------------------
>
## Methods for handling numerical variables


**Can be used directly as input values, but transformation is necessary to improve model performance**


>
### 1) Scaling


- A method of transforming the range and scale of variable values


- Used when there are differences in the ranges between variables (features)




#### Normalization
- A scaling technique that scales features with extremely large values to values between 0 and 1, since a feature containing very large values may affect another feature containing only smaller values


![](/images/velog/cdf766164abf7f2b.png)



#### Standardization
- A scaling method like normalization. The points will be plotted on a normal distribution curve.


![](/images/velog/0d34e7ace40399dc.png)


>
### 2) Categorization


- Used when the category is more important than the variable's value
ex) If the average test score is 54.63 (above average -> 1 / below average -> 0)


---------------------------------------------------------------------


>
## Missing value handling


### Methods
1) **Delete samples** containing NAN values
2) **Delete features** containing many missing values
3) **Replace with other values (mean/median/SimpleImputer/machine learning)**


[More diverse methods]: https://towardsdatascience.com/7-ways-to-handle-missing-values-in-machine-learning-1a6326adf79e


-------------------------------------------------------------------------------
>
## Outlier handling


- **Model performance** when outliers are present
- Generally **removed** during the data preprocessing process
- It is important to establish criteria for determining which values are outliers!


### Methods for determining outliers
1) Use statistical indicators (chi-square test, IQR indicator, etc.)
2) Examine the data distribution and determine them directly
3) Use machine learning techniques to classify outliers



-------------------------------------------------------------------------------
>
## Train-test split


- **Test data** not used for training is needed to evaluate the model
- Label data: Data to be predicted
- Feature data: Input values used to predict the label


**cf) Train-test split parameters**
1) random_state: When shuffling the sets, they are shuffled according to the given int value. When tuning hyperparameters, this value should be kept fixed to prevent the dataset from changing each time.


2) stratify: The default is None. This is a very important option when working with classification. If the stratify value is set to target, the ratio of each class is maintained in the train / validation sets. (This prevents the data from being distributed disproportionately to one side.) If this option is not specified when handling a classification problem, there may be a significant difference in performance.


3) test_size: Indicates the proportion of the test set. It is an option value opposite to the train_size option, and test_size is usually specified. 0.2 means that 20% of the entire dataset will be designated as the test (validation) set. The default value is 0.25.


<br/>
<br/>
<br/>


>  
- [Source of nominal data examples]:![업로드중..](blob:https://velog.io/cc38b629-5942-4f04-8194-5975b38c620a)
- Source of the nominal data numerical mapping / dummy technique image: 2022 Military Personnel SW/AI Competency Enhancement Program
https://military22.elice.io/courses/26526/lectures/204992/materials/12
- Normalization image source:https://www.wallstreetmojo.com/normalization-formula/
- Train-test split parameter explanation: https://teddylee777.github.io/scikit-learn/train-test-split
