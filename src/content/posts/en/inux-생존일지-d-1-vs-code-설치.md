---
title: Linux Survival Log D-2 (VS Code Installation)
pubDatetime: 2024-05-21 15:42:01.438000+00:00
description: \n🍳 VS Code Installation Tutorial\nFirst, you need to import Microsoft's GPG key and add the repository.\n\nThe package lists need to be updated.\n\nInstall Visual Studio Code~\n\n🍳 Thoughts\nInstalling VS Code itself is not particularly difficult. De
category: Programming & CS
tags: []
language: en
translationOf: inux-생존일지-d-1-vs-code-설치
translationStatus: approved
draft: false
velogSeries:
- linux 생존일지
---

![](/images/velog/0ba60b583a818693.png)


# 🍳 Motivation
An IDE is essential for setting up a development environment. I wanted to test which IDE would be best, so I decided to start by installing the most basic one, VS Code.


# 🍳 VS Code Installation Tutorial
1. First, you need to import Microsoft's GPG key and add the repository.
```
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
```


```
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```


2. You need to update the package lists.
```
sudo apt-get update
```
3. Install Visual Studio Code.
```
sudo apt-get install code
```


As shown in the image below, you can see that VS Code has been installed and launched successfully.


![](/images/velog/b502372a44bb18a0.png)




# 🍳 Thoughts
Installing VS Code itself is not particularly difficult. I wanted to try setting up the most basic development environment for a developer using Linux, and I plan to install various additional tools to create the development environment I want for AI development. Since I had quite a difficult time installing Linux through WSL in a Windows environment, installing VS Code itself was not difficult.


Things I want to try next
1. Install Docker on Linux
2. Try installing a database
