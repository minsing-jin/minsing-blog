---
title: Linux Survival Log D-0 (Installing Ubuntu in WSL)
pubDatetime: 2024-05-21 13:57:14.460000+00:00
description: Cold Linux
category: Programming & CS
tags: []
language: en
translationOf: linux-생존일지-d-0-느린-노트북-리눅스-들먹이기
translationStatus: approved
draft: false
velogSeries:
- linux 생존일지
---

![](/images/velog/a641eaa0f27b41e6.png)



# 🎯 Specs
Processor: Intel(R) Core(TM) i3-8130U CPU @ 2.20GHz   2.21 GHz
System type: 64-bit operating system, x64-based processor
Edition: Windows 10 Pro


# 🍳 Tutorial
## Step1. Turn Windows features on/off  
First, in Turn Windows features on or off, check
- Windows Subsystem for Linux
- Virtual Machine Platform


both options and restart the computer.
![](/images/velog/18a99fb086e342cd.png)


## Step2. Download Ubuntu from the MS Store
I installed 20.04.6 LTS.
![](/images/velog/d5334fe913f067bc.png)


## Step3. Run WSL and install a GUI distribution in the Ubuntu environment


```
# sudo apt update
# sudo apt -y upgrade
# sudo apt install -y ubuntu-desktop
```


## Step4. Install xfce4 and xrdp
```
# sudo apt -y install xfce4
# sudo apt-get install xrdp
# sudo cp /etc/xrdp/xrdp.ini /etc/xrdp/xrdp.ini.bak
# sudo sed -i 's/3389/3390/g' /etc/xrdp/xrdp.ini
# sudo sed -i 's/max_bpp=32/#max_bpp=32nmax_bpp=128/g' /etc/xrdp/xrdp.ini
# sudo sed -i 's/xserverbpp=24/#xserverbpp=24nxserverbpp=128/g' /etc/xrdp/xrdp.ini
```

 You need to modify startwm.sh in xfce4.
 ```
sudo nano/etc/xrdp/startwm.sh
```
![](/images/velog/6a373a4fc41453b4.png)


After commenting out the /etc/X11/Xsession section at the very bottom,
enter it again as shown in the picture. The commands for nano can be found [on this site.](https://incodom.kr/Linux/%EA%B8%B0%EB%B3%B8%EB%AA%85%EB%A0%B9%EC%96%B4/nano)



## Step5. Run
```
xfce4-session
```
Once you enter it, all the setup is complete.


![](/images/velog/0c00ed095ac40316.png)


Open Remote Desktop Connection, enter localhost::3390, and click Connect!
![](/images/velog/0e98f94b51b61358.png)




After 650,000 attempts, the installed Linux finally appears, and for the ID and password, simply enter the username and password you set when you initially installed Ubuntu.


![](/images/velog/fbfdc49fe31c1c4b.png)


# Result
An operating system is best when you can actually see it.


![](/images/velog/2d9f3ceaf143135f.png)


### 🤬 Troubleshooting
These are the blogs I referred to.
1. https://xoft.tistory.com/37
2. https://blog.naver.com/changbab/221795884273


> 
References
1. Linux installation tutorial: https://guiyomi.tistory.com/113
2. troubleshooting: https://blog.naver.com/changbab/221795884273
