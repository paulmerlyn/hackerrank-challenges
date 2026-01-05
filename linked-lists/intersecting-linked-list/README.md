# Intersecting Linked Lists
Source: Cracking the Coding Interview p 95 (solution p 221)

## Description
Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

## Strategy
1. Traverse each list via p, q.
1. Check if p === q for every p,q permutation

## My Analysis
Time complexity: O(n^2)
Space complexity: O(1)

## Alternative Solution from Cracking the Coding Interview p 222
Consider case where SLL lists intersect:

3 -> 1 -> 5 -> 9
                -> 7 -> 2 -> 1
          4 -> 6

Algo:
- Traverse SLL1 and SLL2 to get their lengths and tails
- Compare the tails. If they are the same (by reference, not by value) then the lists intersected and continue. If they are different, do early return null (the lists don't intersect)
- Set the two points to the start of each linked list
- Advance the pointer on the longer linked list by the difference in their length (i.e. advance it 2 nodes b/c SLL1 is length 7 whereas SLL2 is length 5)
- Now traverse on each list until the pointers reference the same node. Return that node.  