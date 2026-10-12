---
title: Selecting Languages
pubDatetime: 2024-03-26 14:42:20.969000+00:00
description: I ended up writing a portfolio while trying to submit an assignment
category: Founder Notes
tags: []
language: en
translationOf: selecting-languages
translationStatus: approved
draft: false
velogSeries:
- About Minsing
---

![](/images/velog/9c7d10567ed97d07.png)




# Problem Definition
The reason I entered the Department of Computer Science was that I wanted to define problems on interesting topics and quickly implement them whenever a fun idea came to mind. For example, I thought AI was a tool that could realize most of the ideas I came up with, such as creating a virtual girlfriend using GPT, creating a robot with an LLM that generates a Second Brain or RPA, and creating a device that analyzes a girlfriend's emotions with ABSA. Therefore, I became interested in the field of AI and began studying it in 2021.


While studying, I developed a desire to centrally manage the knowledge, ideas, plans, and thoughts that I was missing in life in one place. To solve this problem, I wanted to implement a Second Brain. Since middle school, I had been troubled by forgetting even after meeting great people or hearing impressive words. I had exciting ideas, and no matter how good a plan I made, there were many times when I forgot it at some point and lost my direction.


To avoid losing my direction, I carried a notebook during my school years and recorded things by copying them into KakaoTalk, but reconstructing and classifying the knowledge into a unified whole consumed a great deal of energy and time. Even when I organized it, it was never organized perfectly, and I naturally stopped using it often. After enlisting in the military, I wanted to do various things, but as I read and organized books, I realized that I had missed a great deal of knowledge and had failed to systematize it.


To solve these problems, I considered and searched for a tool that could simplify my thoughts and visualize them with little effort. Among the available options, I used Notion to create my Second Brain. However, since Notion only provides internal functions, I felt that it lacked the tools needed to visualize knowledge and plans.


In conclusion, I want to create a program that allows me to record my knowledge with little effort, automatically visualize it, and, when I enter a prompt as needed, clearly display the necessary information on a dashboard. To achieve this, I chose AI as the primary domain and decided to use Python. My approach is to move forward from the futuristic idea of an AI learning through a Neuralink and being used like an assistant, similar to Iron Man's JARVIS, while adapting it to the current situation and available technology.


-------------------------



# About Python


## Language author
The author of Python is Guido van Rossum, a programmer from the Netherlands who is widely known as the creator of the Python language.


## When and Why author made the language
Python began to be developed by Guido van Rossum during the Christmas holiday of 1989. Inspired by the ABC programming language, he wanted to create a language that supported exception handling, was easy for amateur programmers to use, and above all, was easy to read and understand. Python was first released in February 1991 as version 0.9.0, with the goal of emphasizing productivity and readability while allowing programmers to accomplish many tasks with short code.


## Pros and Cons of the language
### Advantages:
1. Readability: Python has clear and concise syntax, making its code highly readable.
2. A variety of libraries: Python has a vast standard library and numerous third-party libraries that can be used in various fields, including data science, web development, and automation. These libraries can be easily imported and installed using Python's pip package manager, and packages can be downloaded from the PyPI (Python Package Index) repository. 
3. Versatile uses: Python is used in various fields, including web development, data analysis, artificial intelligence, and scientific computing.
4. Extensive built-in objects and libraries: Python has numerous built-in composite objects, including lists, sets, and record-like dictionaries. Each of these objects provides a collection of methods that can be easily used for processing. Python also has a vast library containing tens of thousands of functions. These packages can be used for network communication, web integration, data processing, and hardware interaction. Since many of the necessary routines have already been written, programs can be developed much more quickly.
5. Most popular language selected by TIOBE in 2024: As Python's language share and popularity have increased, there is a very large user community, along with abundant materials and resources, making it easy to access and learn. Therefore, when collaborating, it is also very easy to find colleagues to work with.
![](/images/velog/f4b3d243e44c8ec1.png)


### Disadvantages:
1. Speed issues: 
- Python is an interpreted language, and because execution, compilation, and interpretation take place simultaneously, its execution speed may be slower than that of compiled languages such as JAVA or C++.
![](/images/velog/f2c4ae2c2c8a8851.png)
- Lines are executed one at a time by the interpreter. 
- It is a dynamically typed language, and because all data types are objects, it requires a large amount of computation at runtime. 
Therefore, these issues can become particularly noticeable when working with large datasets or performing complex calculations, so Python may not be suitable for applications where performance is important. Python has consistently been criticized for its chronic speed issues, and methods proposed to address them in Python include PyPy, Numba, and Cython.


2. Limitations in mobile development: Python has not achieved major success in mobile application development because it uses a lot of memory and is slow. Therefore, although there are several Python development tools for mobile apps, they are considerably more limited than frameworks for other languages. The situation is somewhat better on client desktops, but Python is still not very popular for frontend applications.


## Standard and/or Roadmap of the language
Python has evolved through a process called PEPs (Python Enhancement Proposals). PEPs include design documents, informational documents, and proposals for new features aimed at improving Python. The standardization and direction of Python's development are determined by the Python developer community and the Python Software Foundation. 
Regarding Python's future development, Guido van Rossum and members of the Python development team stated in an interview on the Microsoft Reactor channel two years ago that they are skeptical about Python 4 because they experienced some difficulties during the migration from Python 2 to Python 3, particularly when moving from the previous version to 3.0.


In an interview 22 years ago, it was mentioned that improving the Global Interpreter Lock (GIL) for threads was being considered, and that a multiple sub-interpreter project had been pursued to address it. However, as Python moved toward approving PEP 703 in 2023, the proposal to "Make the GIL Optional in C Python," the removal of the GIL eliminated a major obstacle to multithreading, allowing Python to become a true multicore language and greatly improving the performance of workloads that utilize parallelism. This is expected to improve performance in web servers, real-time data processing, and graphical user interfaces, while allowing Python developers to use more complex parallel programming techniques more easily.


Mohan's article on Medium about how next-generation Python programming will be shaped mentions improved performance, new features and syntax improvements, enhanced tools, and easier community collaboration. 
In particular, regarding Python performance improvements, Volumetric Optimization optimizes memory usage, reducing the amount of memory occupied and improving overall performance. For parallel processing, it provides improved support for multi-threading and multi-core architectures, enabling the full use of hardware potential. The article also proposes JIT (Just-In-Time) compilation, which dynamically compiles Python code to increase execution speed. In addition, it suggests that improved tools will introduce new and enhanced tools for code formatting, debugging, and testing, making it easier for developers to write clean and maintainable code.
Based on improved performance, new features, and an improved developer experience, these changes are expected to bring innovation to writing Python code and open up new possibilities for building powerful applications.


Currently, various proposals for solving Python's speed issues are actively being discussed in the PEP process, and this has become an important issue in the future development of Python. Based on improved performance, new features, and an improved developer experience, Python will continue to provide new possibilities for building powerful applications.



## Famous open source softwares using the language
### [Pandas]
Pandas is an open-source library that provides high-performance, easy-to-use data structures and data analysis tools for the Python programming language. It began to be developed by Wes McKinney in 2008 and was created for financial data analysis, but it has since become widely used in various fields.


The core features of Pandas are as follows:


1. Data structures: Pandas primarily uses two types of data structures.
- Series: Similar to a one-dimensional array, it can store values of a single data type.
- DataFrame: A two-dimensional table that can contain columns with different data types. It can be considered similar to an Excel spreadsheet or an SQL table.


2. Data manipulation and processing: Pandas provides various functions for easily manipulating, organizing, and analyzing data. These include data filtering, sorting, grouping, merging, and joining.


3. Handling missing values: Pandas provides functions for easily finding and handling missing values. This makes it possible to clean data and prepare it for analysis.


4. File input and output: Pandas provides functions for reading and writing data in various file formats, including CSV, Excel, SQL databases, and HDF5.


5.Time-series data processing: For analyzing data over time, Pandas provides functions for easily handling time-series data. This is useful in fields such as stock market data analysis.


Pandas is an essential tool for efficiently processing and analyzing data in various fields, including data science, financial analysis, and web data analysis. By using it with Python, complex data analysis tasks can be performed conveniently.


![](/images/velog/6aea5b4b22a2b76d.png)


Currently, pandas AI is being developed by combining LLMs with the powerful Pandas, enabling data structures and analysis tools to be handled through natural language. As a result, accessibility to data preprocessing and visualization using Python's Pandas is gradually increasing. This is expected to bring about a professional change in which the data analyst profession will no longer be divided into data analysts and data coders; instead, a single data analyst will be able to issue commands as needed, like JARVIS, and more easily preprocess and visualize the required data. 


pandas AI github: https://github.com/Sinaptik-AI/pandas-ai


--------------


# Which companies use it?
- The companies were selected based on whether they use Python, develop AI, and offer opportunities to work on topics that I might find interesting.
- Even after getting a job, I want to create technologies I like and work with people similar to me to build and discuss new things and fun ideas, such as transferring technology from Silicon Valley companies, pursuing mergers and acquisitions, or extending existing technologies. 


## Indeed Python developer/ AI developer search results
![](/images/velog/57efb7e086cf3ba6.png)



## Meta AI Research Scientist - Vision, Language and AI - FAIR job posting
![](/images/velog/80ca9b427d3251a6.png)


![](/images/velog/a9f7e6d6f43d142a.png)


![](/images/velog/05f84ced1da33a31.png)



## Facebook Meta developer recruitment
link: https://www.indeed.com/viewjob?jk=5656e5565bc39146&tk=1hq2oremlk56s836&from=serp&vjs=3
![](/images/velog/ee8a75d955f3ddd2.png)


![](/images/velog/a8bd35ee9f58b852.png)


## Tesla bot Python Generalist
link: https://www.tesla.com/careers/search/job/python-generalist-tesla-bot-217557
![](/images/velog/8f8fbd66fbc21e97.png)


![](/images/velog/35a6a19565a75c0b.png)



Indeed's search results show that major Silicon Valley companies are looking for Python developers who can work with and conduct research in AI. In addition to the companies found through those search results, I also see a need for Python developers at Silicon Valley companies where I could pursue the work I want to do and the work that looks interesting to me.


---------------


# What type of developer do I want to be?


As Professor Lee Seong-won explained, and through activities such as team projects, starting a business, RAGchain, ideathons, Kaggle, and Dacon, I realized that the game I want to play is the entire process of starting from a blank page, directly bringing my ideas to life, and validating them as a business while creating synergy with teammates who value Agile—rather than simply receiving a specification and carrying out predetermined development tasks. 


As these experiences have accumulated, I have become interested in the fact that I can now do things I was previously unable to do. And bringing my imagination to life is incredibly fun. 


The stories of defining a problem you want to solve through tools like Phind, GitHub, and Slack, starting on a small scale, and eventually becoming popular tools used by countless people make my heart swell with excitement. 
I also want to implement brilliant and fun ideas that can define and solve problems, starting as jokes with Nerds. Alternatively, I want to use Python as a tool to quickly bring interesting ideas I come up with throughout my life to life. Whether or not I start a business based on the things I want to do, I want to work at a company where I can create new things, build from a blank page, and achieve self-realization, and I want to make things that are fun and interesting to build.


>
I want to become a programmer who uses programming skills to solve problems and turn them into businesses.



# Conclusion


- I want to use Python as my primary language to create and design AI-related ideas, gradually broaden my perspective, and, when I encounter Python's limitations, either use another language alongside it or switch fields.


>
Sources:
1. Language rankings: https://www.tiobe.com/tiobe-index/
2. Silicon Valley job postings: https://kr.indeed.com/
3. Speed comparison of programming languages: https://github.com/niklas-heer/speed-comparison
4. Interview with Guido van Rossum: https://www.linuxadictos.com/ko/guido-van-rossum%EC%9D%80-%ED%8C%8C%EC%9D%B4%EC%8D%AC-4-0%EC%9D%B4-%EB%8F%84%EC%B0%A9%ED%95%98%EC%A7%80-%EC%95%8A%EC%9D%84-%EC%88%98-%EC%9E%88%EB%8B%A4%EA%B3%A0-%EB%A7%90%ED%95%A9%EB%8B%88%EB%8B%A4..html
5. GIL removal: https://discuss.python.org/t/a-steering-council-notice-about-pep-703-making-the-global-interpreter-lock-optional-in-cpython/30474
