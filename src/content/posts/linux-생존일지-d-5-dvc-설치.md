---
title: "linux 생존일지 D-5 (DVC (DataVersionControl) 설치)"
pubDatetime: 2024-05-24T17:00:16.635Z
description: "데이터 버전컨트롤"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/linux-생존일지-D-5-dvc-설치"
velogSeries: ["linux 생존일지"]
---

# 🍳 동기
텍스트 마이닝 프로젝트를 진행하면서 텍스트 분석 결과물들은 꾸준히 prompt engineering을 통해 변화되며 중간에 결과물들의 json 구조가 바뀌어야하는 상황이 온다면 이전 결과물 csv파일들을 참고하여 prompt engineering을 진행해야했다. 또한 이를 시각화 하기 위해서는 제대로 data들의 version들을 관리하지 못한다면 과거의 데이터들을 실수로 시각화에 반영하거나 시각화를 해야할때 어떤 데이터로 시각화를 해야할지 헷갈리는 상황을 많이 겪었다. 마찬가지로 캐글 혹은 데이콘의 classical machine learning 대회에 참여할때도 어떤 데이터가 최종 결과물이고, 이전 결과물과는 어떠한 차이점이 있는지 비교할때 버전을 관리하지 않고, 파일들의 구조를 미리 잘 짜놓지 않아서 불필요한 시간이 소모되는 경우가 많았다. 이에 처음 사용해보는 DVC 설치를 통해 나의 문제점을 해결해보고자 한다.

# 🍳 튜토리얼
본 튜토리얼은 DVC의 공식 문서인 [이 링크](https://dvc.org/doc/install/linux)에서 참고했다.

나는 repository로부터 설치하는 방식으로 진행했다.

다음의 명령어는 한줄씩 입력해야한다.
```
sudo wget \
       https://dvc.org/deb/dvc.list \
       -O /etc/apt/sources.list.d/dvc.list
```

여기서부터 쭉 설치를 진행하다보면
```
wget -qO - https://dvc.org/deb/iterative.asc | gpg --dearmor > packages.iterative.gpg
sudo install -o root -g root -m 644 packages.iterative.gpg /etc/apt/trusted.gpg.d/
rm -f packages.iterative.gpg
sudo apt update
sudo apt install dvc
```

![](/images/velog/72e1cc7f10b11d32.png)

이렇게 version이 뜨면서 잘 설치되어있는것을 확인할 수 있다.

## 간단하게 사용해보기
### 초기화
dvc는 git과 연동해서 사용하기때문에 git으로 초기화 해야하고, dvc또한 git처럼 똑같이 초기화 해준다.

![](/images/velog/f6418b5da78c254b.png)

### 버전관리 테스트 데이터 등록
깃과 같이 data들도 dvc를 통해 데이터를 등록할 수 있다.

아래의 과정은 test file을 생성후 dvc로 등록한다.

![](/images/velog/cd36be0750f99d72.png)

위와 같이 `opensw_test.txt.dvc`가 생성되고 이제 git에서는 `opensw_test.txt`이 아닌 `opensw_test.txt.dvc`만을 관리한다. dvc에서는 자동적으로 txt파일이 gitignore에 등록된다. 지금은 작은 크기의 파일만 등록했지만 추후에는 실제로 큰 데이터와 폴더를 등록할수 있다.

git으로 .dev파일과 .gitignore파일을 commit 해주면 끝!
![](/images/velog/836863f2fadaead3.png)


# 🍳 느낀점
ai프로젝트에서 특히나 협업을 할시에 version control의 중요성은 더욱 커진다. ML 파이프라인에 사용하는 데이터와 모델의 레지스트리 관리는 필수이다. 연구를 통해 얻은 ai모델의 결과는 재현성을 보장해야하기때문에 모델과 데이터들의 버전을 관리해 재현가능한 결과를 만들수 있게끔 할수 있다.
이전에는 모델들과 데이터들을 바탕화면에 더럽게 일일이 저장하고, 이게 어떤 버전인지 힘들게 확인했지만 이제는 DVC를 활용하여 깃허브처럼 모델과 데이터들의 version들을 관리해야겠다.

> 참고문헌
1. https://devocean.sk.com/blog/techBoardDetail.do?ID=165685&boardType=techBlog
2. 버전관리 데이터등록 참고: https://minimin2.tistory.com/185
