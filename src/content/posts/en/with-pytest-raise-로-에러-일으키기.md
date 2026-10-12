---
title: Raising an Error with pytest.raise()
pubDatetime: 2023-11-23 06:13:16.367000+00:00
description: Answer me, Jarvis!!
category: Programming & CS
tags: []
language: en
translationOf: with-pytest-raise-로-에러-일으키기
translationStatus: approved
draft: false
velogSeries:
- 고오급 스킬들 공략집
---

![](/images/velog/eabde5563896400b.png)


Among the code from Ragchain
```python
def test_ko_strategy_qa_evaluator(strategy_qa_evaluator):
    with pytest.raises(ValueError):
        strategy_qa_evaluator.evaluate(validate_passages=True)

    result = strategy_qa_evaluator.evaluate(validate_passages=False)
    assert len(result.each_results) == 5
    assert result.each_results.iloc[0][
               'question'] == 'Are more people today related to Genghis Khan than Julius Caesar?'
```


If an exception occurs below `with`, it raises the error specified by the parameter inside `pytest.raises()`.


Using the code above as an example, if `validate_passages` in `strategy_qa_evaluator.evaluate(validate_passages=True)` is `False` rather than `True`, it raises the `ValueError` specified in `pytest.raises(ValueError)`.


>
[Naeiseuhan site](https://velog.io/@insutance/pytest.raises-%EB%B0%9C%EC%83%9D%EB%90%98%EB%8A%94-%EC%98%88%EC%99%B8-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0)
