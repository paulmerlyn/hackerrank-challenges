# One Edit Away
From Cracking the Coding Interview p 91 (solution p 199)

## Description
There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

## Strategies
Early returns true:
- if str1 === str2

Early returns false:
- | str1.length - str2.length | (abs) > 1

One edit via Insert:
Find longer string
Successively remove each char and compare with shorter string (for ... of)

One edit via Remove
Find longer string
Successively remove each car and compare with shorter string (for ... of)

One edit via Replace
Check strings are same length // return false if not
Nested loops, removing one char from each string (0,0), (0,1), (0,2), ..,
(Brute force ... consider optimizations/trade-offs)

## Optimizations
oneEditViaInsertOrRemove() is O(n^2) time complexity O(n) ... not forgetting to multiply the for loop's O(n) with the O(n) for split()/splice()/join() 
Slower is oneEditViaReplace() O(n^2)
Both functions have space complexity O(n)

I could alternatively use a Map to count occurences of each letter.
If string lengths differed by 0 then count must be same for ALL characters.
If string lengths differed by 1 then count must be same for all but one letter (insert or remove to fix).
If string lengths differed by ...

BUT there is a better solution ... we can simply compare the two strings, char by char. One mismatch allowed if strings of same length (fix via replace). One mismatch allowed if strings differ in length by 1 (fix by insert or remove).

The key to seeing the shorter (O(n) time and O(1) space) solution is recognizing that the strings are already "sorted"/"ordered" for the purpose of comparing them letter by letter. My more complex O(n^2 time) approach would only be necessary if the strings were scrambled and we wanted to see if they were "one edit away" anagrams of each other!