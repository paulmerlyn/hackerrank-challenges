# Palindrone Linked List
Cracking the Coding Interview p 95 problem 2.6

## Description
Implement a function to check if a linked list is a palindrone

## Strategy
I'll assume we have a doubly linked list (preferably, for convenience, with a tail). I think it makes sense to either use the tail or (if no tail, traverse a second pointer down to the tail) then traverse in both directions, comparing the value of each node. We'd need to check at each node whether the two pointers are pointing at the same node (this will be the middle node and will happen if the list has an odd number of nodes) or if the two pointers are pointing to adjacent nodes (this will happen when the pointers are at the middle for a list with an event number of nodes). We should quit and return false if any comparisons yield different values.

if (p.next === q.previous) // odd count stop
if (p.next === q && q.previous === p) even stop

## Implementation
I've implemented my solution successfully in index-problem-2.6.js using a DLL with tail. Because it's a DLL, the solution entails just a single pass.
   Now lets consider the more difficult task of how to do this with a Singly Linked List.

## Problem Variant: Must Use a Singly Linked List
### Strategy Ideas
1. Using a Stack
We could traverse the list, placing each datum into two arrays, one onto the end of the array via push and the other onto the beginning of the array using unshift. This entails just a single pass but uses more space than using a single storage array, but we can then simply compare if the two arrays are the same without having to loop backwards through one array and forwards through the other to perform the comparison. 
  I asked Kilo Chat, which implemented this even more neatly by performing the comparison by first pushing to just one array and the popping from it during a second traversal:

function isPalindrome(head) {
    const stack = [];
    let current = head;
    
    // Push all values to stack
    while (current) {
        stack.push(current.data);
        current = current.next;
    }
    
    // Compare with original list
    current = head;
    while (current) {
        if (current.data !== stack.pop()) {
            return false;
        }
        current = current.next;
    }
    
    return true;
}

2. Using Reverse Second Half
The downside of the stack approach is that it uses extra storage and requires a second traversal. A more time-efficient approach (single traversal) is to:
(a) find the middle of the linked list (p moves 1 and q moves 2) via one traversal as follows:

// Move p one and q two; if q.next === null then list length is even and p is at left-middle
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
p.   p    p    p.        q.        q

// Move p one and q two;  if q === null then list length is odd and p is at exact middle
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9  null
p.   p    p    p.   p.     q.      q.      q

(b) Store values of the first-half of the list (i.e. the p.data values) into an array
(c) Pop values from the array (skipping the exact mid value if there is one i.e. if the list length is odd)

A more space-efficient approach suggested by Kilo Chat is to avoid the need for the storage array as follows:

function isPalindrome(head) {
    // Find middle, reverse second half, compare, then restore
    // More complex but O(1) space
}

I'm not 100% clear how to perform the "reverse second half, compare, then restore" steps. Ask Kilo Chat (when I'm on the ground with WiFi).