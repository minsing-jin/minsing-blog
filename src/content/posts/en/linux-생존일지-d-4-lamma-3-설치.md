---
title: Linux Survival Log D-4 (Trying out a local LLM after installing Ollama)
pubDatetime: 2024-05-24 16:59:34.079000+00:00
description: Local LLM, let’s go
category: Programming & CS
tags: []
language: en
translationOf: linux-생존일지-d-4-lamma-3-설치
translationStatus: approved
draft: false
velogSeries:
- linux 생존일지
---

![](/images/velog/28524a6308f90d01.png)





# 🍳 Motivation
My main goal is to build my own second brain so that I do not miss any knowledge and can organize it systematically.
I was very interested in a local LLM that could be customized to my needs and used offline while solving the security and cost issues involved in building my own personalized knowledge system. I decided to install Ollama because I wanted to use this opportunity to install a local LLM on Linux, fine-tune it, and create a simple bot.


# 🍳 Tutorial
## Installing Ollama
Ollama is a framework that allows you to run an LLM in a local environment. 
Let's install Ollama using the command below. 


```
curl -fsSL https://ollama.com/install.sh | sh
```
Once the installation is complete, you will see the following. Since there is absolutely no NVIDIA/AMD GPU in my office laptop, it says that none was detected and that Ollama will run in CPU-only mode,
![](/images/velog/4cb1e662cfe49663.png)




## Trying it out
### Trying out Mistral
```
ollama run mistral
```
![](/images/velog/e9ba691429eaffc8.png)


Once the pull is complete, a message window called `Send a message` will appear.


![](/images/velog/37301b39a23202be.png)


If you enter hello as a test, you can confirm that a response is generated successfully. 
The line breaks in Mistral's response appeared that way because I am impatient and pressed Enter several times; in reality, it is output properly on a single line.


![](/images/velog/c54cc0fecd67e295.png)


Ask how to fine-tune it


![](/images/velog/8915eb2e9f24be5a.png)





# 🍳 Impressions
The appeal of a local LLM lies in its data privacy and cost benefits, as well as the ability to customize the model. This offers the significant advantage of applying an LLM specialized for a specific domain—in my case, the domain of 'me' as I build my second brain in the future. In building my second brain, a local LLM will likely be used for two functions: question answering based on my knowledge system and automatically structuring the knowledge contained in what I record and experience.


> References
1. Tutorial: https://brunch.co.kr/@b2439ea8fc654b8/28
