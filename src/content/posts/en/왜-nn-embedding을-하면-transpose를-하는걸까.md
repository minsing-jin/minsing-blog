---
title: Why do we transpose when using nn.Embedding?
pubDatetime: 2025-05-12 11:34:32.990000+00:00
description: The shape after summing the lyrics encoder and melodyU encoder is (1, 192, 1) - (b, h, time(seq_len)). These undergo FFT operations again in the enhanced condition encoder, but likewise nn
category: Data & ML
tags: []
language: en
translationOf: 왜-nn-embedding을-하면-transpose를-하는걸까
translationStatus: approved
draft: false
velogSeries:
- ML
---

![](/images/velog/a17e9d868e36be2a.png)


# Motivation
The shape after summing the lyrics encoder and melodyU encoder is (1, 192, 1) - (b, h, time(seq_len)). These are subjected to FFT operations again in the enhanced condition encoder, but when nn.Embedding and transpose were applied in the same way, it produced a clear error.


# Problem Definition and Solution Summary
1. The embedded output does not need to pass through an nn.Embedding layer. + Definition of nn.Embedding

	- nn.Embedding creates a lookup table based on per-token indices. Therefore, the summation of the lyrics representation and melodyU representation is already the sum of the outputs of the Embedding layer; since they are floats and have no indices, nn.Embedding cannot be applied.



2. transpose is used to normalize the data again after passing through the nn.Embedding layer
	- When [b,h,t] passes through the nn.Embedding layer, it becomes [b,t,h], so transpose is used to normalize it again.
   	- It must be [b,h,t] when passing through the ffn of the transformer encoder.



# Detailed Explanation


PyTorch's `nn.Conv1d` layer expects the input tensor to have the shape **[batch, channels, length]**.  
However, tensors that have passed through an embedding in natural language processing and similar tasks usually have the shape **[batch, length, embedding_dim]** (that is, [batch, sequence length, embedding dimension]).


For example,  
- Tensor after embedding: `[batch, time, hidden]`  
- Input expected by Conv1d: `[batch, hidden, time]`


Therefore, **before inputting data into Conv1d, you must use `transpose` or `permute` to switch the order of the two dimensions**.  
This allows Conv1d to recognize the embedding dimension as the channels and correctly perform the convolution operation while the kernel follows the sequence length[6][8].


> "In pytorch your input shape of[6] should actually be[6] where the feature length is represented by the channel dimension and sequence length is the length dimension. Then you can define your conv1d with in/out channels of 768 and 100 respectively to get an output of[6].  
> ... you can convert it to the correct shape with Tensor.transpose."[6]


In other words,  
- **transpose is essential for converting the embedding result ([batch, seq_len, hidden]) into the input expected by Conv1d ([batch, hidden, seq_len]).**


This is precisely why transpose is performed before Conv1d.


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
# Basis for the shape changing when embedding
The reason that the shape of a tensor passing through an embedding layer becomes `[batch, length, embedding_dim]` lies in the operating method of the embedding layer and the structure of natural language processing data.


### 1. Input and Output Structure of the Embedding Layer


- The embedding layer receives an **integer index sequence** (e.g., word indices) as input.
- Input shape: `(batch_size, sequence_length)`  
  - `batch_size`: the number of sentences (or samples) processed at once  
  - `sequence_length`: the number of tokens (words) in each sentence


- The embedding layer converts each index into a vector from the embedding table.
- Output shape: `(batch_size, sequence_length, embedding_dim)`  
  - `embedding_dim`: the dimension of the vector representing each word


> "Embedding() receives a 2D integer tensor whose shape is (number of samples, input_length). Here, each sample is the result of integer encoding and is a sequence of integers. Embedding() performs word embedding and returns a 3D floating-point tensor whose shape is (number of samples, input_length, embedding word dimentionality)."  
> - [Wikidocs, Keras Embedding Layer Description][5][6]


### 2. Example of Using an Embedding Layer in Natural Language Processing


For example,  
- Input: `[[1,[2][3], [4, 5,6]]` (batch_size=2, sequence_length=3)
- If the embedding dimension (embedding_dim)=8  
- Output: `(2, 3, 8)`  
  - Each word index is converted into an 8-dimensional vector


### 3. Why Does This Structure Result?


- **Each sentence (sample) consists of multiple words (tokens)**  
- **Each word is converted into a single embedding vector**  
- Therefore,  
  - First dimension: batch (sentences)  
  - Second dimension: sequence length (number of tokens)  
  - Third dimension: embedding vector dimension


### 4. Evidence from Official Documentation and Textbooks


- "The Embedding layer returns a 3D floating-point tensor with the shape (samples, sequence_length, embedding_dimensionality)."  
  [Wikidocs][5][6]
- "The embedding layer converts each index in the input sequence into a vector from the embedding table and outputs it in the form (batch, sequence length, embedding dimension)."  
  [simling.tistory][3][5]


---


**Summary:**  
When the input is `[batch, sequence_length]`, the embedding layer converts each index into an embedding vector and returns a tensor in the form `[batch, sequence_length, embedding_dim]`. This structure consists of each sentence (batch), each word (sequence), and each embedding vector (embedding dimension) in natural language processing[5][6][3].


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
