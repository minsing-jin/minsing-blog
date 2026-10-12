---
title: When Returning Multiple Values in Functional Programming with the `apply` Function
pubDatetime: 2023-11-17 07:13:57.495000+00:00
description: What happens if the function passed as the `apply` parameter in functional programming returns multiple values? -> Create a zip and unpack it!
category: Programming & CS
tags: []
language: en
translationOf: apply-함수형-프로그래밍에서-여러개의-값을-return할때
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/3e1670d62b0a0777.png)


# Situation
Here is more detailed code related to the text above!
```python
result = make_passages.apply(self.__make_passages_and_retrieval_gt, axis=1)
make_passages['passages'], self.ingest_data['retrieval_gt'], self.ingest_data['retrieval_gt_order'] = zip(*result)
            
            
def __make_passages_and_retrieval_gt(self, row):
    passages = []
    retrieval_gt = []
    retrieval_gt_ord = []
    ord_rank = 0
    for passage_idx, passage_text in enumerate(row['passage_text']):
        passages.append(Passage(
            id=str(row['query_id']) + '_' + str(passage_idx),
            content=passage_text,
            filepath=self.file_path,
            metadata_etc={
                'url': row['url'][passage_idx]
            }
        ))
        # Make retrieval gt and retrieval gt order.(27 is max count of passage texts in v2.1)
        if row['is_selected'][passage_idx] == 1:
            retrieval_gt.append(str(row['query_id']) + '_' + str(passage_idx))
            retrieval_gt_ord.append(27 - ord_rank)
            ord_rank += 1

    return passages, retrieval_gt, retrieval_gt_ord
```
How can you receive the multiple values returned by the `self.__make_passages_and_retrieval_gt` function?



# Solution
```python
result = make_passages.apply(self.__make_passages_and_retrieval_gt, axis=1)
make_passages['passages'], self.ingest_data['retrieval_gt'], self.ingest_data['retrieval_gt_order'] = zip(*result)
```
As in the code above, you can use zip and unpacking~
