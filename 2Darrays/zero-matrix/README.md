# Zero Matrix

Source: Cracking the Coding Interview p 91
(Solution on p 204)

## Description

Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0

## Strategy

// 3x2 MxN
[1 2 0][4 5 6][7 8 9]

rowMap // set map row key i to true when encountering a zero for (i,j)
colMap keys // set map col key j to true when encountering a zero for (i,j)

1st iteration: For any encountered 0, populate map

2nd iteration: zero-out by reference to map

## Analysis

Time complexity: O(n^2)
Space complexity: O(n^2)

... but after evaluation by AI, I see that I got the space complexity wrong. Here's Chat's correction:

Your Analysis Correction
You mentioned O(n²) for both time and space, but this should be:

Time: O(M×N) - proportional to total number of elements
Space: O(M+N) - proportional to sum of dimensions, not product

## Optimizations

Cracking the Coding Interview p 205 discusses the optimization of using a bit vector to reduce the space from O(M+N) to O(1)
