---
title: "apply로 여러개 dataframe 만들기"
pubDatetime: 2023-11-17T07:13:39.936Z
description: "어떻게 하면 pythonic하고, 가독성이 좋으며 효율적인 코드를 만들 수 있을까하면서 깨달은 아이디어들을 정리하는 글이다.Zip으로 unpack했다."
category: "고오급 스킬들 공략집"
canonicalURL: "https://velog.io/@minsing-jin/apply로-여러개-dataframe-만들기"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/16fb2d754aba2f72.png)

어떻게 하면 pythonic하고, 가독성이 좋으며 효율적인 코드를 만들 수 있을까하면서 깨달은 아이디어들을 정리하는 글이다.

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
Zip으로 unpack했다.
```python
result = make_passages.apply(self.__make_passages_and_retrieval_gt, axis=1)
make_passages['passages'], self.qa_data['retrieval_gt'], self.qa_data['retrieval_gt_order'] = zip(*result)

# Flatten the list of passages
passages = [passage for lst_passage in make_passages['passages'] for passage in lst_passage]
```
