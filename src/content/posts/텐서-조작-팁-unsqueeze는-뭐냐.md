---
title: "텐서 조작 팁 - unsqueeze는 뭐냐?"
pubDatetime: 2025-05-12T11:54:15.892Z
description: "unsqueeze는 PyTorch에서 텐서에 새로운 차원(길이 1인 축)을 추가하는 함수입니다.예를 들어,  quantized_f0의 shape이 (1703,)라면,  quantized_f0.unsq"
category: "Data & ML"
canonicalURL: "https://velog.io/@minsing-jin/텐서-조작-팁-unsqueeze는-뭐냐"
velogSeries: ["ML"]
---

![](/images/velog/b13da3f75a4ebf77.png)

# 텐서 조작 팁
https://sputnik-kr.tistory.com/229

# unsqueeze는 뭐냐?

`unsqueeze`는 PyTorch에서 **텐서에 새로운 차원(길이 1인 축)을 추가하는 함수**입니다.  
예를 들어,  
- `quantized_f0`의 shape이 `(1703,)`라면,  
- `quantized_f0.unsqueeze(0)`을 하면 shape이 `(1, 1703)`이 됩니다[2][3][4][7].

이렇게 하면 기존에 없던 batch 차원이 생겨서,  
- `[1703]` → `[1][1703]`  
즉, **배치가 1개인 시퀀스**처럼 사용할 수 있습니다.

### 왜 쓰나?
- 딥러닝 모델(특히 Conv1d, RNN 등)은 입력에 batch 차원이 있기를 기대합니다.
- 데이터의 차원을 맞추거나, 연산(broadcasting)이나 네트워크 입력을 위해 자주 사용합니다[4][5][7].

### 예시
```python
import torch
x = torch.tensor([1, 2, 3, 4])       # shape: (4,)
x1 = x.unsqueeze(0)                  # shape: (1, 4)
x2 = x.unsqueeze(1)                  # shape: (4, 1)
```
- `unsqueeze(0)`은 맨 앞에 차원을 추가,  
- `unsqueeze(1)`은 두 번째 위치에 차원을 추가합니다.

---

**정리:**  
`unsqueeze`는 텐서에 새로운 차원을 추가해 shape을 바꿔주는 함수입니다.  
딥러닝에서 배치 차원 등을 맞출 때 필수적으로 사용합니다[2][3][4][5][7].

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
