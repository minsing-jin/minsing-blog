---
title: What is nn.Embedding
pubDatetime: 2025-05-12 11:40:56.093000+00:00
description: Motivation\nMy understanding of the concept of embedding is that natural language or entities are numerically placed in an embedding space according to the semantic similarity desired by the user.\n\nBut rather than passing natural-language lyrics directly through nn.Embedding, are the lyrics already v
category: Data & ML
tags: []
language: en
translationOf: nn-embedding이란
translationStatus: approved
draft: false
velogSeries:
- ML
---

# Motivation
My understanding of the concept of embedding is that natural language or entities are numerically placed in an embedding space according to the semantic similarity desired by the user. 


But rather than passing natural-language lyrics directly through nn.Embedding, is it passed through in a tensor state where the lyrics have already been vectorized?


# Lexical embedding method
[The embedding process - Embedding layer approach to embedding](https://tutorials.pytorch.kr/beginner/nlp/word_embeddings_tutorial.html?_gl=1*ety1mu*_ga*NTA5MzY4Nzc3LjE3NDY0MjkxMTg.*_ga_L5NC8SBFPY*czE3NDcwMzQ3MzMkbzEkZzAkdDE3NDcwMzQ3MzMkajYwJGwwJGgw*_ga_LEHG248408*czE3NDcwMzQ3MzQkbzEkZzAkdDE3NDcwMzQ3MzQkajYwJGwwJGgw)


# Background 
### What is embedding


### What is tokenization



### How nn.Embedding works
- It creates a lookup table for "indices"
- For tokens (whether they have been numerically encoded or not), it assigns arbitrary tensor values L for each index


Lyrics → tokenizer → a tokenizer for g2p phonemes rather than a general-purpose one
f0 has 128 levels

Frame → time
The 128 levels are embedded as pitch
It is not based on time in the first place; this is an incorrect approach


Embedding process
[Melody]
1. Tokenize the 128 types of levels (pitch) discretely divided by frame (time)


ex) f0 divided into 20 ms intervals


| Stage       | Description                                                            |
|-------------|------------------------------------------------------------------------|
| Original sequence | Do   Re   Mi   Mi   Si   Fa   Do                                      |
| Tokenization      | 0    1    2    2    4    5    0   → Converted to integer indices       |
| Through embedding | Each token index is converted into an embedding vector (e.g.: vec1, vec2, ..., vecN) |
| Embedding result   | vec0 vec1 vec2 vec2 vec4 vec5 vec0 → Semantic vector for each token    |
| Mean Pooling | The mean of the embedding vectors for the entire sequence is calculated and reduced to a vector of length 1 |
| Final output   | Mean embedding vector (e.g.: mean(vec0, vec1, vec2, vec2, vec4, vec5, vec0)) |





- The result is a representation of Do Re Mi Mi Si Fa Do
- The vectors produced are each mapped to the numerically encoded Do, Re, Mi, Mi, Si, Fa, and Do.
 
### What is a lookup table
- Vector representations for each "index" of the tokens



![](/images/velog/7f13daafd24afbe2.png)




```python
CONTEXT_SIZE = 2
EMBEDDING_DIM = 10
# 셰익스피어 소네트(Sonnet) 2를 사용하겠습니다.
test_sentence = """When forty winters shall besiege thy brow,
And dig deep trenches in thy beauty's field,
Thy youth's proud livery so gazed on now,
Will be a totter'd weed of small worth held:
Then being asked, where all thy beauty lies,
Where all the treasure of thy lusty days;
To say, within thine own deep sunken eyes,
Were an all-eating shame, and thriftless praise.
How much more praise deserv'd thy beauty's use,
If thou couldst answer 'This fair child of mine
Shall sum my count, and make my old excuse,'
Proving his beauty by succession thine!
This were to be new made when thou art old,
And see thy blood warm when thou feel'st it cold.""".split()
# 원래는 입력을 제대로 토큰화(tokenize) 해야하지만 이번엔 간소화하여 진행하겠습니다.
# 튜플로 이루어진 리스트를 만들겠습니다. 각 튜플은 ([ i-CONTEXT_SIZE 번째 단어, ..., i-1 번째 단어 ], 목표 단어)입니다.
ngrams = [
    (
        [test_sentence[i - j - 1] for j in range(CONTEXT_SIZE)],
        test_sentence[i]
    )
    for i in range(CONTEXT_SIZE, len(test_sentence))
]
# 첫 3개의 튜플을 출력하여 데이터가 어떻게 생겼는지 보겠습니다.
print(ngrams[:3])

vocab = set(test_sentence)
word_to_ix = {word: i for i, word in enumerate(vocab)}


class NGramLanguageModeler(nn.Module):

    def __init__(self, vocab_size, embedding_dim, context_size):
        super(NGramLanguageModeler, self).__init__()
        self.embeddings = nn.Embedding(vocab_size, embedding_dim)
        self.linear1 = nn.Linear(context_size * embedding_dim, 128)
        self.linear2 = nn.Linear(128, vocab_size)

    def forward(self, inputs):
        embeds = self.embeddings(inputs).view((1, -1))
        out = F.relu(self.linear1(embeds))
        out = self.linear2(out)
        log_probs = F.log_softmax(out, dim=1)
        return log_probs


losses = []
loss_function = nn.NLLLoss()
model = NGramLanguageModeler(len(vocab), EMBEDDING_DIM, CONTEXT_SIZE)
optimizer = optim.SGD(model.parameters(), lr=0.001)

for epoch in range(10):
    total_loss = 0
    for context, target in ngrams:

        # 첫번째. 모델에 넣어줄 입력값을 준비합니다. (i.e, 단어를 정수 인덱스로
        # 바꾸고 파이토치 텐서로 감싸줍시다.)
        context_idxs = torch.tensor([word_to_ix[w] for w in context], dtype=torch.long)

        # 두번째. 토치는 기울기가 *누적* 됩니다. 새 인스턴스를 넣어주기 전에
        # 기울기를 초기화합니다.
        model.zero_grad()

        # 세번째. 순전파를 통해 다음에 올 단어에 대한 로그 확률을 구합니다.
        log_probs = model(context_idxs)

        # 네번째. 손실함수를 계산합니다. (파이토치에서는 목표 단어를 텐서로 감싸줘야 합니다.)
        loss = loss_function(log_probs, torch.tensor([word_to_ix[target]], dtype=torch.long))

        # 다섯번째. 역전파를 통해 기울기를 업데이트 해줍니다.
        loss.backward()
        optimizer.step()

        # tensor.item()을 호출하여 단일원소 텐서에서 숫자를 반환받습니다.
        total_loss += loss.item()
    losses.append(total_loss)
print(losses)  # 반복할 때마다 손실이 줄어드는 것을 봅시다!

# "beauty"와 같이 특정 단어에 대한 임베딩을 확인하려면,
print(model.embeddings.weight[word_to_ix["beauty"]])
```




> [Refer to the PyTorch Korean Gallery code](https://tutorials.pytorch.kr/beginner/nlp/word_embeddings_tutorial.html?_gl=1*ety1mu*_ga*NTA5MzY4Nzc3LjE3NDY0MjkxMTg.*_ga_L5NC8SBFPY*czE3NDcwMzQ3MzMkbzEkZzAkdDE3NDcwMzQ3MzMkajYwJGwwJGgw*_ga_LEHG248408*czE3NDcwMzQ3MzQkbzEkZzAkdDE3NDcwMzQ3MzQkajYwJGwwJGgw)
