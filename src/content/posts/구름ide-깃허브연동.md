---
title: "구름ide 깃허브연동"
pubDatetime: 2023-01-01T04:03:27.922Z
description: "5일간의 삽질"
category: "web_study"
canonicalURL: "https://velog.io/@minsing-jin/구름ide-깃허브연동"
velogSeries: ["web_study"]
---

1. 컨테이너 생성시 기본 템플릿에 git연동하기

1-1. 유저정보에 토큰 설정

2. 원하는 branch 선택 혹은 새로 생성시킨후 스테이지에서 제외된 파일을 + 버튼을 눌러 github에 올릴 파일 선택

3. 아래 버튼을 통해 커밋

4. 히스토리 버튼 위의 push 버튼으로 푸쉬


-------------------------------------------

**cf) 오류 note**
1. 푸쉬 실패시
1-1. 히스토리 옆 이벤트를 클릭한 후  fatal: authentication failed for "깃허브 링크"인 경우
- 아래 링크를 방법을 따라가서 github api를 접근할 수 있는 generate new token을 한후 토큰을 복사한 후에 구름 ide의 pull 옆 파일톱니바퀴 버튼을 누른후 유저정보에 엑세스 토큰에 복사 붙여넣기

참고 링크: https://sosoeasy.tistory.com/536
