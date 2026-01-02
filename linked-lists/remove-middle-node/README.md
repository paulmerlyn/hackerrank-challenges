# Remove Middle Node
From Cracking the Coding Interview p 94 (solution on p 211)

## Description
Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a single linked list, given only access to that node

## Strategies
I didn't figure this out but think it's worth remembering!
Given a -> b -> c -> d -> e -> f  and wanting to delete, say, d with access to d only
... we can copy or "pull" e into d, then copy or "pull" f into e

I've since implemented it pretty painlessly in index-problem-2.3.js (re-using the Singly Linked List base logic from index-base.js)

## Big O
Time complexity O(n) where n is length of list
Space complexity O(1)