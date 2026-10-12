---
title: Linux Survival Log D-7 (Installing Slack)
pubDatetime: 2024-05-24 17:09:45.503000+00:00
description: Install Slack
category: Programming & CS
tags: []
language: en
translationOf: linux-생존일지-d-7-chat-gpt-설치
translationStatus: approved
draft: false
velogSeries:
- linux 생존일지
---

# 🍳 Motivation
If you have a large project, collaboration is often necessary. When developing in a Linux environment at a company, I want to install Slack, one of the most representative tools for communication.


# 🍳 Tutorial
The [official Slack website](https://slack.com/intl/ko-kr/help/articles/212924728-Linux%EC%9A%A9-Slack-%EB%B2%A0%ED%83%80--%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C) clearly explains how to download the Slack app on Ubuntu.


## Installation
Open the terminal and install Slack using snap.
```
sudo snap install slack
```
![](/images/velog/c0af423e1a19b7fd.png)



## How to Update
```
sudo apt-get update
sudo apt-get upgrade slack-desktop
```
![](/images/velog/8dd39e21f7ac5217.png)
![](/images/velog/dbe8453612fec1c4.png)


## How to Uninstall
```
sudo snap remove slack
```


## Result
![](/images/velog/ed2f6a708287c3ab.png)


# 🍳 Thoughts
Slack has provided a convenient setup for installing it on Ubuntu.
