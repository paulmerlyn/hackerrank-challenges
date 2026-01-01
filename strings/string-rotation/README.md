# String Rotation
Source: Cracking the Coding Interview p 91 (solution p 206)

## Description
Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat").

Note: I think for my choice of JavaScript, the equivalent method is String.prototype.includes()

## My Complexity Evaluation
time complexity: O(n) // where n is longest string
space complexity: O(n)