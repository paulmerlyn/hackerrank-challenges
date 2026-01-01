# Remove Dups
From Cracking the Coding Interview p 94 (solution on p 208)

## Description
Write code to remove duplicates from an unsorted linked list.
Follow up: how would you solve this problem if a temporary buffer is not allowed?

## Strategies
1. Traverse using two runners, one 1-step ahead of the other:
   - Search array for value
   - If found, remove
     else place value in array

## Commentary
I think my solution works nicely.
Time complexity: O(n^2) (one n for traversing the list and another for searching the array) where n is length of list
Space complexity: O(n) where n is max length of array if no values are duplicates

On further review with chat, my solution is a bit of a mish-mash of in-place removal and using a buffer. But I learned something from working on it.