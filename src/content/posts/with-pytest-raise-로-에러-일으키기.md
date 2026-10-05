---
title: "with pytest.raise() 로 에러 일으키기"
pubDatetime: 2023-11-23T06:13:16.367Z
description: "대답해 자비스!!"
category: "Programming & CS"
canonicalURL: "https://velog.io/@minsing-jin/with-pytest.raise-로-에러-일으키기"
velogSeries: ["고오급 스킬들 공략집"]
---

![](/images/velog/eabde5563896400b.png)

Ragchain에서 나온 코드중
```python
def test_ko_strategy_qa_evaluator(strategy_qa_evaluator):
    with pytest.raises(ValueError):
        strategy_qa_evaluator.evaluate(validate_passages=True)

    result = strategy_qa_evaluator.evaluate(validate_passages=False)
    assert len(result.each_results) == 5
    assert result.each_results.iloc[0][
               'question'] == 'Are more people today related to Genghis Khan than Julius Caesar?'
```

with의 아래에 예외가 발생하면 pytest.raises()안의 파라미터에서 지정한 에러를 일으킨다.

위의 코드를 예시로 들면 `strategy_qa_evaluator.evaluate(validate_passages=True)`의 validate_passages가 True가 아닌 False라면 `pytest.raises(ValueError)`의 `ValueError`를 일으킨다.

>
[네이스한 사이트](https://velog.io/@insutance/pytest.raises-%EB%B0%9C%EC%83%9D%EB%90%98%EB%8A%94-%EC%98%88%EC%99%B8-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0)
