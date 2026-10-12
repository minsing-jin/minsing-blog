---
title: 'Pandas: How to Drop Rows that Contain a Specific Value without drop() method and for loop?'
pubDatetime: 2023-11-23 13:16:42.950000+00:00
description: Thanks a looooot, Pandas, for letting me avoid writing an algorithm—you little punk~ drop() the beat~
category: Programming & CS
tags: []
language: en
translationOf: pandas-how-to-drop-rows-that-contain-a-specific-value
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/9f78c033a08b3d5e.png)


How can I quickly remove rows containing a specific value without using a for loop?


drop() can become slower as the dataframe grows, so this is another method I found.


This method is called the boolean mask technique.


```python
import pandas as pd

# 랜덤 데이터프레임 생성
df = pd.DataFrame({
   '무': [1, 2, 3, 4, 5],
   '야': [5, 15, 10, 20, 15],
   '호': [10, 15, 10, 20, 15],
   '테': [10, 15, 10, 20, 15],
   '스': [10, 15, 10, 20, 15]
})

# 삭제하려는 값들을 포함하는 리스트
values = [2, 4, 6, 8, 10]

# 리스트의 값들이 데이터프레임의 어떤 열에 있는지 확인
mask = df.isin(values)

# 리스트의 값들이 있는 행을 삭제
df = df[~mask.any(axis=1)]

print(df)
```


### Brief Code Explanation


1. Create a values list containing the values you want to delete.
2. Use the df.isin() method to check whether each element of the df dataframe matches one of the values in the list. It returns `True` for matches and `False` otherwise, converting the result into a dataframe and storing it in the mask variable.


![](/images/velog/12b6d7b5fc67b9df.png)


3. Then, negate this mask to delete the rows containing the values in the list. To do this, use the `~` operator to invert the values in the mask. This makes the rows containing the values in the list `False`, while the other rows become `True`.


4. Finally, use the `any(axis=1)` function to check whether at least one element is `True` for each row. This deletes the rows containing the values in the list.


[Detailed Explanation 1](https://www.statology.org/pandas-drop-rows-with-value/)


[Useful Reference Site](https://stackoverflow.com/questions/41934584/how-to-drop-rows-by-list-in-pandas)
