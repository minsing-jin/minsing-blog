---
title: "Selecting right OS"
pubDatetime: 2024-04-13T12:25:24.670Z
description: "머신러닝은 우분투가 GOAT에유:"
category: "Founder Notes"
canonicalURL: "https://velog.io/@minsing-jin/Selecting-right-OS"
velogSeries: ["About Minsing"]
---

# Main Needs
- AI project
- Bussiness

이 두가지가 내가 앞으로 하고자하는 프로젝트의 main topic들이다. 이 2가지에 적합하며 많이 쓰는 Linux배포판인 Ubuntu를 선정하여 분석하고자 한다.

# Who developed the OS, when and why?
- Ubuntu는 2004년에 마크 셔틀워스와 그의 회사인 Canonical에 의해 처음 출시되었다. Ubuntu를 만든 주된 목적은 사용자 친화적이고, 완전히 무료인 리눅스 배포판을 제공하여 누구나 쉽게 사용할 수 있게 하는 것이었다. 
- Ubuntu는 "인류에 대한 친절"이라는 아프리카의 철학에서 이름을 가져왔으며, 이는 소프트웨어의 자유와 공유의 정신을 반영한다. Ubuntu는 데스크탑, 서버, 클라우드, IoT 등 다양한 환경에 사용될 수 있도록 설계되었으며, 강력한 커뮤니티가 형성되어있으며 6개월마다 새로운 버전을 출시하고, 2년마다 LTS(Long-Term Support)버전을 출시하여 5년간 지원하며 지속적으로 발전하고 있다.


# Pros and Cons of the OS
## Pros

### 범용성 높은 OS
Ubuntu는 데이터 과학, AI, 및 ML 개발에 선호되는 OS이다. 특히 NVIDIA AI Workbench와 같은 도구와의 통합을 통해 GPU 가속 작업을 원활하게 지원한다. 
아래와 같이 Canonical사는 End-to-end MLOps를 지원하여 NVIDIA의 AI 엔터프라이즈및 NVIDIA DGX, Charmd Kubeflow와 같은 model 트레이닝의 속도를 높일 수 있는 도구들을 통합되어 더욱 AI 개발 용이성을 높인다. 
![](/images/velog/a171e5e33d91dced.png)


![](/images/velog/af82e60fc75b9b77.png)

![](/images/velog/643ce20c5f2ba40d.png)

### 클라우드 및 서버 운영에 최적
Ubuntu는 공공 클라우드에서 선호되는 OS로, 클라우드 기반 개발 도구와의 호환성이 뛰어나며, IoT 개발을 위한 Ubuntu Core와 같은 특화된 플랫폼을 제공한다. 

### 탁월한 하드웨어 호환성
Ubuntu는 Dell, Lenovo, HP와 같은 주요 제조업체의 다양한 하드웨어와 호환되어 광범위한 장치에서의 유연성과 호환성을 제공한다. 

### 성숙한 생태계
Ubuntu는 강력한 커뮤니티 지원과 함께, Long-Term Support(LTS) 버전을 통해 5년간 안정적인 지원을 제공한다. 복잡하고 호환성이 부족해 사용에 무리가 있는 다른 리눅스 OS도 많지만 우분투는 일반사용자들이 사용하기 적합할 정도로 Ubuntu Software를 비롯해 비개발자들이 쓸수 있는 유틸리티들이 굉장히 많다.

![](/images/velog/583d18e840b36eff.png)

![](/images/velog/809394cd9ad3144b.png)


아래를 사진을 보면 알 수 있듯이 사용자들이 많은 사용자들을 보유하고 있어 우분투 포럼, 우분투 한국 커뮤니티등이 많고, 한글로 되어있는 reference들이 풍부하다.

![](/images/velog/41dea9ca5d41431f.png)

![](/images/velog/fa7092f84cca1bb1.png)

Reference:
1. https://zorbathegeek.tistory.com/29


## Cons

### 많은 리소스 요구량
Ubuntu는 Alpine Linux와 같은 경량 배포판에 비해 더 많은 시스템 리소스를 요구할 수 있다. 이는 특히 리소스가 제한된 환경에서 고려해야 할 사항이다. 우분투는 사용 편의성과 다양한 기능을 제공하는 대신, 시스템 메모리와 CPU 사용량이 높을 수 있으며, 이는 서버 환경이나 오래된 하드웨어에서 성능 저하로 이어질 수 있다.


### 특정 하드웨어와의 호환성 문제
일부 특정 하드웨어에서는 드라이버 호환성 문제가 발생할 수 있으며, 이는 추가적인 설정이나 조정을 필요로 할 수 있다. 특히 최신 하드웨어 또는 특수한 구성의 장비에서는 우분투가 기본적으로 제공하는 드라이버로는 최적의 성능을 발휘하지 못할 수 있다. 사용자는 이러한 문제를 해결하기 위해 제조사에서 제공하는 드라이버를 수동으로 설치하거나 커뮤니티의 도움을 받아야 할 수도 있다. 특히 개발을 위해서 쓰는 Notion, 카카오톡, 카카오 워크등의 소프트웨어를 사용하고자 한다면 linux에서는 이 프로그램들을 지원하지 않았다.


### 업그레이드 시의 복잡성
우분투는 정기적으로 새로운 버전을 출시하며, 때로는 이전 버전에서 새로운 버전으로의 업그레이드 과정이 복잡하고 시간이 많이 소요될 수 있다. 특히 많은 사용자 정의 설정이나 서드파티 소프트웨어를 사용하는 경우, 업그레이드 과정에서 호환성 문제가 발생할 수 있으며, 이는 시스템 설정을 다시 조정하거나 소프트웨어를 재설치하는 등 추가적인 작업을 필요로 할 수 있다.




# Roadmap of the OS
Ubuntu Blog에서 Senior Product Manager for Ubuntu at Canonical의 Oliver Smith가 제시한 우분투의 향후 로드맵은 다음과 같다.

- 보안 강화: Ubuntu는 다양한 MFA 도구, 안전한 부팅, 하드웨어 기반 암호화, 변경 불가능한 OS 등을 포함하여 보안에 대한 초점을 증가시키고 있다.
- 클라우드 전환: 사용자 데이터와 엔터프라이즈 관리 스위트의 클라우드로의 빠른 전환에 대응하기 위해, Ubuntu는 클라우드 데스크탑의 사용성 향상에 주력하고 있다.
- 기술 혁신 탐색: Ubuntu는 내장 AI 기술(예: Windows Copilot) 및 증강 현실 또는 가상 현실 생산성 환경(예: Apple Vision Pro)과 같은 실험적 기술의 도입을 모색하고 있다.
- Ubuntu Core Desktop: Ubuntu 23.10과 함께, Ubuntu는 클래식 데스크탑 경험의 변경 불가능한 버전인 Ubuntu Core Desktop을 개발 중이다. 이는 보안, 품질, 안정성을 향상시키기 위해 설계된 Linux 데스크탑 사용자를 위한 추가 선택지를 제공한다.
- Netplan 도입: Ubuntu 23.10에서는 Netplan을 Ubuntu Desktop에 도입하여 서버와 데스크탑 간의 보다 통합된 경험을 제공할 계획을 가지고 있다.

Ubuntu가 사용자의 변화하는 요구를 충족시키고, 개방형 소스 개발 커뮤니티의 광범위한 가치에 부합하는 방식으로 데스크탑 경험을 진화시키기 위한 전략적 사고를 반영한다. Ubuntu는 이러한 목표를 달성하기 위해 지속적으로 새로운 기술과 사용 사례를 탐색하고, 사용자 기반을 확장하기 위해 데스크탑 팀을 신속하게 확장하고 있다.

[Reference]
1. https://ubuntu.com/about/release-cycle
2. https://ubuntu.com/blog/ubuntu-desktop-charting-a-course-for-the-future

# Which company use Ubuntu?
![](/images/velog/daebd5021edb1d5b.png)

위의 사진과 같이 11138개나 되는 회사들이 Ubuntu를 tech stacks로 사용하고 있는것을 알 수 있다. 우리가 흔히 알고 있는 당근마켓, 슬랙, 레딧이 보이며 Linux는 점차 시장의 점유율을 점차 늘려가고 있는것을 확인할 수 있다. 


[Reference]
1. https://openmetal.io/docs/product-guides/private-cloud/machine-learning-and-operating-systems/
2. https://askubuntu.com/questions/50587/which-big-computer-companies-support-the-ubuntu-project-financially
3. https://linuxsecurity.com/features/open-source-ai-projects-for-linux
4. https://stackshare.io/ubuntu

# Why AI developers use Ubuntu?
## Round1:Ubuntu VS MacOS

### 1. NVIDIA AI Workbench와의 통합
- Ubuntu는 데이터 과학, AI, ML 개발에 선호되는 OS로, NVIDIA AI Workbench와의 통합을 통해 GPU 가속 작업을 원활하게 지원한다. 이는 AI 개발에서 중요한 성능 향상을 의미한다. 

### 2. 클라우드 및 서버 운영에 최적화
- Ubuntu는 공공 클라우드에서 선호되는 OS로, 클라우드 기반 개발 도구와의 호환성이 뛰어나며, IoT 개발을 위한 Ubuntu Core와 같은 특화된 플랫폼을 제공한다. 반면, macOS는 서버 측 애플리케이션과 서비스에 대한 지원이 Ubuntu만큼 광범위하지 않다. 
### 3. 하드웨어 호환성 및 비용 효율
- Ubuntu는 Dell, Lenovo, HP와 같은 주요 제조업체의 다양한 하드웨어와 호환이 되어 광범위한 장치에서 유연성과 호환성을 제공한다. 반면, macOS는 Apple 하드웨어에 한정되어 있어 비용과 유연성 측면에서 제한을 가진다.

### 4.장기 지원 및 관리 도구
Ubuntu는 Long-Term Support(LTS) 버전을 통해 5년간 안정적인 지원을 제공하며, Ubuntu Pro를 통해 이를 10년까지 확장할 수 있다. 또한, Active Directory 및 Azure AD와의 통합, cloud-init 및 Landscape와 같은 관리 도구를 제공해 IT 관리자가 개발 환경을 효율적으로 관리할 수 있게 한다. macOS는 Apple Business Manager나 Jamf와 같은 도구를 통해 관리되지만, 지원 기간이 Ubuntu LTS 버전보다 일반적으로 짧다.

이러한 이유로, AI 개발에 있어 Ubuntu는 폐쇄적인 생태계의 macOS에 비해 더 넓은 호환성, 비용 효율성, 그리고 서버 및 클라우드 환경에서 우수한 성능을 제공한다. 
하지만 본인이 apple의 MacOS를 주력으로 사용하고 있고, 개발하고자 하는 환경도 apple 생태계에 있다면 macOS를 사용하는것도 괜찮다.

[Reference]
1. https://ubuntu.com/blog/ubuntu-vs-macos-for-development

## Round2:Ubuntu VS Alpine linux

### 1. 하드웨어 요구사항과 자원 효율성

- Alpine Linux는 최소 100MB의 RAM과 0~700MB의 저장 공간을 요구한다. 이는 매우 낮은 하드웨어 요구 사항으로, 리소스가 제한된 환경에서 운영하기에 적합하다.
- Ubuntu는 최소 512MB의 RAM과 최소 1GB의 저장 공간을 필요로 한다. 이는 Alpine Linux에 비해 더 많은 리소스를 요구하지만, 더 많은 기능과 더 넓은 호환성을 제공한다.

### 2. 성능

- Alpine Linux는 작은 코드 베이스로 인해 이미지의 빌드, 푸시, 풀링이 빠르며, 시작 시간이 단축된다. 그러나 musl libc와 GNU glibc 간의 차이로 인해 특정 상황에서 성능 저하가 발생할 수 있다.
- Ubuntu는 더 큰 코드 베이스를 가지고 있지만, 더 많은 기능과 라이브러리를 제공해 AI 개발에 필요한 다양한 작업을 수행할 수 있다. 이는 특히 복잡한 의존성을 가진 AI 프로젝트에 유리할 수 있다.

### 3. 커뮤니티와 지원

- Alpine Linux는 6개월마다 새로운 메인 버전을 출시하며, 메인 저장소는 2년간 지원된다. 그러나 상업적 지원을 제공하지 않는다.
- Ubuntu는 6개월마다 새로운 버전을 출시하고, 2년마다 LTS(Long-Term Support) 버전을 출시해 5년간 지원한다. 또한, Ubuntu는 매우 널리 사용되는 리눅스 배포판으로, 방대한 커뮤니티와 상업적 지원을 제공한다.

### 4. 패키지 관리 및 소프트웨어 설치

- Alpine Linux는 APK 패키지 관리자를 사용해 소프트웨어 설치 및 관리를 수행한다. APK는 간단하고 빠른 패키지 관리를 제공하지만, 사용할 수 있는 패키지의 수가 제한적일 수 있다.
- Ubuntu는 APT 패키지 관리자를 사용하며, 60,000개 이상의 패키지를 제공한다. 이는 Ubuntu를 사용할 때 더 많은 소프트웨어와 라이브러리에 쉽게 접근할 수 있음을 의미한다.


Alpine Linux와 Ubuntu 사이의 선택은 AI 개발 프로젝트의 특정 요구 사항과 환경에 따라 달라진다. **Alpine Linux**는 리소스가 제한된 환경, 높은 보안 요구 사항, 빠른 배포가 필요한 경우에 적합하다. 그러나 **Ubuntu**는 더 넓은 소프트웨어 호환성, 더 강력한 커뮤니티 지원, 그리고 복잡한 AI 개발 프로젝트를 위한 더 많은 기능을 제공한다.

따라서, AI 개발에 있어서 **Ubuntu**는 더 많은 기능과 유연성을 제공하며, 특히 복잡한 의존성과 다양한 개발 도구가 필요한 경우 더 우수한 선택이 될 수 있다. 반면, Alpine Linux는 특정 사용 사례에서의 경량성과 보안성으로 인해 특별한 장점을 가진다


[Reference]
1. https://anto.online/guides/alpine-linux-vs-ubuntu-comparison/


# 느낀점
AI 타임즈에서 디 인포메이션이 언급한 생성형 AI를 위한 자체 운영체제 구축 가능성, MS의 copilot, 각종 휴대폰등의 전자기기에 모두 AI가 들어가기 위한 OS들이 점점 등장할것이고 정말 기대된다. AI 전용 OS들은 어떻게 등장할지 너무나도 궁금하다. AI based OS, AI-powered OS는 어떠한것들이 등장할지 기대된다.

나 또한 LLM을 활용한 오픈소스 프로젝트, 텍스트 마이닝등의 프로젝트를 진행하면서 window OS에서 발생하는 package 호환성 문제들을 겪고, MacOS로 갈아타는등의 여러 문제들을 해결해 나아가면서 적합한 OS 선택에 대한 고민이 있었다. 이번조사를 통해서 OS선택이 단순히 개인적인 선호도를 넘어 프로젝트의 기술적인 요구사항과 비즈니스 마켓, 호환성, 커뮤니티 지원의 범위 등의 고려요소가 꽤 있다는것을 이해하게 되었다.

[Reference]
1. https://www.aitimes.com/news/articleView.html?idxno=154015

>
#### 📒 Reference
1. 머신러닝은 우분투가 GOAT에유: https://openmetal.io/docs/product-guides/private-cloud/machine-learning-and-operating-systems/#best
