# Cracking the Coding Interview p 90 (solution on p 193)

## Description of the Problem
Given two strings, write a method to decide if one is a permutation of the other

## Strategies
1. Sort and compare char by char
- time of sort O(n log n); space of sort O(log n)
2. Maintain freq distrib in Map
- time complexity O(n); space complexity O(n)
3. Cycle through str1, char by char, and remove from str2
- time complexity O(n); space complexity O(1)

Note: I believe O (n log n) is worse than O(n) because log n > 1 for n > 0 
e.g. log 1 = 0, log 100 = 2; log 1000 = 3 for base 10 
or log 1 = 0; log 2 = 4; log 8 = 3 for base 2