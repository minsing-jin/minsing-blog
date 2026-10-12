---
title: Stack -> Finding the Minimum Value
pubDatetime: 2025-03-28 08:15:33.500000+00:00
description: 'Two arrays: stack and min_stack. The stack is implemented as is, while min_stack repeatedly assigns the minimum value to each index whenever the stack is updated. The stack is implemented using an Int index called top as a cursor. Odd-numbered indexes are stack, and even-numbered indexes are min_stack.'
category: Programming & CS
tags: []
language: en
translationOf: stack-min-value구하기
translationStatus: approved
draft: false
velogSeries:
- 자료구조
---

![](/images/velog/4dd93ca8925203ee.png)



# Intuition
## Sol 1. Two arrays
1. 2 arrays
- stack
- min_stack


2. Implement the stack as is
3. Whenever min_stack is updated, repeatedly assign the minimum value to each index


a stack is implemented by using an Int index called top as a cursor


## Sol 2. Mathematical trick with one array


Odd-numbered indexes are stack
Even-numbered indexes are min_stack


## Sol 2. Mathematical trick with one array 2 -> still 70%
- This is a mathematical trick that allows only the min stack to be retrieved!!
- Push operation
-> 2x - minElem
-> Determine whether it is smaller or larger than the new input x -> this determines whether the min value needs to be restored later during pop
However, if the newly pushed value is larger than the min value, simply put it into the stack


- Pop operation
-> 2x-prevMinEle(previous value in the stack)
-> The new minimum value is calculated as 2*minEle - y = 2*x - (2*x - prevMinEle) = prevMinEle.
However, if the popped value is larger than the min value, proceed as is


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
### Why push works


```
How 2*x – minEle is less than x in push()? 


x < minEle which means x – minEle < 0 


// Adding x on both sides
x – minEle + x < 0 + x 
2*x – minEle < x 
We can conclude 2*x – minEle < new minEle 
```


### Why pop is restored


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


## Sol4. Using the standard stack
