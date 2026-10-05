---
title: "왜 nn.Embedding을 하면 transpose를 하는걸까?"
pubDatetime: 2025-05-12T11:34:32.990Z
description: "lyrics encoder과 melodyU encoder를 Summation한 뒤의 shape는 (1, 192, 1) - (b, h, time(seq_len))이다. 요녀석들은 enhanced condition encoder에서 다시 FFT 연산을 하는데 동일하게 nn"
category: "Data & ML"
canonicalURL: "https://velog.io/@minsing-jin/왜-nn.Embedding을-하면-transpose를-하는걸까"
velogSeries: ["ML"]
---

![](/images/velog/a17e9d868e36be2a.png)

# 동기
lyrics encoder과 melodyU encoder를 Summation한 뒤의 shape는 (1, 192, 1) - (b, h, time(seq_len))이다. 요녀석들은 enhanced condition encoder에서 다시 FFT 연산을 하는데 동일하게 nn.Embedding과 transpose를 해주었더니 시원하게 오류가 나온다.

# 문제정의 및 해결 요약
1. 임베딩된 산출물은 nn.Embedding layer를 통과할 필요가 없음. + nn.Embedding의 정의

	- nn.Embedding은 token별 인덱스를 기반으로 lookup table을 만드는 녀석이다. 고로 lyrics representation과 melodyU representation의 summation은 이미 Embedding의 결과물끼리 더한것이므로 float에다가 인덱스도 없으므로 nn.Embedding을 할수 없다.


2. transpose는 nn.Embedding layer를 통과해서 다시 정상화 시키기 위한 녀석
	- [b,h,t]가 nn.Embedding layer를 통과하면 [b,t,h]가 되어서 다시 정상화 시키기 위해서 transpose를 시킨다.
   	- transformer encoder의 ffn이 통과할때는 [b,h,t]로 되어야함.


# 세부설명

PyTorch의 `nn.Conv1d` 레이어는 입력 텐서의 shape이 **[batch, channels, length]** 형태이길 기대합니다.  
하지만 자연어 처리 등에서 임베딩을 거친 텐서는 보통 **[batch, length, embedding_dim]** (즉, [배치, 시퀀스 길이, 임베딩 차원]) 형태로 나옵니다.

예를 들어,  
- 임베딩 후 텐서: `[batch, time, hidden]`  
- Conv1d 기대 입력: `[batch, hidden, time]`

따라서, **Conv1d에 입력하기 전에 `transpose` 또는 `permute`를 사용해 두 차원의 순서를 바꿔줘야 합니다**.  
이렇게 해야만 Conv1d가 임베딩 차원을 채널로 인식하고, 시퀀스 길이를 커널이 따라가며 합성곱 연산을 올바르게 수행할 수 있습니다[6][8].

> "In pytorch your input shape of[6] should actually be[6] where the feature length is represented by the channel dimension and sequence length is the length dimension. Then you can define your conv1d with in/out channels of 768 and 100 respectively to get an output of[6].  
> ... you can convert it to the correct shape with Tensor.transpose."[6]

즉,  
- **transpose는 임베딩 결과([batch, seq_len, hidden])를 Conv1d가 기대하는 입력([batch, hidden, seq_len])으로 맞추기 위해 반드시 필요합니다.**

이것이 바로 Conv1d 앞에서 transpose를 하는 이유입니다.

Citations:
[1] https://cumulu-s.tistory.com/29
[2] https://pytorch.org/docs/stable/generated/torch.nn.ConvTranspose1d.html
[3] https://velog.io/@gilson/View-and-Reshape-VS-permute-and-transpose
[4] https://jisuhan.tistory.com/128
[5] https://westlife0615.tistory.com/257
[6] https://stackoverflow.com/questions/62372938/understanding-input-shape-to-pytorch-conv1d
[7] https://dacon.io/forum/406022
[8] https://discuss.pytorch.org/t/understanding-input-shape-to-pytorch-conv1d/85429
[9] https://www.thespacemoon.com/2021/03/03/pytorch-view-reshape-transpose/
[10] https://sksdudtjs.tistory.com/50
[11] https://iamseungjun.tistory.com/15
[12] https://jimmy-ai.tistory.com/378
[13] https://stackoverflow.com/questions/69915792/pytorch-conv1d-gives-different-size-to-convtranspose1d
[14] https://wikidocs.net/64779
[15] https://imlim0813.tistory.com/58
[16] https://velog.io/@workhard/lstm-9.-pytorch-%EC%82%AC%EC%9A%A9%EB%B2%95
[17] https://wikidocs.net/217064
[18] https://leeejihyun.tistory.com/37

---
Answer from Perplexity: pplx.ai/share


---
# embedding하면 shape가 달라지는 근거
임베딩 레이어(Embedding Layer)를 거친 텐서의 shape이 `[batch, length, embedding_dim]`이 되는 이유는 임베딩 레이어의 동작 방식과 자연어 처리 데이터의 구조 때문입니다.

### 1. 임베딩 레이어의 입력과 출력 구조

- 임베딩 레이어는 **정수 인덱스 시퀀스**(예: 단어 인덱스)를 입력으로 받습니다.
- 입력 shape: `(batch_size, sequence_length)`  
  - `batch_size`: 한 번에 처리하는 문장(또는 샘플)의 개수  
  - `sequence_length`: 각 문장의 토큰(단어) 수

- 임베딩 레이어는 각 인덱스를 임베딩 테이블에서 벡터로 변환합니다.
- 출력 shape: `(batch_size, sequence_length, embedding_dim)`  
  - `embedding_dim`: 각 단어를 표현하는 벡터의 차원

> "Embedding()은 (number of samples, input_length)인 2D 정수 텐서를 입력받습니다. 이 때 각 sample은 정수 인코딩이 된 결과로, 정수의 시퀀스입니다. Embedding()은 워드 임베딩 작업을 수행하고 (number of samples, input_length, embedding word dimentionality)인 3D 실수 텐서를 리턴합니다."  
> - [위키독스, 케라스 임베딩 층 설명][5][6]

### 2. 자연어 처리에서 임베딩 레이어 사용 예시

예를 들어,  
- 입력: `[[1,[2][3], [4, 5,6]]` (batch_size=2, sequence_length=3)
- 임베딩 차원(embedding_dim)=8이라면  
- 출력: `(2, 3, 8)`  
  - 각 단어 인덱스가 8차원 벡터로 변환됨

### 3. 왜 이런 구조가 되는가?

- **각 문장(샘플)은 여러 단어(토큰)로 구성**  
- **각 단어는 하나의 임베딩 벡터로 변환**  
- 따라서,  
  - 첫 번째 차원: 배치(문장)  
  - 두 번째 차원: 시퀀스 길이(토큰 수)  
  - 세 번째 차원: 임베딩 벡터 차원

### 4. 공식 문서 및 교재 근거

- "Embedding 층은 크기가 (samples, sequence_length, embedding_dimensionality)인 3D 실수형 텐서를 반환한다."  
  [위키독스][5][6]
- "임베딩 레이어는 입력 시퀀스의 각 인덱스를 임베딩 테이블에서 벡터로 변환하여 (배치, 시퀀스 길이, 임베딩 차원) 형태로 출력한다."  
  [simling.tistory][3][5]

---

**정리:**  
임베딩 레이어는 입력이 `[batch, sequence_length]`일 때, 각 인덱스를 임베딩 벡터로 변환해 `[batch, sequence_length, embedding_dim]` 형태의 텐서를 반환합니다. 이 구조는 자연어 처리에서 각 문장(배치), 각 단어(시퀀스), 각 임베딩 벡터(임베딩 차원)로 구성되기 때문입니다[5][6][3].

Citations:
[1] https://tech.kakao.com/posts/585
[2] https://wikidocs.net/31379
[3] https://simpling.tistory.com/1
[4] https://ebbnflow.tistory.com/154
[5] https://ingu627.github.io/keras/keras_ch6_org_1/
[6] https://wikidocs.net/33793
[7] https://wikidocs.net/37001
[8] https://velog.io/@oilyhand_01/%EB%94%A5%EB%9F%AC%EB%8B%9D-%EA%B8%B0%EC%B4%88-14
[9] https://velog.io/@yenaryu/%EC%9E%90%EC%97%B0%EC%96%B4%EC%B2%98%EB%A6%AC-%EC%9E%91%EC%82%AC%EA%B0%80-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0
[10] https://heeya-stupidbutstudying.tistory.com/entry/DL-%EC%9E%90%EC%97%B0%EC%96%B4-%EC%B2%98%EB%A6%AC%EC%97%90%EC%84%9C%EC%9D%98-%EB%8B%A8%EC%96%B4-%ED%91%9C%ED%98%84-Word-Embedding
[11] https://blog.naver.com/iwin1203/222010971529
[12] https://aigaeddo.tistory.com/37
[13] https://www.youtube.com/watch?v=BbBCLPl0x_U
[14] https://www.ibm.com/kr-ko/think/topics/vector-embedding
[15] https://sjh9708.tistory.com/231
[16] https://dusanbaek.tistory.com/99
[17] https://wikidocs.net/22660
[18] https://cumulu-s.tistory.com/4
[19] https://soyoung-new-challenge.tistory.com/32

---
Answer from Perplexity: pplx.ai/share
