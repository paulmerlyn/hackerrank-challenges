# Stacks of Plates Problem
Source: Cracking the Coding Interview 3.3 (p 99); solution p 233

## Description (Base Challenge)
Imagine a stack of plates. If the stack gets too high, it might topple. In real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and .pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).

## Follow-Up Challenge
Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

## Strategies
In SetOfStacks, maintain property:
- activeStackIndex (0, 1, 2, etc.) to which we are currently push()ing or popping()
- sizeOfActiveStack (int) so we can monitor need to change activeStackIndex; updated with every push() or pop()
- getActiveStack() // called for every push() and pop(); maintains and returns activeStackIndex