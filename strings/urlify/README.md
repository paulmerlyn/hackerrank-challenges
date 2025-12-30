# URLify String
Challenge 1.3 from Cracking the Coding Interview p 90 (solution on p 194)

*NOTE*: I didn't get deeply into this. My solution in index.js seems to work. The official solution on p 194 seems a little less relevant given that it's written in Java (not JS).

## Description
Write a method to replace all spaces in a string with %20. Assume the string has sufficient space to hold the additional characters and that you are given the "true" length of the string.

Example
Input: "Mr John   Smith.        ", 13
Output: "Mr%20John%20Smith"

## Strategies
I plan to use String.trim() then JS's String.replace() method