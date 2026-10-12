---
title: Flattening
pubDatetime: 2023-11-17 06:53:17.059000+00:00
description: Misuse of list comprehension
category: Programming & CS
tags: []
language: en
translationOf: flatten하기
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/feaa43563f9d6b2b.png)


# Situation
I solved the task of flattening a pandas dataframe containing list elements into a list using list comprehension.
However, this abuses list comprehension and results in code that is much less readable.
```python
[passage for lst_passage in make_passages['passages'] for passage in lst_passage]
```


# Solutions
1. Use itertools
```python
import itertools

passages = list(itertools.chain.from_iterable(make_passages['passages']))
```
2. Unpacking (using *)
```python
passages = list(*passage for passage in make_passages['passages'])
```


3. Functions
```python
def flatten_list(nested_list):
   return [item for sublist in nested_list for item in sublist]

passages = flatten_list(make_passages['passages'])

```
