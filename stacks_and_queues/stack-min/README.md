# Stack Min Problem
Source: Cracking the Coding Interview 3.2 (p 98); solution p 232

## Description
How would you design a stack which, in addition to push and pop, has a function `min` which returns the minimum element? Push, pop, and min should all operate in O(1) time.

## Strategies
To avoid having to traverse the linked list or the array (i.e. O(n) time), we need to maintain the state of min in the array/stack.

## TL;DR
None of my strategy ideas worked out. It's worth looking at the solution on p 232 of Cracking the Coding Interview or, better yet, trying this problem myself again. If you write down what happens to the min as you push and pop various values, you might see the heart of the solution!

### Idea 1
Maybe reserve the first or last element of the array for this purpose, then retrieve it in O(1) time. Or store the min in the class implementation as a class member?
On second thoughts, I don't think that would work because the stack might receive (via push) several successively smaller or equally small minimums then some of them might be popped.

1 -> 1 -> 2 -> 1 -> 3 -> 4 | 4 | 3 | 1
Min: 1, 1, 1

Rules:
On push, place value in ordered linked list with min at head
On pop, remove that value
... but such requirements would make push() and pop() O(n), not O(1)

### Idea 2
Maintain map of keys (value of each node) and value being the key of the next highest/lowest node

### Idea 3
When adding node value 1, we mark node's metadata as min 1
When adding node value 1, we mark node's metadata as min(stack head 1, value 1) i.e. 1
When adding node value 2, we mark node's metadata as min(stack head 1, value 2) i.e. 1
When adding node value 1, we mark node's metadata as min(stack head 2, value 1) i.e. 1
When adding node value 3, we mark node's metadata as min(stack head 1, value 3) i.e. 1
When adding node value 4, we mark node's metadata as min(stack head 3, value 4) i.e. 3

When popping node value 4, 

