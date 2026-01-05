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