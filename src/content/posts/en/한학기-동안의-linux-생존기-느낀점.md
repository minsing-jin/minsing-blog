---
title: Reflections on a Semester of Surviving Linux
pubDatetime: 2024-05-28 14:48:35.546000+00:00
description: Linux Torvalds
category: Programming & CS
tags: []
language: en
translationOf: 한학기-동안의-linux-생존기-느낀점
translationStatus: approved
draft: false
velogSeries:
- linux 생존일지
---

# 🙋 Looking Back on My Linux Journey
The criteria I used for installing programs were based on what programs would be needed in a Linux environment for the second brain project I wanted to create.


# 🌱 The Not-so-easy Linux Installation Process
## Trial and Error
### Real-machine trial
There were two stages in total before arriving at my current Linux setup. First, I brought out an old office laptop that was no longer being used at home and tried to install Linux on a real machine. I needed to go to the official Linux website, download an ISO file, and use the Etcher program to create a bootable USB, but I ran into the issue of not having a USB drive. Although I could have installed it easily by dragging and dropping, I was filled with the unfounded confidence that I had plenty of time back then, so I decided to save the cost of a USB drive and install it using a virtual machine instead.


### Virtual-machine trial
The second trial was installing it through a virtual machine. I confidently installed VirtualBox and ran it on a dual-core laptop with two CPU cores, but I only managed to get as far as the login screen, after which the Linux system in my virtual machine kept freezing. Since I judged that, at that speed, I would not be able to finish within the year despite needing to install ten programs, I entered the world of WSL2 as a last resort.


## Starting the Linux Installation in WSL2 in Earnest
I began the Linux installation in WSL2 in earnest. After downloading Ubuntu 20.04 LTS from the Microsoft Store and creating an initial username and password, the Linux installation was complete. However, I wanted something with a GUI like Ubuntu Desktop, so while searching, I learned about xfce4, a Linux GUI environment. Since it said that a remote connection was required to connect to it, I additionally installed xrdp. During this process, I initially wandered around because I did not know how to use vim and nano. Later, I realized that modifying executable files was an essential step, so I proceeded by looking up each command one by one.
At first, these were unfamiliar concepts, so I approached them with the feeling of trying to break a rock with an egg, repeatedly installing and deleting things. In the end, however, I managed to do it, and my heart swelled with pride at the thought that, through this tool called Linux, I could try things that I could not do on Windows.


# 🌱 Starting the Program Installations
I proceeded with the installations in earnest within xfce4's GUI environment. For the second brain project I wanted to pursue, I began installing programs by dividing them into themes such as setting up a development environment / installing a database / installing a local LLM / version control / collaboration tools, and so on.
There were no major difficulties up through the program installation stage. There were plenty of references related to Ubuntu, so if something did not go well, I could look for other references. I was also surprised by how many articles had organized troubleshooting information so well.
The difficulties arose when some of the references I needed to follow required matching the Ubuntu version, or matching a program's version with the Ubuntu version. There were also quite a few issues where some programs did not appear in the GUI environment, but were running normally when I checked their status in the terminal, as was the case with programs such as AnyDesk.


# 💡 Reflections
If I need to use Linux for future projects, an OS with abundant references felt like a major advantage based on my experience. While using Ubuntu, I realized that although the convenience of an OS matters in attracting abundant resources and users, what is most important is having a well-established open-source community. I also came to feel during this semester of living with Linux that if such a community and its user base grow, companies will create programs and related references tailored to the OS that many people use. Errors arising for various users will then be recorded in GitHub issue logs, Reddit, X, and other communities, solutions will gradually accumulate, and program errors will be fixed, thereby improving software stability.
The greatest realization for me was discovering, while installing Linux, installing programs, and searching for solutions to errors, that factors such as how widely people use and how much interest they show in something influence the maturity of open source.
During this semester, I focused on finding Linux programs, installing various things myself, and gaining hands-on experience. As I installed them, this led me to think about how I should carry out the project I want to do on Linux. Going forward, when I work on an LLM second brain, I have set a goal of comparing various suitable operating systems and installing programs that are also appropriate for the project.
