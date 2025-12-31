# String Compression
Source: Cracking the Coding Interview p 91; solution p 201

## Description
Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only upper- and lower-case letters a-z.

## Strategy
Function to count consecutives(str, idx) return'ing idx of next non-consecutive
Invoke initially with idx=0
Build compressedStr based on return value
Before invoking, keep counter of number of times we call it. If count === str.length then no compression possible.

Alternatively, use boolean initialized to compressionPossible = false and toggle to true if the return'ed index is more than 1 greater than the argument.

## Commentary
I think my strategy is sound, but it's fiddly to implement!!! I have a lot of complexity in my file (index.js) and it still isn't working! Time for a rethink:

NEW STRATEGY:
aabcccccaaa -> a2b1c5a3

Start at i 0
Set leftP = i
Identify tgt = str[leftP]
Increment rightP until str[rightP] !== tgt
Perform compressedStr construction using: consecCount = rightP - leftP and repeatingChar = str[leftP]
If rightP >= str.length stop

This new strategy worked so much easier! I've implemented it in indexV2.js

In this new solution in indexV2.js, I have time complexity O() and space complexity O(n) and time complexity O(n)

## Discussion
From Cracking the Coding Interview solution on p 202, is it better to check first if there are no consecutive chars and return the original str if so? This requires more code but may be more efficient if such is a common scenario.
    It would mean an extra iteration thru the string