---
title: "linux 생존일지 D-0 (wsl에서 우분투설치)"
pubDatetime: 2024-05-21T13:57:14.460Z
description: "차가운 리눅스"
category: "linux 생존일지"
canonicalURL: "https://velog.io/@minsing-jin/linux-생존일지-D-0-느린-노트북-리눅스-들먹이기"
velogSeries: ["linux 생존일지"]
---

![](/images/velog/a641eaa0f27b41e6.png)


# 🎯 스펙
프로세서: Intel(R) Core(TM) i3-8130U CPU @ 2.20GHz   2.21 GHz
시스템 종류: 64비트 운영 체제, x64 기반 프로세서
에디션: Windows 10 Pro

# 🍳 튜토리얼
## Step1. window 기능 켜기/끄기  
먼저 window 기능 켜기/끄기에서
- Linux용 Window 하위 시스템
- 가상머신 플랫폼

두가지를 체크하고 컴퓨터를 다시시작한다.
![](/images/velog/18a99fb086e342cd.png)

## Step2. MS store에서 Ubuntu 다운로드
나는 20.04.6LTS 를 설치하였다.
![](/images/velog/d5334fe913f067bc.png)

## Step3. WSL 실행후 Ubuntu 환경에서 GUI 배포판 설치

```
# sudo apt update
# sudo apt -y upgrade
# sudo apt install -y ubuntu-desktop
```

## Step4. xfce4 및 xrdp 설치
```
# sudo apt -y install xfce4
# sudo apt-get install xrdp
# sudo cp /etc/xrdp/xrdp.ini /etc/xrdp/xrdp.ini.bak
# sudo sed -i 's/3389/3390/g' /etc/xrdp/xrdp.ini
# sudo sed -i 's/max_bpp=32/#max_bpp=32nmax_bpp=128/g' /etc/xrdp/xrdp.ini
# sudo sed -i 's/xserverbpp=24/#xserverbpp=24nxserverbpp=128/g' /etc/xrdp/xrdp.ini
```

 xfce4에서 startwm.sh를 변경해주어야한다.
 ```
sudo nano/etc/xrdp/startwm.sh
```
![](/images/velog/6a373a4fc41453b4.png)

맨 아래에 /etc/X11/Xsession 부분 주석처리후
사진과 같이 다시 입력해준다. nano에 대한 명령어는 [이 사이트에서 참고하면 된다.](https://incodom.kr/Linux/%EA%B8%B0%EB%B3%B8%EB%AA%85%EB%A0%B9%EC%96%B4/nano)


## Step5. 실행
```
xfce4-session
```
을 입력해주면 설정이 모두 끝이 난다.

![](/images/velog/0c00ed095ac40316.png)

원격 데스크톱 연결을 켜서 localhost::3390으로 입력후 연결을 클릭!
![](/images/velog/0e98f94b51b61358.png)



그렇게 되면 65만번의 시도 끝에 설치된 linux가 나타나고 아이디와 패스워드는 초반에 우분투 설치하고 설정했던 username과 password를 그대로 입력하면 된다.

![](/images/velog/fbfdc49fe31c1c4b.png)

# 결과
역시 운영체제는 보여야 제맛이다.

![](/images/velog/2d9f3ceaf143135f.png)

### 🤬 Trouble shooting
내가 참고했던 블로그는 다음과 같다.
1. https://xoft.tistory.com/37
2. https://blog.naver.com/changbab/221795884273

> 
참고문헌
1. linux 설치 튜토리얼 참고: https://guiyomi.tistory.com/113
2. trouble shooting: https://blog.naver.com/changbab/221795884273
