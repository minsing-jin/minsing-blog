---
title: Creating multiple dataframes with apply
pubDatetime: 2023-11-17 07:13:39.936000+00:00
description: This is an article organizing the ideas I came to realize while thinking about how to write code that is Pythonic, readable, and efficient. I unpacked it with Zip.
category: Programming & CS
tags: []
language: en
translationOf: apply로-여러개-dataframe-만들기
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/16fb2d754aba2f72.png)


This is an article organizing the ideas I came to realize while thinking about how to write code that is Pythonic, readable, and efficient.


# Before
```python
result = make_passages.apply(self.__make_passages_and_retrieval_gt, axis=1)
        make_passages['passages'] = [passage[0] for passage in result]
        passages = [passage for lst_passage in make_passages['passages'] for passage in lst_passage]

        # Create retrieval_gt and retrieval_gt_order
        self.qa_data['retrieval_gt'] = [passage[1] for passage in result]
        self.qa_data['retrieval_gt_order'] = [passage[2] for passage in result]
```


# After
I unpacked it with Zip.
```python
result = make_passages.apply(self.__make_passages_and_retrieval_gt, axis=1)
make_passages['passages'], self.qa_data['retrieval_gt'], self.qa_data['retrieval_gt_order'] = zip(*result)

# Flatten the list of passages
passages = [passage for lst_passage in make_passages['passages'] for passage in lst_passage]
```
