---
title: "Dictionary.pop(Key)"
pubDatetime: 2023-10-17T05:44:06.495Z
description: "pop"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/Dictionary.popKey"
velogSeries: ["악당 개념패거리들 정리"]
---

# 헷갈렸던 부분
- dictionary를 pop 했을때 파라미터로 key값을 받는다면 value만 남을것이라는 말도 안되는 생각을 가지고 있었음
-> 정답: 그 dictionary의 key-value가 통째로 없어진다.

# Dictionary pop을 한다면?
- 그 key-value pairs는 없어진다
- pop할때 새로운 변수에 assign을 한다면 value가 assign되고, 그 딕셔너리의 key value pairs는 사라진다.

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
The syntax of pop() method is
```python
dictionary.pop(key[, default])
```

pop() method takes two parameters:

- key - key which is to be searched for removal
- default - default value which is to be returned when the key is not in the dictionary


# Return value from pop()

The pop() method returns:

If key is found - removed/popped element from the dictionary
If key is not found - value specified as the second argument (default)
If key is not found and default argument is not specified - KeyError exception is raised

> 
출처: https://www.programiz.com/python-programming/methods/dictionary/pop
