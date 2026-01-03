# Sum lists
(Cracking the Coding Challenge p 95; solution 214)

## Description
You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a lined list.

### Example
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2) i.e. 617 + 295
Output: 2 -> 1 -> 9 i.e. 912

### Follow up:
Suppose the digits are stored in forward order. Repeat the same problem.
Input: (6 -> 1 -> 67) + (2 -> 9 -> 5) i.e. 617 + 295
Output: 9 -> 1 -> 2 i.e. 912

## Strategy Ideas
### Idea 1
Set pointers p and q at heads
Initialize sum = 0
Initialize multiplier = 10^n where n is number of traversals
Traverse, adding (pdata + qdata) * multiplier // call a summing function (pdata, qdata, multiplier)
When at end of longest list stop

Obtain units, tens, hundreds, etc. by string reversal OR convert to array via split("") and shift

Time: O(n) where n is length of longest list
Space: O(n)
