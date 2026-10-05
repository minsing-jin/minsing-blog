---
title: "Stack -> Min value구하기"
pubDatetime: 2025-03-28T08:15:33.500Z
description: "arr 2개stackmin_stackstack은 그대로 구현min_stack은 stack이 반복될때마다 계속 반복적으로 최소값을 각각의 idx로 할당top이라는 Int idx를 Cursor로 활용해서 stack을 구현홀수번째 Idx는 stack짝수번째 idx는 min_"
category: "자료구조"
canonicalURL: "https://velog.io/@minsing-jin/Stack-Min-value구하기"
velogSeries: ["자료구조"]
---

![](/images/velog/4dd93ca8925203ee.png)


# 직관
## Sol 1. 두개의 arr
1. arr 2개
- stack
- min_stack

2. stack은 그대로 구현
3. min_stack은 stack이 반복될때마다 계속 반복적으로 최소값을 각각의 idx로 할당

top이라는 Int idx를 Cursor로 활용해서 stack을 구현

## Sol 2. 하나의 arr로 수학적 트릭

홀수번째 Idx는 stack
짝수번째 idx는 min_stack

## Sol 2. 하나의 arr 수학적 트릭 2 -> 아직 70%
- 오직 min stack만 꺼낼 수 있는 수학적 트릭임!!
- Push 연산
-> 2x - minElem
-> 새로운 input x보다 작은지 큰지를 판별 -> 나중에 pop 할때 min value를 복원해야할지에 대한 여부를 결정해줌
단, 새로 Push된 값이 min value보다 크다면 stack에 그냥 넣어줌

- Pop 연산
-> 2x-prevMinEle(stack의 이전값)
-> 새로운 최소값은 2*minEle - y = 2*x - (2*x - prevMinEle) = prevMinEle로 계산됩니다.
단, pop된 값이 min value보다 크다면 그대로 진행

```// C++ program to implement a stack that supports
// all operations in O(1) time and O(1) extra space.

#include <iostream>
#include <stack>
using namespace std;

// A user defined stack that supports getMin() in
// addition to push(), pop() and peek()
class SpecialStack {
  private:
    stack<int> s;
    int minEle;
    
  public:
    SpecialStack() {
        minEle = -1;
    }
    
    // Add an element to the top of Stack
    void push(int x) {
        if (s.empty()) {
            minEle = x;
            s.push(x);
        }

        // If new number is less than minEle
        else if (x < minEle) {
            s.push(2 * x - minEle);
            minEle = x;
        }

        else {
            s.push(x);
        }
    }
    
    // Remove the top element from the Stack
    void pop() {
        if (s.empty()) {
            return ;
        }
        
        int top = s.top();
        s.pop();
        
        // Minimum will change, if the minimum element
        // of the stack is being removed.
        if (top < minEle) {
            minEle = 2 * minEle - top;
        }
    }
    
    // Returns top element of the Stack
    int peek() {
        if (s.empty()) {
            return -1;
        }

        int top = s.top();

        // If minEle > top means minEle stores value of top.
        return (minEle > top) ? minEle : top;
    }
    
    // Finds minimum element of Stack
    int getMin() {
        if (s.empty())
            return -1;

        // variable minEle stores the minimum element
        // in the stack.
        return minEle;
    }
};

int main() {
    SpecialStack ss;
    
    // Function calls
    ss.push(2);
    ss.push(3);
    cout << ss.peek() << " ";
    ss.pop();
    cout << ss.getMin() << " ";
    ss.push(1);
    cout << ss.getMin() << " ";
}
```
### push가 동작하는 원리

```
How 2*x – minEle is less than x in push()? 


x < minEle which means x – minEle < 0 


// Adding x on both sides
x – minEle + x < 0 + x 
2*x – minEle < x 
We can conclude 2*x – minEle < new minEle 
```

### pop이 복원되는 이유

```
How previous minimum element, prevMinEle is, 2*minEle – y
in pop() is y the popped element?


 // We pushed y as 2x – prevMinEle. Here 
// prevMinEle is minEle before y was inserted


y = 2*x – prevMinEle  


// Value of minEle was made equal to x
minEle = x 


new minEle = 2 * minEle – y 
                   = 2*x – (2*x – prevMinEle)
                   = prevMinEle // This is what we wanted

```


https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/

## Sol 3. Linked list

## Sol4. stack std사용사용
