# Rotate Matrix
Source: Cracking the Coding Interview problem 1.7 (p 91); solution on p 203

## Description
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degress. Can you do this in place?

## Strategy
before
b(1,1)  b(1,2)  b(1,3)
b(2,1)  b(2,2)  b(2,3)
b(3,1)  b(3,2)  b(3,3)

after clockwise
b(3,1) b(2,1) b(1,1)
b(3,2) b(2,2) b(1,2)
b(3,3) b(2,3) b(1,3)

after counter-clockwise
b(1,3) b(2,3) b(3,3)
b(1,2) b(2,2) b(3,2)
b(1,1) b(2,1) b(3,1)

Rules (clockwise)
row 1 cols 1-3: rows decrement N-1; cols fixed at 1
row 2 cols 1-3: rows decrement N-1; cols fixed at 2
row N cols 1-N: rows decrement N-1; cols fixed at N

Rules (counter-clockwise)
row 1 cols 1-3: rows increment 1-N; cols fixed at N
row 2 cols 1-3: rows increment 1-N; cols fixed at 2
row N cols 1-N: rows increement 1-N; cols fixed at 1

## Analysis
My solution in index.js works with time complexity O(N^2) and space complexity O(N^2). But the suggestion is to do in place, which will reduce space complexity.  Let's look deeper for a relationship.

For cw:
item(i,j) -> item(x,y)
1,1          1,3
1,2          2,3
1,3          3,3

2,1          1,2
2,2          2,2
2,3          3,2

3,1          1,1
3,2          2,1
3,3          3,1

Cycling thru N rows
1,1 moves to 3,1    // row changes from N to 1, and col is 1
1,2 moves to 2,1
1,3 moves to 1,1

2,1 moves to 3,2    // row changes from N to 1, and col increments to 2
2,2 moves to 2,2
2,3 moves to 1,2

3,1 moves to 3,3    // row changes from N to 1, and col becomes N
3,2 moves to 2,3
3,3 moves to 1,3

Cycling through rows and cols, put (1,1) into its destination (putting destination into temp)
Then put that temp into ITS destination (again using temp storage)
Stop when count >= N*N

I'm going to try to implement this in-place solution in indexV2.js