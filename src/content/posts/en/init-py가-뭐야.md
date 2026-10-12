---
title: What is __init__.py?
pubDatetime: 2023-10-11 05:58:27.409000+00:00
description: 'Why isn''t import working? / Why can''t I call the class even though I created it? (TypeError: ''class'' object is not callable)'
category: Programming & CS
tags: []
language: en
translationOf: init-py가-뭐야
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

While working on a Python project, I ran into an import error.
![](/images/velog/e5cbbf8012260292.png)


Additional unfair issue found on 10/13 -> The issue may occur when creating an instance rather than in the import section (the yellow-underlined part in the image below).
![](/images/velog/dba113246b1e4da3.png)


-> Similarly, you need to specify in the __init__.py file that the class I created is a module.


<br>


# Why does this happen?
**One-line summary: This problem occurs because the module BM25Reranker is not recognized as a package.**


The __init__.py file, which should indicate that the directory [RAGchain.reranker] is part of a package, must be present inside the directory. However, if the directories included in the package, such as BM25reranker, do not contain an __init__.py file, they will not be recognized as packages.


Also, in the following situation, the __init__.py file exists and the existing rerankers are present, but an error occurs because the newly created bm25 reranker has not been added to it.


In fact, even if only the file is added, the directory is automatically recognized as a package. However, in this case, where it is not recognized properly, define the module to import in __init__.py as follows.


# Solution
Define the module to import in __init__.py as follows.


```python
from RAGchain.reranker import BM25Reranker
```


The example image below should make this easier to understand.
![](/images/velog/620667cc713843b1.png)




# Additional note
If you define a variable in __init__.py, it becomes a variable shared throughout the package and can be imported and used by different modules.


> 
Starting with Python 3.3, a package is recognized even without an __init__.py file. However, it is recommended to create an __init__.py file for backward compatibility.





> References
1. https://dojang.io/mod/page/view.php?id=2450
2. https://passwd.tistory.com/entry/Python-initpy
