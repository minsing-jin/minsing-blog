---
title: "pyimage1 doesn't exist error"
pubDatetime: 2025-07-20T06:32:26.068Z
description: "문제 요약:main.py에서 AutoComplete.autocomplete()을 실행하면 PostgreSQL 연결은 성공 메시지가 뜨지만 실제 데이터 조회 (User.get_random_meme())에서 동작하지 않거나, GUI가 에러 (pyimage1 doesn't"
category: "악당 개념패거리들 정리"
canonicalURL: "https://velog.io/@minsing-jin/pyimage1-doesnt-exist-error"
velogSeries: ["악당 개념패거리들 정리"]
---

![](/images/velog/1b9636dbc688edba.png)

문제 요약:

* `main.py`에서 `AutoComplete.autocomplete()`을 실행하면 PostgreSQL 연결은 성공 메시지가 뜨지만 실제 데이터 조회 (`User.get_random_meme()`)에서 동작하지 않거나, GUI가 에러 (`pyimage1 doesn't exist`)를 발생시킴.
* 같은 코드를 단독으로 실행하면 정상 동작함.
* Messagebox에 글자가 잘 안뜨거나 Messagebox자체가 안나오는 문제
---

## 🔎 원인 분석

1. **`pyimage1` doesn't exist** 에러는 `Tkinter` 이미지 객체가 생성되었는데, `mainloop` 중간에 소멸되어 Tkinter가 그걸 참조할 수 없게 되는 대표적인 에러입니다.

   * 이는 `PhotoImage`나 `Label` 등에 설정된 이미지가 `local variable`로 만들어지고, 참조 없이 사라질 때 발생합니다.
   * GUI에서 이미지 보여줄 때 `self.image = tk.PhotoImage(...)`처럼 **인스턴스 변수로 유지해야 합니다.**

2. **PostgreSQL이 동작하지 않는 것처럼 보이는 이유**

   * 실제로 연결은 되었고 로그도 출력되지만, GUI 창이 뜨기 전에 `mainloop()`가 잘못 종료되어 DB 동작까지 마무리되지 않을 수 있습니다.
   * 특히 GUI 내부에서 발생한 예외나 잘못된 흐름으로 인해 `mainloop()`가 조기 종료되면 이후 코드가 실행되지 않을 수 있습니다.

---

## 🛠 해결 방법

### ✅ 2. `tk.Tk()`를 `MainThreadExecutor`의 root가 아닌 `AutoComplete`에서 다시 생성해서 충돌 가능성

`MainThreadExecutor`는 `self.root.mainloop()`로 메인 이벤트 루프를 이미 돌리고 있습니다. 그런데 `AutoComplete.display_meme_gui()`에서 다시 `tk.Tk()`를 호출하는 건 **중복 Tk root 생성으로 비정상 동작**의 원인이 됩니다.

**해결책:** `AutoComplete`에서는 새 `Tk()`를 만들지 말고 `Toplevel()`으로 만들어야 합니다.

```python
self.root = tk.Toplevel()
```

---

## ✅ 정리된 체크리스트

* [x] `tk.Tk()` → `tk.Toplevel()`으로 바꾸기 (중복 루트 방지)


---

## 🔚 결론

코드 구조상 동작은 맞지만, **Tkinter의 이미지 관리**, **중복 `Tk()` 루트 생성**, 그리고 **DB 연결의 암시적 종료 시점**이 문제를 일으키고 있습니다.

위 3가지를 고치면 `main.py`에서도 정상적으로 `autocomplete()`과 DB 조회가 작동할 것입니다. 원하시면 `MemeSelectionGUI` 쪽 예시 코드까지 보여드릴게요.
#### 

----
## 깨달음
역시 알기 위해서는 수단과 방법을 가리지 말아야한다. perplexity가 못한걸 chatgpt가 해냈다. 그리고 알기 위해서는 pyimage2 error로 검색했으면 알았을것이다.
