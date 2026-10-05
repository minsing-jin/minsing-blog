---
title: "OS로 파일 불러오기"
pubDatetime: 2023-10-27T07:10:39.662Z
description: "이 코드의 의미를 당최 모르겠다. 상대경로를 file_path에 담아야하는데 어떡하노?네이스한 설명"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/OS로-파일-불러오기"
velogSeries: ["악당 개념패거리들 정리"]
---

```python
root_dir = pathlib.PurePath(os.path.dirname(os.path.realpath(__file__))).parent.parent.parent
file_path = os.path.join(root_dir, "resources", "sample_test_document.txt")
```
이 코드의 의미를 당최 모르겠다. 상대경로를 file_path에 담아야하는데 어떡하노?


[네이스한 설명](https://blockdmask.tistory.com/578)

[네이스한 설명](https://aigong.tistory.com/193)
