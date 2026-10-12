---
title: Tensor Manipulation Tips - What is unsqueeze?
pubDatetime: 2025-05-12 11:54:15.892000+00:00
description: unsqueeze is a function in PyTorch that adds a new dimension (an axis of length 1) to a tensor. For example, if the shape of quantized_f0 is (1703,), quantized_f0.unsq
category: Data & ML
tags: []
language: en
translationOf: 텐서-조작-팁-unsqueeze는-뭐냐
translationStatus: approved
draft: false
velogSeries:
- ML
---

![](/images/velog/b13da3f75a4ebf77.png)


# Tensor Manipulation Tips
https://sputnik-kr.tistory.com/229


# What is unsqueeze?


`unsqueeze` is a function in PyTorch that **adds a new dimension (an axis of length 1) to a tensor**.  
For example,  
- if the shape of `quantized_f0` is `(1703,)`,  
- applying `quantized_f0.unsqueeze(0)` changes its shape to `(1, 1703)`.[2][3][4][7]


This creates a batch dimension that did not exist before, so  
- `[1703]` → `[1][1703]`  
In other words, it can be used like a **sequence with one batch**.


### Why use it?
- Deep learning models (especially Conv1d, RNN, etc.) expect the input to have a batch dimension.
- It is frequently used to match the dimensions of data or for operations (broadcasting) and network inputs.[4][5][7]


### Example
```python
import torch
x = torch.tensor([1, 2, 3, 4])       # shape: (4,)
x1 = x.unsqueeze(0)                  # shape: (1, 4)
x2 = x.unsqueeze(1)                  # shape: (4, 1)
```
- `unsqueeze(0)` adds a dimension at the very beginning,  
- `unsqueeze(1)` adds a dimension at the second position.


---


**Summary:**  
`unsqueeze` is a function that changes a tensor's shape by adding a new dimension.  
It is essential in deep learning for matching batch dimensions and the like.[2][3][4][5][7]


Citations:
[1] https://pplx-res.cloudinary.com/image/private/user_uploads/35150927/dcfdae12-8bbe-4f0b-89ae-d9a629d4a871/image.jpg
[2] https://pplx-res.cloudinary.com/image/private/user_uploads/35150927/dcfdae12-8bbe-4f0b-89ae-d9a629d4a871/image.jpg
[3] https://pytorch.org/docs/stable/generated/torch.unsqueeze.html
[4] https://stackoverflow.com/questions/57237352/what-does-unsqueeze-do-in-pytorch
[5] https://www.codecademy.com/resources/docs/pytorch/tensors/unsqueeze
[6] https://www.codecademy.com/resources/docs/pytorch/tensor-operations/unsqueeze
[7] https://www.datasciencebyexample.com/2023/05/19/squeeze-and-unsqueeze-in-pytorch/
[8] https://dnmtechs.com/understanding-the-unsqueeze-function-in-pytorch/
[9] https://www.projectpro.io/recipes/unsqueeze-torch-tensor
[10] https://blog.naver.com/je_un/222297587260
[11] https://codemax.app/snippet/what-does-unsqueeze-do-in-pytorch-in-python/
[12] https://stackoverflow.com/questions/57237352/what-does-unsqueeze-do-in-pytorch/57237378
[13] https://www.tutorialspoint.com/how-to-squeeze-and-unsqueeze-a-tensor-in-pytorch
[14] https://iifx.dev/en/articles/332257550
[15] https://sanghyu.tistory.com/86
[16] https://www.slingacademy.com/article/pytorch-squeezing-and-unsqueezing-tensors/
[17] https://stackoverflow.com/questions/57237352/what-does-unsqueeze-do-in-pytorch/65831759
[18] https://www.youtube.com/watch?v=VTryujXrMOs
[19] https://blog.csdn.net/chengyq116/article/details/106962842
[20] https://researchdatapod.com/understanding-unsqueeze-in-pytorch-a-beginner-friendly-guide/
[21] https://myscale.com/blog/mastering-tensor-manipulation-pytorch-guide-torch-unsqueeze/
[22] https://pytorch.org/docs/stable/generated/torch.Tensor.unsqueeze.html


---
Answer from Perplexity: pplx.ai/share
