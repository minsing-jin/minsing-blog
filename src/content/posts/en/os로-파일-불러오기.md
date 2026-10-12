---
title: Loading a File with the OS
pubDatetime: 2023-10-27 07:10:39.662000+00:00
description: I really don't understand what this code means. I need to put a relative path in file_path—what should I do? Nice explanation
category: Programming & CS
tags: []
language: en
translationOf: os로-파일-불러오기
translationStatus: approved
draft: false
velogSeries:
- 악당 개념패거리들 정리
---

```python
root_dir = pathlib.PurePath(os.path.dirname(os.path.realpath(__file__))).parent.parent.parent
file_path = os.path.join(root_dir, "resources", "sample_test_document.txt")
```
I really don't understand what this code means. I need to put a relative path in file_path—what should I do?



[Nice explanation](https://blockdmask.tistory.com/578)


[Nice explanation](https://aigong.tistory.com/193)
