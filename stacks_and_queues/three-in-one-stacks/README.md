# Three-in-One Stacks Problem
Source: Cracking the Coding Interview 3.1 (p 98); solution p 227

## Description
Describe how you could use a single array to implement three stacks

## Strategies
Arrays have push(), pop(), unshift(), and shift() methods operating at end and beginning of array. 
This makes two stacks.

What if we back the array with a map?
stack1.push(1)
stack2.push(2)
stack3.push(3)

... no

After consulting Kilo Chat for hints, recommendation for most interviewees is offset based. I got trapped into thinking about my implementation of a stack in index-base.js, which uses built-in array methods. But if you think of an array as just an empty space to be used any way to hold data, you can conceive the following:

Approach 4: Offset-Based (Most Common Solution)
This is the standard approach:

Array: [s1_val1, s2_val1, s3_val1, s1_val2, s2_val2, s3_val2, ...]
Each stack uses every 3rd position:

Stack 1: indices 0, 3, 6, 9, ...
Stack 2: indices 1, 4, 7, 10, ...
Stack 3: indices 2, 5, 8, 11, ...
Each stack tracks how many elements it has, and calculates its next index as: stack_number + (count * 3)

