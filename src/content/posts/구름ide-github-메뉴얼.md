---
title: "구름ide github 메뉴얼"
pubDatetime: 2023-06-09T13:53:35.392Z
description: "깃허브 사용방법을 몰라서 태초마을로 간것에 대하여...."
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/구름ide-github-메뉴얼"
velogSeries: ["깃허브"]
---

# 동기
구름ide로 프로젝트를 하던중 계속해서 깃허브 커밋과정에서 문제가 생겨 파일이 깨지고, 몇번이고 프로젝트가 태초마을로 돌아가는 등의 억까를 당했다. vercel을 통해서 내가 만든 website를 배포하려면 깃허브에 커밋을 해야하고 이를 위해서는 구름 ide를 통해서 깃허브에 commit하는 법을 깨달아야한다.



-----------------------------------------------------------

# 메뉴얼

## 구름 초기 세팅
1. 구름 컨테이너 설정에서 **기본템블릿**을 선택하고 기타 옵션들을 선택한다음 컨테이너를 만든다.


2. 구름 ide에서 github를 연결하기 위해서 맨 왼쪽 탭에 git 항목 클릭!
![](/images/velog/2f8c4cd11808b6ac.png)

3. 처음에는 저장소 연결이라는 버튼이 보이는데 이걸 무시하고 터미널에 
```
git init
```
으로 git repository를 initialize한다.
(혹시 git init을 했는데 git 탭에 아무것도 뜨지 않으면 페이지를 새로고침 하세요)
![](/images/velog/aa53faefe7485b1a.png)




4. 구름ide에 개인 토큰 넣기

 4-1. git 메뉴의 오른쪽 위의 폴더 설정 버튼을 클릭한다.
![](/images/velog/ad4acd76a563b565.png)

 4-2. 유저정보 탭을 클릭해서 자신의 github정보를 넣는다.
![](/images/velog/63664308ffaff317.png)
엑세스 토큰을 넣고 **"변경"** 버튼을 꼭 클릭 해줘야한다.

 
**(여기서 에러가 발생할 경우 제일 밑에 "에러 처리" 부분을 확인해주세요)**

그리고 "저장" 버튼을 눌러서 저장합니다.

>
구름 IDE에서는 jetbrain처럼 토큰을 입력할 수 있는 창이 따로 나오지 않기 때문에
_**엑세스 토큰을 미리 입력하지 않은 상태에서는 push를 할 수 없습니다**_

-> 내가 구름ide를 통해서 commit을 할때 막혔던 가장큰 이유이다.


## command line을 사용하여 github push하기

1. push하기(아래 과정부터는 일반적인 push과정과 동일하다.)
① git add .
② git commit -m "test commit"
③ git remote add origin [자신의 깃 주소]
④ git push -u origin master

>
tip!
push한 후에 username과 password를 입력하라고 나오는데 password는 깃허브에서 생성한 레포지토리의 토큰을 사용해야함!(토큰 발행은 계정 setting에서 developer setting에 있음)




#### push과정에서 나오는 오류들은 terminal에서 나오는 오더들을 따라서 하거나 구글링 ㄱㄱ

-----------------------

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
[해결방법](https://goddaehee.tistory.com/275)

#### 1. 직접수정
#### 2. 머지작업취소


----------------------------------------------------
## test하는법
[테스트는 이 링크의 방법대로 해보세유](https://velog.io/@katej927/Git-test-%EA%B3%BC%EC%A0%95-%EC%A0%95%EB%A6%AC )
>참고 링크
1. https://mmol.tistory.com/252
