---
title: "파이참 error note(깃허브 홈페이지 변동사항 끌어오는 fetch)"
pubDatetime: 2023-09-21T06:08:58.855Z
description: "conflict 이슈"
category: "Pycharm과 친해지기 with Mac"
canonicalURL: "https://velog.io/@minsing-jin/파이참-error-note깃허브-홈페이지-변동사항-끌어오는-fetch"
velogSeries: ["Pycharm과 친해지기 with Mac"]
---

### 퀘스쳔

**상황:**
파이참에서 test branch를 파서 변동사항을 커밋하여 깃허브 test branch에 올라온것을 확인
-> "깃허브 홈페이지상"에서 test  branch를 pull request와 merge 진행
-> 하지만 파이참에서는 test branch는 그대로 남아있는것을 확인, 깃허브 홈페이지의 pull request와 merge가 반영이 안되어있었음
-> 파이참에서 무지성으로 깃허브 홈페이지처럼 변동할려고 test branch를 delete해버림
-> 다시 파이참에서 파일 내용 변경후 commit, push 시전
-> conflict


**질문: pull request와 merge를 깃허브 홈페이지상에서 하면 파이참에 바로 적용할 수 있는 커맨드?**





# 정답: Fetch하기!
