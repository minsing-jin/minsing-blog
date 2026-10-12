---
title: Dictionary.pop(Key)
pubDatetime: 2023-10-17 05:44:06.495000+00:00
description: pop
category: Programming & CS
tags: []
language: en
translationOf: dictionarypopkey
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

# Confusing part
- I had the absurd thought that if you passed a key as a parameter when popping from a dictionary, only the value would remain
-> Correct answer: the dictionary's key-value pair is removed entirely.


# If you use Dictionary pop()?
- The key-value pairs disappear
- If you assign the result to a new variable when popping, the value is assigned, and the dictionary's key-value pairs disappear.


[ex)](https://www.programiz.com/python-programming/methods/dictionary/pop)
```python
# random sales dictionary
sales = { 'apple': 2, 'orange': 3, 'grapes': 4 }

element = sales.pop('apple')

print('The popped element is:', element)
print('The dictionary is:', sales)
```


**Output**
```python
The popped element is: 2
The dictionary is: {'orange': 3, 'grapes': 4}
```



# Syntax
Syntax of Dictionary pop()
The syntax of the pop() method is
```python
dictionary.pop(key[, default])
```


The pop() method takes two parameters:


- key - the key to be searched for removal
- default - the default value to be returned when the key is not in the dictionary



# Return value from pop()



The pop() method returns:


If the key is found - the removed/popped element from the dictionary
If the key is not found - the value specified as the second argument (default)
If the key is not found and the default argument is not specified - a KeyError exception is raised


> 
Source: https://www.programiz.com/python-programming/methods/dictionary/pop
