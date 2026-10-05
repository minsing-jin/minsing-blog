---
title: "Design Pattern in ML (Asynchronous pattern)"
pubDatetime: 2024-05-28T15:39:45.384Z
description: "참고1\\\\. GOAT ml design patter 정리 참고: https&#x3A;//github.com/mercari/ml-system-design-pattern/blob/master/README_ko.md"
category: "소프트웨어 설계"
canonicalURL: "https://velog.io/@minsing-jin/Design-Pattern-in-ML"
velogSeries: ["소프트웨어 설계"]
---

# 동기
나는 머신러닝 시스템이 실제 어떻게 적용되고 응용되는지에 관심이 있다. 때문에 실제 서비스에서는 머신러닝 시스템이 어떻게 서빙되고 학습과 운영이 되는지에 대한 디자인 패턴에 대한 궁금증으로 어떤 Design pattern이 적용되는지를 조사해보고자 한다. 

# 🎯 GOAL
프로세스와 예측사이에 의존성이 없는 workflow일경우, 즉 요청과 추론을 분리하여 client의 workflow에서 추론을 기다릴 필요가 없게 하기 위해서이다. 추론에 시간이 많이 소요되는 무거운 모델일 경우 비동기적인 workflow를 통해 시스템 전체 성능을 개선하는 추세다.


# Detail
비동기 패턴은 클라이언트와 예측 서버 사이에 Apache Kafka 같은 큐나 Redis Cache 같은 캐시를 배치하여 예측 요청과 예측 결과 검색을 분리하여 비동기화하는 방식이다. 이는 클라이언트가 예측 지연을 기다리지 않도록 한다. 클라이언트가 예측을 얻으려면 큐에서 결과를 가져오기 위해 폴링을 추가해야한다. 

비동기 추론 패턴에서도 동기 추론 패턴에서 사용한 TF Serving을 활용한다. 추론기는 전처리와 후처리를 포함한 InceptionV3 모델을 TF Serving으로 실행한다. 클라이언트로부터의 추론 요청 엔드포인트는 FastAPI로 구성된 프록시가 중개한다. 
프록시는 추론 요청에 대해 작업 ID를 응답하고, 백그라운드에서 Redis에 요청 데이터를 등록한다. Redis에 등록된 요청 데이터는 배치로 TF Serving에서 추론하고, 추론 결과는 다시 Redis에 저장된다. 클라이언트가 작업 ID를 프록시에 요청하면, 추론이 완료된 후 그 결과를 얻을 수 있는 구성이다.
![](/images/velog/34db6e30409a3ae3.png)
위의 아키텍쳐는 클라이언트와 추론기 사이에 fast API, Redis, batch 서버가 있는 아키텍처로 클라이언트는 비동기화로 인해서 추론이 완료될때까지 작업 중지가 필요없다. 하지만 아까 언급했듯이 클라이언트는 추론 결과를 얻기 위해 
정기적으로 결과가 저장된 곳에 접속해야 한다.

위 그림처럼 비동기 추론 패턴은 여러 리소스를 조합하여 구현하기때문에 각각의 리소스를 개별 컨테이너로 구축후 docker compose로 실행시키는 구성을 할수 있다.

## Pros and Cons

이 방식의 장점은 클라이언트와 예측을 분리하여 클라이언트가 예측 대기 시간을 기다릴 필요가 없다 하지만 단점으로는 큐, 캐시 또는 유사한 종류의 프록시가 필요하고, 실시간 에측에는 적절하지 않다는 것이다. 




# UML
비동기 추론 패턴은 추론 결과가 출력되는 위치에 따라 여러 아키텍처로 구현될 수 있다. 추론 결과는 큐나 캐시에 저장되거나, 완전히 다른 시스템에서 출력될 수 있다. 또한 추론 결과를 출력하는 위치는 시스템의 워크플로우에 따라 달라진다. 추론 결과를 클라이언트에 직접 전달할 수도 있지만, 이 경우 예측 서버가 클라이언트에 결과를 반환하기 위한 추가 연결이 필요하여 시스템이 복잡해질 수 있으므로 권장되지 않는다.

![](/images/velog/08b72db04e4e1411.png)


![](/images/velog/d82a69517a774531.png)



# Code
## 간단한 예시

아래는 Python의 asyncio 라이브러리를 사용하여 비동기 패턴을 구현한 예시 코드이다. 이 코드는 여러 데이터 전처리 작업을 비동기적으로 수행한 후, 모델 학습을 시작한다.



```
import asyncio
import time

async def preprocess_data(data):
    print(f"데이터 전처리 시작: {data}")
    await asyncio.sleep(2)  # 데이터 전처리 시뮬레이션
    print(f"데이터 전처리 완료: {data}")
    return f"전처리된 {data}"

async def train_model(preprocessed_data):
    print(f"모델 학습 시작: {preprocessed_data}")
    await asyncio.sleep(3)  # 모델 학습 시뮬레이션
    print(f"모델 학습 완료: {preprocessed_data}")
    return f"학습된 모델 ({preprocessed_data})"

async def main():
    raw_data = ["데이터1", "데이터2", "데이터3"]
    
    # 데이터 전처리를 비동기적으로 수행
    preprocessed_data_tasks = [preprocess_data(data) for data in raw_data]
    preprocessed_data = await asyncio.gather(*preprocessed_data_tasks)
    
    # 모델 학습을 비동기적으로 수행
    train_model_tasks = [train_model(data) for data in preprocessed_data]
    trained_models = await asyncio.gather(*train_model_tasks)
    
    print("모든 작업 완료")
    for model in trained_models:
        print(model)

# 비동기 루프 실행
asyncio.run(main())

```

1. preprocess_data 함수:
데이터 전처리를 시뮬레이션하는 비동기 함수이다.
2. await asyncio.sleep(2)를 사용하여 2초 동안 대기한다.
3. train_model 함수:
전처리된 데이터를 사용하여 모델을 학습하는 비동기 함수이다.
await asyncio.sleep(3)를 사용하여 3초 동안 대기한다.
4. main 함수:
원시 데이터를 리스트로 정의한다.
5. preprocess_data 함수를 비동기적으로 호출하여 모든 데이터를 전처리한다.
6. 전처리된 데이터를 사용하여 train_model 함수를 비동기적으로 호출하여 모델을 학습한다.

------
## UML의 예제 코드

[코드와 설명 출처 ](https://blog.kubwa.co.kr/ml-design-pattern-%EC%B6%94%EB%A1%A0-%EC%8B%9C%EC%8A%A4%ED%85%9C-3-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B6%94%EB%A1%A0-%ED%8C%A8%ED%84%B4-182adb3f02ad)

```python
import base64
import io
import uuid
from logging import getLogger
from typing import Any, Dict
import requests
from fastapi import APIRouter, BackgroundTasks
from PIL import Image
from src.app.backend import background_job, store_data_job
from src.app.backend.data import Data
from src.configurations import ModelConfigurations
logger = getLogger(__name__)
router = APIRouter()
# health check
@router.get("/health")
def health() -> Dict[str, str]:
        return {"health", "ok"}
# 모델에 대한 metadata를 TF Serving에 get 요청
@router.get("/metadata")
def metadata() -> Dict[str, Any]:
    model_spec_name = ModelConfigurations.model_spec_name
    address = ModelConfigurations.address
    port = ModelConfigurations.rest_port
    serving_address = f"http://{address}:{port}/v1/models/{model_spec_name}/versions/0/metadata"  # TFServing 엔드포인트 규칙
    response = requests.get(serving_address)
    return response.json()
# 라벨 인덱스와 값을 return
@router.get('/label')
def label() -> Dict[int, str]:
    return ModelConfigurations.labels
@router.get('/predict/test')
def predict_test(background_tasks: BackgroundTasks) -> Dict[str, str]:
    job_id = str(uuid.uuid4())[:6]
    data = Data()
    data.image_data = ModelConfigurations.sample_image
    background_job.save_data_job(data.image_data, job_id, background_tasks, True)
    return {'job_id': job_id}
# 이미지를 redis에 새로 등록 -> 추론은 background에서 이미 loop를 돌면서 추론중
@router.get('/predict')
def predict(data: Data, background_tasks: BackgroundTasks) -> Dict[str, str]:
    image = base64.b64decode(str(data.image_data))
    io_bytes = io.BytesIO(image)
    data.image_data = Image.open(io_bytes)
    job_id = str(uuid.uuid4())[:6]
    background_job.save_data_job(
        data=data.image_data,
        job_id=job_id,
        background_tasks=background_tasks,
        enqueue=True
    )
    return {'job_id': job_id}
# 해당 job의 결과값 get
@router.get("/job/{job_id}")
def prediction_result(job_id: str) -> Dict[str, Dict[str, str]]:
    result = {job_id: {'prediction': ""}}
    data = store_data_job.get_data_redis(job_id)
    result[job_id]["prediction"] = data
    return result
```

- 프록시는 웹 싱글 패턴과 동일하게 Gunicorn과 FastAPI로 구성되어 있다. 주요 엔드포인트는 /predict/test, /predict, /job/{job_id}이다. 내부 데이터로 테스트할 때는 /predict/test를 사용하고, 클라이언트 요청을 받을 때는 /predict를 사용한다. 추론 결과를 요청하는 엔드포인트는 /job/{job_id}이다.
- 클라이언트가 /predict 엔드포인트로 요청을 보내면 이미지를 Pillow 형식으로 변환한 후, 백그라운드에서 Redis에 데이터를 저장하고 큐에 job_id를 등록한다. 백그라운드 처리는 FastAPI의 BackgroundTasks를 사용하여 요청에 응답한 후 실행되도록 예약할 수 있다.
- /job/{job_id} 엔드포인트를 통해 Redis에 등록된 해당 job_id의 추론 결과를 받을 수 있다.


```python
import base64
import io
import logging
from typing import Any, Dict
from PIL import Image
from src.app.backend.redis_client import redis_client
logger = logging.getLogger(__name__)
# 큐에 등록할 키 작성
def make_image_key(key: str) -> str:
    return f"{key}_image"
# 큐 등록
def left_push_queue(queue_name: str, key: str) -> bool:
    try:
        redis_client.lpush(queue_name, key)
        return True
    except Exception:
        return False
# 큐 취득
def right_pop_queue(queue_name: str) -> Any:
    if redis_client.llen(queue_name) > 0:
        return redis_client.rpop(queue_name)
    else:
        return None
# Redis에 데이터 등록
def set_data_redis(key: str, value: str) -> bool:
    redis_client.set(key, value)
    return True
# Redis로부터 데이터 취득
def get_data_redis(key: str) -> Any:
    data = redis_client.get(key)
    return data
# Redis에 이미지 데이터 등록
def set_image_redis(key:str, image: Image.Image) -> str:
    byte_io = io.BytesIO()
    image.save(byte_io, format=image.format)
    image_key = make_image_key(key)
    encoded = base64.b64encode(byte_io.getvalue())
    redis_client.set(image_key, encoded)
    return image_key
# Redis로부터 이미지 데이터 취득
def get_image_redis(key:str) -> Image.Image:
    redis_data = redis_client.get(key)
    decoded = base64.b64decode(redis_data)
    io_bytes = io.BytesIO(decoded)
    image = Image.open(io_bytes)
    return image
# Redis에 데이터와 작업 ID 등
def save_image_redis_job(job_id: str, image: Image.Image) -> bool:
    set_image_redis(job_id, image)
    redis_client.set(job_id, "")
    return True
```
- 이 스크립트는 Redis 클라이언트의 동작을 정의한 파일이다. 여기에는 큐에 작업 ID를 등록하거나 큐에서 작업 ID를 제거하는 함수, 이미지 데이터를 이미지 작업 ID와 함께 Redis에 등록하기 위한 set 함수, 그리고 추론을 위해 데이터를 가져오는 get 함수가 포함되어 있다.
- 큐에는 작업 ID만 등록되며, 큐에 등록된 작업 ID를 통해 Redis에 저장된 데이터를 불러오는 로직이 구현되어 있다.

- 이 코드는 Redis 클라이언트의 동작을 정의한 파일이다. 여기에는 작업 ID를 큐에 등록하거나 큐에서 제거하는 함수, 이미지 데이터를 작업 ID와 함께 Redis에 저장하는 set 함수, 그리고 추론을 위해 데이터를 가져오는 get 함수가 포함되어 있다.
- 큐에는 작업 ID만 등록되며, 큐에 등록된 작업 ID를 통해 Redis에 저장된 데이터를 불러오는 로직이 구현되어 있다.

```python
import asyncio
import base64
import io
import os
from concurrent.futures import ProcessPoolExecutor
from logging import DEBUG, Formatter, StreamHandler, getLogger
from time import sleep
import grpc
from src.app.backend import request_inception_v3, store_data_job
from src.configurations import CacheConfigurations, ModelConfigurations
from tensorflow_serving.apis import prediction_service_pb2_grpc
log_format = Formatter("%(asctime)s %(name)s [%(levelname)s] %(message)s")
logger = getLogger("prediction_batch")
stdout_handler = StreamHandler()
stdout_handler.setFormatter(log_format)
logger.addHandler(stdout_handler)
logger.setLevel(DEBUG)
# 큐가 존재하면 추론을 실행
def _trigger_prediction_if_queue(stub: prediction_service_pb2_grpc.PredictionServiceStub):
    # queue 에는 job_id만 담고 실제 데이터(이미지)는 redis 에 담음
    job_id = store_data_job.right_pop_queue(CacheConfigurations.queue_name)  # None or job_id
    logger.info(f"predict job_id: {job_id}")
    if job_id is not None:
        data = store_data_job.get_data_redis(job_id)
        if data != "":  # 공백이 아니라면 이미 예측값이 저장되어 있다는 의미
            return True
        # Job id는 있지만 data(추론결과)가 없는 경우는 추론을 수행 해야 함
        image_key = store_data_job.make_image_key(job_id)
        image_data = store_data_job.get_data_redis(image_key)  # 이미지 id로 부터 이미지 취득
        decoded = base64.b64decode(image_data)
        io_bytes = io.BytesIO(decoded)
        prediction = request_inception_v3.request_grpc(
            stub=stub,
            image=io_bytes.read(),
            model_spec_name=ModelConfigurations.model_spec_name,
            signature_name=ModelConfigurations.signature_name,
            timeout_second=5
        )
        if prediction is not None:  # 응답이 성공적으로 오면
            logger.info(f"{job_id} {prediction}")
            store_data_job.set_data_redis(job_id, prediction)  # job id에 예측값 등록
        else:
            store_data_job.left_push_queue(CacheConfigurations.queue_name, job_id)  # 응답이 지연된 경우나 오지 않은 경우 다시 큐에 등록
def _loop():
    serving_address = f"{ModelConfigurations.address}:{ModelConfigurations.grpc_port}"
    channel = grpc.insecure_channel(serving_address)
    stub = prediction_service_pb2_grpc.PredictionServiceStub(channel)
    while True:
        sleep(1)
        _trigger_prediction_if_queue(stub=stub)
# 멀티 프로세스로 기동
def prediction_loop(num_procs: int=2):
    excutor = ProcessPoolExecutor(num_procs)  # 병렬 연산을 위한 ProcessPoolExecutor
    loop = asyncio.get_event_loop()
    for _ in range(num_procs):
        asyncio.ensure_future(loop.run_in_executor(excutor, _loop()))
    loop.run_forever()
def main():
    NUM_PROCS = int(os.getenv("NUM_PROCS", 2))
    prediction_loop(NUM_PROCS)
if __name__ == '__main__':
    logger.info('start backend')
    main()
```

- 배치 처리를 위해 해당 스크립트를 실행하는 컨테이너를 시작한다. 이 컨테이너는 무한 루프를 돌며 큐에서 마지막 job_id를 pop한 후, 해당 job_id에 대한 예측 결과가 없다면 추론을 수행하고 그 결과를 Redis에 저장한다.
- 배치 서버는 멀티 프로세스로 실행되기 위해 Python의 병렬 처리를 위한 ProcessPoolExecutor를 사용한다.


비동기 추론 패턴에서 사용할 이미지가 4개(프록시, 배치 처리(백엔드), 추론기, Redis)이며, 실행 순서가 중요하기 때문에 docker-compose.yaml 파일을 작성하여 이를 관리한다.

```yaml
version: "3"
services:
  asynchronous_proxy:
    container_name: asynchronous_proxy
    image: tjems6498/ml-system-in-actions:asynchronous_pattern_asynchronous_proxy_0.0.1
    restart: always
    environment:
      - PLATFORM=docker_compose
      - QUEUE_NAME=tfs_queue
      - API_ADDRESS=imagenet_inception_v3
    ports:
      - "8400:8000"
    command: ./run.sh
    depends_on:
      - redis
      - imagenet_inception_v3
      - asynchronous_backend
  imagenet_inception_v3:
    container_name: imagenet_inception_v3
    image: tjems6498/ml-system-in-actions:asynchronous_pattern_imagenet_inception_v3_0.0.1
    restart: always
    environment:
      - PORT=8500
      - REST_API_PORT=8501
    ports:
      - "8500:8500"
      - "8501:8501"
    entrypoint: ["/usr/bin/tf_serving_entrypoint.sh"]
  asynchronous_backend:
    container_name: asynchronous_backend
    image: tjems6498/ml-system-in-actions:asynchronous_pattern_asynchronous_backend_0.0.1
    restart: always
    environment:
      - PLATFORM=docker_compose
      - QUEUE_NAME=tfs_queue
      - API_ADDRESS=imagenet_inception_v3
    entrypoint: ["python", "-m", "src.app.backend.prediction_batch"]
    depends_on:
      - redis
  redis:
    container_name: asynchronous_redis
    image: "redis:latest"
    ports:
      - "6379:6379"
```
Redis와 추론기 컨테이너가 먼저 실행된 후, 배치 서버(백엔드)와 프록시가 순차적으로 실행된다. /predict/test 엔드포인트로 요청을 보내면, 작업 ID와 이미지 데이터가 큐와 Redis에 등록된다.
배치 서버는 1초마다 Redis를 폴링하여 추론 대기 중인 작업을 가져와 TF Serving 컨테이너에 요청을 보낸다. 추론이 완료되면 해당 작업 ID에 대한 예측 값이 등록된다.
클라이언트는 추론 결과를 얻기 위해 job/{job id} 엔드포인트에 요청을 보낼 수 있다. 추론이 아직 완료되지 않았다면 빈 문자열이 반환되고, 추론이 완료되었다면 예측된 라벨이 반환된다.

> 참고
1. GOAT ml design patter 정리 참고: https://github.com/mercari/ml-system-design-pattern/blob/master/README_ko.md
2. https://blog.kubwa.co.kr/ml-design-pattern-%EC%B6%94%EB%A1%A0-%EC%8B%9C%EC%8A%A4%ED%85%9C-3-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B6%94%EB%A1%A0-%ED%8C%A8%ED%84%B4-182adb3f02ad
