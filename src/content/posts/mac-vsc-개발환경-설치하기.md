---
title: "Mac vsc 개발환경 설치하기"
pubDatetime: 2024-02-18T08:28:46.089Z
description: "개발환경은 언제나 억까다."
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/Mac-vsc-개발환경-설치하기"
velogSeries: ["MAC과 Vsc 화해시키기"]
---

# [[네이스한 설명](https://areumdawoon.tistory.com/20)]
 
 
> **+ auto save 기능도 넣자!**

# 내가 억까당한 부분

## 1. 저장을 해야 terminal에서 결과가 나온다
cpp file을 만들어놓고 저장을 안해서 결과가 안나오는 경우가 있었다. 저장해야 반영된다. 이 억까를 당하고, auto save를 setting에서 설정했다.

## 2. 디버깅을 위한 Code Runner Extension Setting 억까
code runner의 excutor map에 set the excutor of each language라는 부분이 있다. 여기서 settings.json을 수정하는 부분이 있는데 **g++ 컴파일러 버전을 21년도 블로그를 보고 참고해서 c++14로 했다**. 그래서 다음단계인 디버깅 모드 설정 및 실행하기가 잘 실행이 안되었다. 버전 문제인것 같다.
그래서 설정을 c++17로 했다.

```json
"cpp": "cd $dir && g++ -std=c++17 *.cpp -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
```

![](/images/velog/eef0b39e4d03e8a2.png)


그랬더니 코드 파일에 들어가 실행 버튼이 디버깅 기능까지 추가 된것을 확인할 수 있었다! 쨔스
![](/images/velog/0d08b002a91ec3c8.png)

인터넷에서의 설명대로 clang++활성 파일 빌드가 뜬다.

![](/images/velog/92507745591d70ad.png)

그리고나서 그토록 왜 안되냐며 찾고 있었던 task.json 파일이 생성된다. 더 정확한 설명은 [네이스한 설명 가이드](https://areumdawoon.tistory.com/20)를 따라가보자
