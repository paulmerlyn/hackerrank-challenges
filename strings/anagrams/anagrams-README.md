# Check Valid Anagram

Given two strings s and t, return 1 if t is an anagram of s, otherwise return 0.

## Example 1

Input:

s = listen
t = silent
Output:

1
Explanation:

Both strings have length 6.
Build a frequency map for 'listen': {l:1, i:1, s:1, t:1, e:1, n:1}.
Iterate over 'silent': s→count 1→0, i→1→0, l→1→0, e→1→0, n→1→0, t→1→0.
All counts return to zero and no mismatches occur, so they are anagrams.

## Example 2

Input:

s = hello
t = bellow
Output:

0
Explanation:

The strings have different lengths (5 vs 6). Since lengths differ, we can immediately conclude they are not anagrams and return 0.

## Input Format

The input consists of exactly two lines:

Line 1: A string s of length n, where 0 ≤ n ≤ 1000, containing only lowercase letters 'a' to 'z'.
Line 2: A string t of length m, where 0 ≤ m ≤ 1000, containing only lowercase letters 'a' to 'z'.
Both strings may be empty (n = 0 or m = 0).

No extra spaces or characters appear on each line.

## Constraints

0 ≤ s.length ≤ 1000
0 ≤ t.length ≤ 1000
For all i with 0 ≤ i < s.length, 'a' ≤ s[i] ≤ 'z'
For all i with 0 ≤ i < t.length, 'a' ≤ t[i] ≤ 'z'

## Output Format

A single boolean value (without quotes):

1 — if and only if t is an anagram of s (i.e., t can be formed by rearranging all characters of s).
0 — otherwise.

## Sample Input 0

a
a

## Sample Output 0

1

## Sample Input 1

ab
ba

## Sample Output 1

1

## Running the Code

The code reads from stdin. Provide input via piping:

```bash
printf "abcdd\nabcd" | node is-anagram.js
```

This checks if "abcdd" and "abcd" are anagrams (output: 0, since lengths differ).
