---
title: RAGchain benchmark Mr.tydi
pubDatetime: 2023-11-23 13:46:01.970000+00:00
description: Do you know Mr. TyDi?
category: Data & ML
tags: []
language: en
translationOf: mrtydi
translationStatus: approved
draft: false
velogSeries:
- RAGchain
---

# Mr.Tydi.


## Original tydi github link


[tydi github](https://github.com/google-research-datasets/tydiqa#download-the-dataset)


## Mr.tydi github link


[Mr.tydi github](https://github.com/castorini/mr.tydi#baselines-and-evaluation)


>
Mr. TyDi is a multi-lingual benchmark dataset built on [TyDi](https://arxiv.org/abs/2003.05002), covering eleven typologically diverse languages. It is designed for mono-lingual retrieval, specifically to evaluate ranking with learned dense representations. Mr. TyDi is licensed under the Apache License 2.0.



**Minsik's explanation)**


The performance of existing retrieval methods has only been measured in English, but retrieval performance has not been measured in other languages.


The selected passage or document may not contain information about the answer. The answer to a question may or may not be found in the passage of the selected article.


It is intended to evaluate the ranking of monolingual retrieval.


Based on the tydi dataset


### Purpose
>
The goal of this resource is to spur research in dense retrieval techniques in non-English languages, motivated by recent observations that existing techniques for representation learning perform poorly when applied to out-of-distribution data.
>
 This dataset can be viewed as the “openretrieval” condition of the TYDI multi-lingual question answering (QA) dataset (Clark et al., 2020), and “Mr” in Mr. TYDI stands for “multi-lingual retrieval”.
[reference](https://arxiv.org/abs/2108.08787)


**Minsik's summary)**
- Designed for monolingual retrieval that can cover the typology of various languages. In particular, it evaluates the ranking of dense representations.



--------


## Why create Mr.tydi instead of leaving the perfectly good tydi alone?


Mr.tydi was created based on the fact that the existing tydi dataset is insufficient. The explanation of why it is insufficient follows below.


### What is different about Mr.tydi?


According to the paper)


![](/images/velog/b4a319215ab6081e.png)



> This dataset can be viewed as the “open retrieval” condition of the TYDI multi-lingual question answering (QA) dataset (Clark et al., 2020), and “Mr” in Mr. TYDI stands for “multi-lingual retrieval”.
[reference](https://arxiv.org/abs/2108.08787)


tydi was created to address the limitations of tydi. Mr means multi-lingual, that is, multilingual retrieval. 


**Weaknesses)**
(1) The existing tydi is no more than a machine reading comprehension task, like the SQuAD dataset.


(2) The answers are short-answer responses. Many answers consist of only a single word. 


(3) Because all candidate passages are included as part of the dataset (in other words, an open-domain, open-retrieval setup should gather passages together from across the corpus, but the previous tydi was not open-domain-like because it had candidate passages for each query.)
-> In the part of the paper explaining tydi's weakness, “the dataset” refers to the query - answer - candidate passages



=> Mr.tydi can therefore be viewed as an extension of open-retrieval, and it was reconstructed to be more open-domain and open-retrieval-like using passages written as prose rather than short answers.



### huggingface(mr.tydi)


[castorini/mr-tydi · Datasets at Hugging Face](https://huggingface.co/datasets/castorini/mr-tydi)



## Significance of this dataset


Previously, the process ended after training a dataset that existed only in English, then using it for retrieval and evaluation. Mr.tydi, however, is a mono-lingual model specialized for each of 11 languages. Its significance lies in using it as a dataset for retrieval that performs well across all languages.


Mr.tydi is meaningful as a benchmark for evaluating non-English retrieval in the RAG we are developing.


--------


## How will it be applied as a benchmark to RAGchain?


### Passage characteristics


1. The answer passage and question are always written in the same language


2. The passages were taken from Wikipedia articles through Google search, and annotators were instructed to write them for queries that could not be answered by a snippet. 
The annotators directly created answers for each given top Wikipedia article, based on the minimum answer scope required to determine the relevancy of the passages for each article.
Therefore, the answer to a question may not be found in the passages taken from a Wikipedia article.
cf) A snippet is a brief summary of the webpage content for a search result


3. Data corresponding to different languages cannot be compared because it was used independently rather than as translations.


> According to the paper([reference](https://arxiv.org/abs/2108.08787))
> 
> 
> The weakness of TYDI from our perspective is that it is essentially a machine reading comprehension task like SQuAD (Rajpurkar et al., 2016) because candidate passages are all included as part of ***the dataset*** (i.e., the passages are from the top Wikipedia article returned by Google search). Instead, we need a resource akin to what QA researchers call the “open-domain” or “open-retrieval” task, where the problem involves retrieval from a much larger corpus (e.g., all of Wikipedia) (Chen et al., 2017). Thus, at a high level, Mr. TYDI can be viewed as an open-retrieval extension to TYDI.
> 


What is a positive passage?


- Passages containing the answer to the query


What is a negative passage?


- The top-30 candidate passage results retrieved by tuned BM25
- The positive passage may or may not be included.


Basis for considering the positive passage to be the retrieval_gt


1. Looking at the data format, positive passages were required in both the train and test sets, and only positive passages are included in the test set. Therefore, since the retrieval gt in the test set is the positive passage, the train set can also be considered to use the positive passage.
Also, otherwise, there is no suitable passage that could serve as the retrieval gt.
2. The paper states that 
annotators directly created answers for each given top Wikipedia article, based on the minimum answer scope required to determine the relevancy of the passages for each article.
Therefore, the answer to a question may not be found in the passages taken from a Wikipedia article.


> According to Hugging Face([castorini/mr-tydi](https://huggingface.co/datasets/castorini/mr-tydi))
”The negative examples from training set are sampled from the top-30 BM25 runfiles on each language.”
> 


### data format


### train set


```
{
  'query_id': '1',
  'query': 'When was quantum field theory developed?',
  'positive_passages': [
    {
      'docid': '25267#12',
      'title': 'Quantum field theory',
      'text': 'Quantum field theory naturally began with the study of electromagnetic interactions, as the electromagnetic field was the only known classical field as of the 1920s.'
    },
    ...
    ]
  'negative_passages': [
    {
      'docid': '346489#8',
      'title': 'Local quantum field theory',
      'text': 'More recently, the approach has been further implemented to include an algebraic version of quantum field ...'
    },
    ...
  ],
}
```


### test set


```
{
  'query_id': '0',
  'query': 'Is Creole a pidgin of French?',
  'positive_passages': [
    {
      'docid': '3716905#1',
      'title': '',
      'text': ''
    },
    ...
   ]
}
```


### Corpus(only train for retrieval)


This dataset stores documents of Mr. TyDi. To access the queries and judgments, please refer to **[castorini/mr-tydi](https://huggingface.co/datasets/castorini/mr-tydi)**.****


data format


```
{
  'docid': '25#0',
  'title': 'Autism',
  'text': 'Autism is a developmental disorder characterized by difficulties with social interaction and communication, ...'
}
```


---------


## Evaluation approaches that came to mind (reviewing example code using mr.tydi)


### Method 1.[Rejected]


A way to use negative passages would be to combine the negative passages and positive passage for each query, have retrieval retrieve from them as in qasper, and evaluate it.


question ⇒ query inputs


retrieval_gt ⇒ positive passage (input the list corresponding to the IDs)
passages ⇒ negative passage + positive passage →


<br>


**Conclusion)**


Since these are the same negative passages retrieved by BM25 retrieval for a query, is there any value in evaluating one passage using BM25 retrieval from among the passages ingested by combining the negative and positive passages again?
⇒ Ultimately, I do not think it is meaningful for BM25 retrieval to retrieve again from the top-k passages retrieved by BM25 retrieval from a large corpus.


However, it seems possible to compare the performance of a retrieval system created directly by the user with the top-k negative passages retrieved using the BM25 retrieval directly tuned for mr.tydi.


⇒ To do this, the corpus should be ingested, and based on this, the number of passages retrieved per query by the user's retrieval system should match the number of negative passages for the corresponding query in mr.tydi, after which they should be evaluated and compared individually.




### Method 2.(Adopted)


Ingest the entire corpus at once and then perform retrieval, as in strategyQA
⇒ Since the corpus does not have the IDs of passages for a query arranged in the same order as the data to be ingested, the entire corpus must be ingested every time.


Because we do not know where the retrieval gt is contained within the corpus


- retrieval_gt ⇒ positive passage
- question ⇒ query
- passage to ingest ⇒ corpus


⇒ For now, this is the most straightforward and suitable approach to adopt, and the mr.tydi examples and papers also appear to have used this method.



## Evaluate metric


**1. F1 (Tydi)**


**2. MRR@100(mean reciprocal rank) → a rank-aware metric**
- What is it ranking?
=> 
→ With bm25 retrieval having 100 hits, it takes the reciprocal of the rank of the retrieved item among the top-k, so the smaller the rank, the larger the value becomes, and then calculates the mean by adding the reciprocals of the ranks of the passages retrieved at the different positions. 


After checking the rank of the item retrieved by bm25 for the retrieval gt being sought and taking the reciprocal of that rank, this is → reciprocal rank
ex) If the item preferred by the user is 7th among 10 recommended items, the reciprocal rank is 1/7.
mrr is obtained by calculating the reciprocal RR for each different recommended item and then taking the mean


Then, we need to know the retrieval gt; how was the retrieval gt obtained in the paper? 
And when there are multiple positive passages that could be the retrieval gt, do the positive passages have rankings? If there is no ranking, how was the retrieval gt assigned when calculating mrr?
→ Since they are equivalent, that is, if they are items being sought, adding the reciprocals of the ranks of those positive passages and taking the mean will result in the mrr anyway, so MRR can be calculated even without ranks among the positive passages.


→ That is why the paper did not contain any information about the priority of the positive passages.
    
3. Recall@100


![](/images/velog/464798443e935630.png)



---------------


## Possible questions:
### (1) Are positive passages included in the negative passages (all of them)? 
⇒ Some are, and some are not. / There are more that are not.


### (2) What we are checking now is whether the corpus docid matches the passage


⇒ Yes. The docids of all passages in the train, dev, and test data are items that came from the corpus.


### (3) Then do the negative passages also all belong to the corpus? And if the negative passages for a query are the top 30 passages retrieved by bm25, then the positive passages are the passages most relevant to the query—by what criterion was this determined?
⇒ Was it a human editor, like in msmarco?
⇒ It can be inferred from the paper


> Annotators directly create answers for each given top Wikipedia article, based on the minimum answer scope regarding the relevance of the passages for each article.
Therefore, it may not be possible to find an answer to the question in the passages taken from the Wikipedia article.
> 


### (4) These are all negative passages retrieved by bm25 retrieval for the same query, but is there any point in evaluating one passage using bm25 retrieval among passages that have been ingested after combining the negative and positive passages?
⇒ Ultimately, I do not think it is meaningful for bm25 retrieval to retrieve passages again from among the top-k passages it retrieved from the vast corpus.


### (5) Refer to the example code for how the paper evaluated it (- ultimately, it is necessary to check whether the paper is finding one item among the vast corpus)
⇒ Since most examples use pyserini, it is difficult to refer to the example code.


⇒ Both negative passages and positive passages came from the corpus, and if you want to compare the performance of the negative passages retrieved by the bm25 retrieval directly tuned by Mr.tydi with the performance of a retrieval system you created yourself,
then it seems that you could use the negative passages.


### (6) Verify whether there are empty passages


⇒ There is one in the negative passages. However, this has no effect because negative passages are not used in the adopted evaluation method, and although the negative passages are empty, there are positive passages that should be used.
(It appears that the annotator directly wrote positive passages for questions corresponding to answers that could not be created from snippets.) 



### (7) Are there multiple positive passages? Do they have rankings among them? → However, if evaluating with a rank-aware metric like MRR, one might assume that they have rankings


⇒ It has been confirmed that there are two or more positive passages per query.


⇒ Since MRR itself takes the reciprocal, RR, based on the rank of the item I am looking for, **adds them all together with ∑ and then calculates the mean, so the rank of the item I am looking for does not matter.**


⇒ That is why the paper also did not explain whether positive passages have rankings when there are multiple positive passages per query!


In the end, this was an issue where I should have understood the MRR metric
