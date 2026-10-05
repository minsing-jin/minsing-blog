---
title: "add/push-commit/pull-fetch에 대해서"
pubDatetime: 2023-06-09T14:03:45.788Z
description: "개념정리"
category: "깃허브"
canonicalURL: "https://velog.io/@minsing-jin/addPush-commitpull에-대해서"
velogSeries: ["깃허브"]
---

# pull / push란
git 의 repository 에서 받아오는걸 pull 로 당겨온다라고 하고 

로컬에 있는 코드를 원격으로 올리는 작업을 push라고 한다.

 
여기서 push를 하기 위해서는 add와 commit의 작업이 필요한데 이작업들의 차이점을 알아볼 것이다.

 --------------------------------------------
#  local vs remote

먼저 git을 이해하기 위해서는 local repository 와 remote repository  이 두개를 알아야한다.

원격 저장소를 remote라고 하고 내 피시에 있는것을 local이라고 한다.

 -------------------------
 
#  add란

local에서 올리기 위해 올릴 파일들을 리스트업 하는 작업을 git add 라고 한다.

--------------------------------------

# commit  vs push

그리고 add된 파일들을 local repository에 변경 작업 하는것을 commit 이라고 하고 메세지를 추가할수 있다.

그리고 local 에서 원격으로 보내는것을 push 작업이라고 한다.

-------------------------------

# 용어 정리
![](/images/velog/5b07cb7ce559cf23.png)
- add
다음 변경을 기록할 때까지 변경분을 모아놓기 위해서 사용합니다.
따라서, git commit 명령어를 통해 명시적으로 기록을 남기기 전까지는 아무리 git add 명령어를 많이 실행해도 Git 저장소의 변경 이력에는 어떤 영향도 주지 않습니다.
- commit : 변경된 사항 **로컬 저장소**에 기록 ex) 내 컴퓨터
- push : 변경된 사항 **원격 저장소**에 기록 ex) github


### Status
git add 명령어를 사용할 때, 항상 함께 사용하게 되는 명령어가 git status 입니다.
git status 는 작업 디렉토리(working directory)와 스테이징 영역(staging area)의 상태를 확인하기 위해서 사용합니다.


### Staging Area
git add 명령어를 사용할 때 반드시 숙지해야하는 개념이 바로 스테이징 영역(staging area)입니다.
스테이징 영역은 작업 디렉토리와 Git 저장소의 변경 이력 사이에 징검다리 역할을 함
git add 명령어를 사용하면 현재 작업 디렉토리에 있는 모든 또는 일부 변경 내용을 스테이징 영역으로 이동시킬 수 있습니다.
작업 디렉토리와 스테이징을 구분하면 변경 이력을 남길 때 작업 디렉토리에 있는 변경 내용을 한 번에 몽땅 기록하지 않고, 조금씩 나누어서 기록할 수 있다는 장점이 있음

-----------------------------------
# pull vs fetch
마치 commit과 push의 차이와 같다.
둘다 원격저장소의 내용을 가져오는데 사용됩니다.

#### fetch
fetch는 원격저장소에서 파일을 병합하기 전에 병합을 할지 말지 확인을 할수 있는 명령어 입니다.

#### pull
원격저장소에 있는 변경사항들을 로컬저장소로 가져와 합치는 명령어입니다.
fetch랑 다르게 로컬디렉로리에 변경내용을 병합합니다.

#### fetch vs pull
fetch는 가져온 변경내용을 로컬에 영향을 미치지 않으며, 병합하기전에 확인하는 용도로 사용하는 것이 좋습니다.
pull은 가져온 변경내용을 로컬에 병합합니다. 하지만 로컬에서 작업하다가 변경된 내용을 pull할 경우 충돌이 일어날 수 있습니다.

[참고 사이트 및 예제](https://chaeyoung2.tistory.com/43)

-----------------
# pull request
깃허브(Pull Request)란, 다른 사용자가 작성한 저장소에서 변경 사항을 병합(merge)하기 위한 요청을 의미합니다


--------------------
여기 GOAT(Greatest Of All Time) 성수형님이 올린 github 실습을 따라해보라구~~
[네이스한 설명](https://github.com/minsing-jin/Git-Guide)
[git 간편 안내서](http://rogerdudler.github.io/git-guide/index.ko.html)
> 참고문헌
https://velog.io/@termblur/git-add-commit-push-%EC%B0%A8%EC%9D%B4
https://thenicesj.tistory.com/506
[pull vs fetch](https://chaeyoung2.tistory.com/43)
