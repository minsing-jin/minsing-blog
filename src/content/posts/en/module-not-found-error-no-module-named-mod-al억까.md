---
title: 'ModuleNotFoundError: No module named ''modAL''

  Unfair nonsense'
pubDatetime: 2024-09-13 08:29:02.558000+00:00
description: Uninstall and reinstall
category: Programming & CS
tags: []
language: en
translationOf: module-not-found-error-no-module-named-mod-al억까
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

![](/images/velog/4ac45f0f103e7e81.png)


# Problem
After having Modal Cloud install everything in requirement txt, a ridiculous issue suddenly occurred


# Solution
## Solution 1
The packages seem to be conflicting, so uninstall them and install them again


```python
pip uninstall modal
pip3 uninstall modAL-python
```



```python
pip install modal
pip3 install modAL-python
```



## Solution 2
Check whether the virtual environment is connected—the interpreter



## Solution 3
It is a Python interpreter issue. Remove all Python files and interpreters installed via brew
```
sudo rm -rf /Library/Frameworks/Python.framework/Versions/3.12
sudo rm -f /usr/local/bin/python3.12
sudo rm -f /usr/local/bin/pip3.12

```
