---
title: linux Survival D-12 (Docker Installation)
pubDatetime: 2024-05-24 17:22:28.564000+00:00
description: Docker, let’s go
category: Programming & CS
tags: []
language: en
translationOf: linux-살아남기-d-12-docker-설치-무한-도르마무-우분투-설치해보기
translationStatus: approved
draft: false
velogSeries:
- linux 생존일지
---

![](/images/velog/1836e0baeafdce1b.png)


# 🍳 Motivation
If there are many servers for developing an AI service, every time a server update is carried out, you have to connect to each server individually and perform the update. The idea that solves this is to software-define the entire server environment as well, creating a specific software environment through virtualization and using it as-is on local and production servers. So, this semester, I wanted to try using Docker while living with Linux.



# 🍳 Tutorial
Docker automatically recognizes the type of Linux distribution and installs the appropriate Docker package, so with the single command below, the Linux distribution version is automatically detected and Docker is installed in a customized manner.
```
sudo wget -qO- http://get.docker.com/ | sh
```


![](/images/velog/0223a91d4f8f70db.png)



Once the installation is complete, let's check the version to make sure Docker was installed properly.


```
docker version
```
![](/images/velog/dc06cde50f5a34ef.png)


Let's check whether Docker runs properly.
```
sudo systemctl status docker
```
![](/images/velog/a760edf29418399b.png)



# 🍳 Reflections
Since Docker automatically recognized the different types of distributions and was installed, there were no major difficulties with the installation. Taking this opportunity to live with Linux for a semester, I would like to work on an AI development project while using Docker myself.


> References
1. Tutorial reference:  https://www.leafcats.com/153
