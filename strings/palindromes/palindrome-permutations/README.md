# Palindrome Permutations 
## Source
Cracking the Coding Interview p 91 (problem 1.4). Solution is on p 195

## Description
Given a string, write a function to check if it is a perumutation of a palindrome. (A word or phrase that reads the same backwards.) A permutation is a rearrangement of characters.

Example
Input: Tact Coa
Output: true (permutation of "taco cat", "atc9 cta", etc.)

## Observations
Case-insensitive (convert all to lower-case)
Discard all spaces

## Strategies
1. Convert to lower-case
2. trim() and replaceAll() whitespace
3. str is permut of a palindrome if it contains even character count for all but one of its character counts

## Analysis
Time complexity: O(n), where n is length of str
Space complexity: O(n)

My solution is good. From p 195, the biggest optimization is to realize that we could use a bit vector to hold whether or not each character's count is odd or even. Think of switching a light on and off. We initialize the vector to a 0 for each encountered character. Then every time we encounter the same character, we toggle the bit. At the end, check whether the bit vector has > 1 one.