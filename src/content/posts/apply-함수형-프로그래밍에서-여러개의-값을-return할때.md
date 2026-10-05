---
title: "apply 함수형 프로그래밍에서 여러개의 값을 return할때"
pubDatetime: 2023-11-17T07:13:57.495Z
description: "apply함수형 프로그래밍에서 apply parameter에 들어가는 함수가 여러개 값을 return하면? -> zip으로 만들어서 언패킹하자!"
category: "고오급 스킬들 공략집"
canonicalURL: "https://velog.io/@minsing-jin/apply-함수형-프로그래밍에서-여러개의-값을-return할때"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/3e1670d62b0a0777.png)

# 상황
윗글에 대한 더 detail한 코드다!
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
`self.__make_passages_and_retrieval_gt` function이 여러개의 값을 return할때 어떻게 받을 수 있는가?


# 해결
```python
result = make_passages.apply(self.__make_passages_and_retrieval_gt, axis=1)
make_passages['passages'], self.ingest_data['retrieval_gt'], self.ingest_data['retrieval_gt_order'] = zip(*result)
```
위에 코드처럼 zip을 하고, 언패킹하면 됩니다~
