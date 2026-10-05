---
title: "ModuleNotFoundError: No module named 'modAL'\\n억까"
pubDatetime: 2024-09-13T08:29:02.558Z
description: "지웠다가 다시 깔기"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/ModuleNotFoundError-No-module-named-modAL억까"
velogSeries: ["악당 개념패거리들 정리"]
---

![](/images/velog/4ac45f0f103e7e81.png)

# 문제상황
requirement txt를 모달 클라우드에서 모두 설치하게 했더니 갑자기 억까 발생

# 해결
## 1번 해결방안
패키지끼리 꼬인것 같으니 지웠다가 다시 깔기

```python
pip uninstall modal
pip3 uninstall modAL-python
```


```python
pip install modal
pip3 install modAL-python
```

## 2번 해결방안
가상환경 연결 여부 확인하기 인터프리터


## 3번 해결방안
파이썬 인터프리터 이슈임. brew로 설치한 파이썬 모든 파일들과 인터프리터들 제거하기
```
sudo rm -rf /Library/Frameworks/Python.framework/Versions/3.12
sudo rm -f /usr/local/bin/python3.12
sudo rm -f /usr/local/bin/pip3.12

```
