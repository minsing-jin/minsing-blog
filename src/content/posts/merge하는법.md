---
title: "Merge하는법"
pubDatetime: 2023-06-10T14:39:36.295Z
description: "퓨우우전~~"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/Merge하는법"
velogSeries: ["깃허브"]
---

# merge란?
새로판 브랜치의 내용을 main브랜치로 병합하는 과정임. 새로판 브랜치에서 수정을 통해서 메인 브랜치를 
![](/images/velog/045bbddfd5749c15.png)

[merge 내용참고](https://abled.tistory.com/15)

## github master branch main branch로 병합하는법
[방법](https://velog.io/@lecharl/master-main-%EA%B0%95%EC%A0%9C-%EB%B3%91%ED%95%A9)

- 주요 명령어들
 1. 브랜치 바꾸기(강제로 바꿀시 checkout **-f** main)
```
# git checkout main
```

 2. 브랜치 merge(대상 브랜치로 checkout으로 이동후 merge할 branch를 지정- 아래 example은 test branch를 main브랜치에 merge하는 상황)
```
# git merge test
```

-----------------

## merge도중 conflict의 경우
### 원인
- 병합 충돌은 파일의 동일한 줄을 변경하거나 한 사람이 파일을 편집하고 다른 사용자가 동일한 파일을 삭제할 때 발생합니다.
- merge 과정에서 파일의 이름이 같으면 충돌이 발생한다.
- 파일이 다르면 무조건 자동으로 합쳐준다.
- 파일이 같아도 수정한 부분이 다르다면 자동으로 합쳐준다. (버전관리를 사용하는 정말 중요한 이유중의 하나)
[해결방법](https://goddaehee.tistory.com/275)

#### 1. 직접수정
#### 2. 머지작업취소

---------------------------------------
## Tip)
-> merge후에는 로컬에서만 내용이 반영되어있으므로 따로 main브랜치의 내용을 push해줘야 github에 반영된다.

-> 웬만해선 github에서 merge하자!

----------------------------------------------------
## test하는법
[테스트는 이 링크의 방법대로 해보세유](https://velog.io/@katej927/Git-test-%EA%B3%BC%EC%A0%95-%EC%A0%95%EB%A6%AC )



![](/images/velog/1993a8597647e022.png)
>
짤 주소: http://luckcrow.egloos.com/2631202
