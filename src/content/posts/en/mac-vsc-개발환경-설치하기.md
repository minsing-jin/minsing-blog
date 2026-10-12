---
title: Setting up a Mac VS Code development environment
pubDatetime: 2024-02-18 08:28:46.089000+00:00
description: Development environments are always unfairly brutal.
category: Programming & CS
tags: []
language: en
translationOf: mac-vsc-개발환경-설치하기
translationStatus: approved
draft: false
velogSeries:
- MAC과 Vsc 화해시키기
---

# [[Neiseuhan's explanation](https://areumdawoon.tistory.com/20)]
 
 
> **+ Let's add an auto save feature too!**


# Parts where I got unfairly screwed over


## 1. The result only appears in the terminal after saving
There were cases where I created a cpp file but didn't save it, so the result didn't appear. It has to be saved for the changes to take effect. After getting tripped up by this, I configured auto save in the settings.


## 2. Code Runner Extension Setting that caused me trouble while debugging
In Code Runner's executor map, there is a section called set the executor of each language. There is a part here where you modify settings.json, and **I set the g++ compiler version to c++14 after referring to a blog post from 2021**. As a result, the next step, configuring and running debugging mode, did not work properly. It seems to have been a version issue.
So I changed the setting to c++17.


```json
"cpp": "cd $dir && g++ -std=c++17 *.cpp -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
```


![](/images/velog/eef0b39e4d03e8a2.png)



After that, I could see that the Run button in the code file now included debugging functionality too! Nice.
![](/images/velog/0d08b002a91ec3c8.png)


Just as described on the internet, the build of the active file with clang++ appears.


![](/images/velog/92507745591d70ad.png)


Then, the task.json file that I had been searching for, wondering why it wouldn't work, was generated. For a more accurate explanation, let's follow the [Neiseuhan's explanation guide](https://areumdawoon.tistory.com/20)
