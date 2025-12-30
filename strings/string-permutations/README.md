# Cracking the Coding Interview p 90 (solution on p 193)

## Description of the Problem
Given two strings, write a method to decide if one is a permutation of the other

## Strategies
1. Sort and compare char by char
- time of sort O(n log n); space of sort O(log n) where n is # chars in longest string
OOPS! AFTER SORTING, ALL I NEEDED TO DO WAS CHECK THAT sortedStr1 === sortedStr2 ... NO NEED TO COMPARE THE STRINGS char by char
2. Maintain freq distrib in Map
- time complexity O(n); space complexity O(m) where n is # chars in longest string, and m is # unique chars (range)
3. Brute force cycle through str1, char by char, and remove from str2
- time complexity O(n^2); space complexity O(n)

Note: I believe O (n log n) is worse than O(n) because log n > 1 for n > 0 
e.g. log 1 = 0, log 100 = 2; log 1000 = 3 for base 10 
or log 1 = 0; log 2 = 4; log 8 = 3 for base 2
YES! This is true.

## Comparison Summary:
In terms of time complexity:

Best: O(n) frequency distribution Map 
Mid: O(n log n) sort and compare char-by-char
Worst: O(n^2) brute force search str1 for chars in str2

In terms of space complexity:

Best: O(log n)
Mid: O(n) brute force search str1 for chars in str2
Mid: O(m) Map 
