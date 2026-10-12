---
title: Linux Survival Journal D-3 (PostgreSQL Installation)
pubDatetime: 2024-05-24 16:55:47.355000+00:00
description: I want to remotely access and control an unused laptop. Carrying both an unused laptop and the laptop I use is too heavy. To solve this, I’ll look into a real-time device called AnyDesk that allows access to another computer~
category: Programming & CS
tags: []
language: en
translationOf: linux-생존일지-d-3-docker-설치-무한-도르마무-우분투-설치해보기
translationStatus: approved
draft: false
velogSeries:
- linux 생존일지
---

![](/images/velog/978b36687027e73b.png)


# 🍳Motivation
A database is essential for storing the data of a second brain. After learning about various databases and wanting to use one directly in a Linux environment, I chose PostgreSQL. PostgreSQL is said to have diverse references and beginner-friendly conditions, so I decided to take this opportunity to install and try using it.


# 🍳Tutorial
## Step1. Update apt-get and install PostgreSQL
First, update apt-get.
```
$ sudo apt-get update
$ sudo apt-get install postgresql postgresql-contrib
```


![](/images/velog/5f970776e2aec736.png)


## Step2. Try running it
The postgres account is automatically created when PostgreSQL is installed.
The following command changes to the postgres account.
```
$ sudo -i -u postgres
```
![](/images/velog/14a04dda81c83a8c.png)



You can confirm that the account has been changed to the postgres account.
![](/images/velog/94e4b79fef1fc189.png)



Now, let's enter PostgreSQL.
```
$ psql
```
![](/images/velog/2c6d1ebed9178ba2.png)


You can see that PostgreSQL was installed successfully, and the installed version is 12.18.



# 🍳Impressions
I installed my first database. Until now, I had stored data in Google Drive or in folders and on the desktop locally, but after installing PostgreSQL, I should now create database space for storing data and use it when working on projects. I should learn SQL for database operations and practice by manipulating various things, taking this opportunity to become familiar with it.



> Reference
1. Tutorial reference: https://dejavuqa.tistory.com/16
