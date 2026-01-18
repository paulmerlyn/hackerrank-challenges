# Sort Stack Problem
Source: Cracking the Coding Interview 3.5 (p 98); solution p 237 (though it seems my (Kilo-approved) solution is much better than the O(n^2) time complexity Cracking the Coding Interview solution, so probably skip that!)

## Description
Write a program to sort a stack such that the smallest items are on top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.

## Strategies


### Idea 1
1,5,3,2,6

push(n) {
  identify which stack is empty (label it as other or auxillary; label non-empty stack as primary)
  if !primary && !aux: {
    push to prim // beginning or after multi-pop
    return
  } else {
    if n < peek(prim): { 
      push to prim
      return
    }
  } else {
    // n belongs somewhere below
    while peek(prim) < n {
      pop-push onto aux
    }
    push(n) onto aux
    while peek(prim) !== null {
      pop-push onto other
    }
    while peek(aux) !== null{
      pop-push onto prim
    }
  }
}

pop(n) {
  regular
}

## Big O Analysis
Time complexity (push): worst-case is O(n)
Time complexity (pop): worst-case is O(1)
Space complexity: O(n)
