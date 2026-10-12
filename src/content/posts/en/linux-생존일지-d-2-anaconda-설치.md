---
title: Linux Survival Log D-1 (Anaconda Installation)
pubDatetime: 2024-05-21 15:43:52.704000+00:00
description: I took another step toward creating a Python AI development environment. Very good.
category: Programming & CS
tags: []
language: en
translationOf: linux-생존일지-d-2-anaconda-설치
translationStatus: approved
draft: false
velogSeries:
- linux 생존일지
---

![](/images/velog/d545704a967cdf43.png)




# 🍳Installation Tutorial
## Step1. Download


```
wget https://repo.anaconda.com/archive/Anaconda3-2024.02-1-Linux-x86_64.sh
```


![](/images/velog/b56746fe94b150b0.png)


## Step2. Installing
```
bash Anaconda3-2024.02-1-Linux-x86_64.sh
```


You need to view the license agreement that appears afterward to proceed with the installation process, so let's keep pressing Enter to skip it.


![](/images/velog/c22f4055a8b1cfc2.png)



When asked whether you accept the license terms, enter yes.
![](/images/velog/4e5fa3c404845d4b.png)


Then, press Enter to confirm the Anaconda installation path.
![](/images/velog/5688bf85ae2404e2.png)



For conda init, select yes as well.
![](/images/velog/385189c003d38578.png)


## Step3. Check whether conda was installed properly
```
conda --version
```
![](/images/velog/e71b07e900150b5a.png)


## Step4. Try running it
In the case of Bash, you can run it by closing and reopening the terminal or sourcing the .bashrc file.


```
source ~/.bashrc
```


![](/images/velog/b52a7c0fcd22e352.png)


Check conda status


![](/images/velog/7efca74911bc3992.png)


Check the Python version with conda
![](/images/velog/fb0ca206dff2caef.png)



The conda virtual environment installation is finally complete.


# 🍳 Reflections
The installation of Anaconda, a virtual environment for setting up a development environment, was completed successfully. Independent package management now makes it possible to work on multiple projects. It would be fun to install various programs in the current base environment and create a minimal development environment package of my own.



> References
1. Tutorial reference: https://meuse.tistory.com/entry/Linux%EC%97%90-Anaconda-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0
