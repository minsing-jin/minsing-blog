---
title: Checking with a Boolean whether a specific value exists in a pandas DataFrame
pubDatetime: 2023-11-30 15:42:23.152000+00:00
description: Let's check whether a specific value exists in a pandas DataFrame using true or false.
category: Programming & CS
tags: []
language: en
translationOf: pandas-dataframe안에-특정-value가-있으면-boolean-판별
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/908f5f6450d08a97.png)


# Method 1
```python
if (self.qrels['score'] < 1).any():
	self.qrels['score'] = self.qrels.drop(self.qrels[self.qrels['score'] < 1].index)

```
`(self.qrels['score'] < 1).any()` is code that checks whether there is at least one row in a Pandas DataFrame that satisfies a specific condition.


Here, `self.qrels['score'] < 1` selects all rows in the `score` column of the `qrels` DataFrame whose values are less than 1. This part returns Boolean values: for each row, it returns `True` if the value in the `score` column is less than 1, and `False` otherwise..


`.any()` is a function that checks whether at least one of the returned Boolean values is `True`. In other words, it returns `True` if there is at least one row whose value in the `score` column is less than 1, and `False` otherwise.


Therefore, `(self.qrels['score'] < 1).any()` is code that checks whether there is at least one row in the `qrels` DataFrame whose value in the `score` column is less than 1. Using this code, you can easily check whether there are any rows whose value in the `score` column is less than 1.


# Method 2


```python
result = df.isin(['value1', 'value2', 'value3']).any().any()
```


The `any()` method is used with a Pandas DataFrame to check whether all the elements in the data frame are true or false.


When the `any()` method is used once, it checks whether each column is true or false. In other words, it returns `True` if at least one element in each column is true, and `False` if all elements are false.


Therefore, using `any().any()` returns `True` if at least one element in the entire data frame is true, and `False` if all elements are false. This is useful for checking whether all elements in a data frame satisfy a specific condition.
