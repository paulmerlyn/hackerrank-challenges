# Cracking the Coding Interview problem 1.1 p90

## Description
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

## Big O
### When Using Map()
(Function used: isUniqueFn)
Space complexity: O(n) where n is length of str (Map)
Time complexity:  O(n) where n is length of str (for loop)

### Without a Data Structure
(Function used: isUniqueFnWithoutDataStructure)
I did pre-compute sorting so we could compare consecutive characters
For time complexity, the sorting algorithm has O(n log n), which dominates

Space complexity: O(n) // because str.split() and join("") create an array and string respectively of size n; and sort() typically uses space O(log n). So n dominates for space complexity.
Time complexity: O(n log n)

*Note:* If we didn't pre-compute sort, we'd need to compare every character with every character via two nested loops, with time complexity O (n^2) and space complexity O(1)

### With a Data Structure, Leveraging Numeric Array and Character Codes
(Function used: isUniqueFnLeveragingCharCodes)
Space complexity: O(1) // constant b/c numeric array length is fixed by range of characters (not length of the str). It could alternatively be argued that space complexity is O(k) where k is size of the character set.
Time complexity: O(n) (for loop)


## My Commentary
I think my two approaches are solid, but Cracking the Codig Interview's solution (p 192) mentions that we already have a hash map construct for characters which is the alphabet and ASCII (and UNICODE) charactersets that uniquely maps a unique value (e.g. d) to a unique storage location. If, say, the characters are a-z, we can obtain a hash of each character's location in a numeric array by reference to its sequence order via str.charCodeAt(idx) or str.codePointAt(idx).