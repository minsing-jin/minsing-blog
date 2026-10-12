---
title: Linux Survival Log D-8 (MongoDB Installation)
pubDatetime: 2024-05-24 17:10:23.912000+00:00
description: When I participated in an open-source RAG project, the database used for RAG was MongoDB. Since connecting to the database was not my task, I did not have the opportunity to do it myself, but after installing and using it directly on Linux during “Living with Linux for a Semester,” I came up with the idea that I would use it right away whenever I had an interesting project idea
category: Programming & CS
tags: []
language: en
translationOf: linux-생존일지-d-8-mongo-db-설치
translationStatus: approved
draft: false
velogSeries:
- linux 생존일지
---

![](/images/velog/ea7bc9a6ce2be345.png)


# 🍳 Motivation
When I participated in an open-source RAG project, the database used for RAG was MongoDB. Since connecting the database was not my task, I did not have the opportunity to do it myself. However, after installing and using it directly on Linux during “Living with Linux for a Semester,” I came up with the idea that I would like to use MongoDB right away if I ever had an interesting project idea.


# 🍳 Tutorial
## Step1. Import the MongoDB public GPG key


```
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

```
If “ok” appears as shown below, it has been imported successfully.
![](/images/velog/06339fa32fe7bec8.png)


A detailed explanation of the command above can be found [at this link.](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04)
```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```
![](/images/velog/a9592bf12cb8a841.png)


## Step2. Installation
If you are asked about disk usage, enter y.
```
sudo apt update
sudo apt install mongodb-org
```
![](/images/velog/406f8cae0b7ef6cc.png)



## Step3. Try running it
Once you have installed it, you should test whether it works properly. Let’s start the MongoDB service and check its status.


```
(base) linux@DESKTOP-A1L15U9:~$ sudo systemctl start mongod.service
(base) linux@DESKTOP-A1L15U9:~$ sudo systemctl status mongod
```
You can confirm that it is working properly, as shown in the image below.
![](/images/velog/7ed2557b6c0cc6df.png)



# 🍳 Thoughts
This was my first experience installing and running a database. Although I had used databases that someone else had connected when working on open-source projects, I had never installed and managed one myself, and I had wanted to try it. This opportunity will serve as a stepping stone toward becoming more familiar with MongoDB and using it in my second brain project.



> References
1. Tutorial reference: https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04
