---
title: Linux Survival Log D-6 (Git Installation)
pubDatetime: 2024-05-24 17:02:05.461000+00:00
description: Version control, let's go
category: Programming & CS
tags: []
language: en
translationOf: linux-생존일지-d-6-git-설치
translationStatus: approved
draft: false
velogSeries:
- linux 생존일지
---

![](/images/velog/769b5919057e8aeb.png)


# 🍳 Motivation
Source code version control is essential when working on a project. To set up my development environment, I installed Git, the most widely used tool for version control.


# 🍳 Tutorial
Since I wanted to install Git on Ubuntu, I referred to the Ubuntu section for Linux in Git's official documentation.


## Step 1. Update the package list


```
sudo apt install git-all
```
![](/images/velog/3105d32021870280.png)



## Step 2. Install Git


```
sudop apt install git
```
![](/images/velog/b4109a24df46319d.png)
s
## Step 3. Check the Git version to verify that it was installed correctly
```
git --version
```
![](/images/velog/f9a2427e45e2fedc.png)


## Step 4. Try using it
Enter the information that will be uploaded when pushing to Git.
```
git config --global user.name [이름]

git config --global user.mail [메일 주소]
```


![](/images/velog/2a766a154cafdaa0.png)


git clone the project to check whether it was downloaded correctly


```
git clone [url 주소] 
```


![](/images/velog/e9f1e1f64ffb43af.png)


It was downloaded successfully.
![](/images/velog/111f488e875f92ce.png)



# 🍳 Thoughts
I installed Git, a core program for the important version control needed when working on projects, and even used it directly to check whether it worked. As I install various programs, I should continue searching for a customized development environment on Linux.


>References
1. Tutorial reference: https://coding-factory.tistory.com/502
https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98
