# Count Number Pairs

Given a sorted array of positive integers and a target value, count the number of pairs (i, j) where i < j and array[i] + array[j] <= target.

## Example

Input:

prices = [1, 2, 3, 4, 5]
budget = 7
Output:

8
Explanation:

We need pairs (i, j) with i < j and prices[i] + prices[j] ≤ 7. List all pairs:

(1, 2) = 3 ≤ 7
(1, 3) = 4 ≤ 7
(1, 4) = 5 ≤ 7
(1, 5) = 6 ≤ 7
(2, 3) = 5 ≤ 7
(2, 4) = 6 ≤ 7
(2, 5) = 7 ≤ 7
(3, 4) = 7 ≤ 7
Pairs like (3,5)=8, (4,5)=9 exceed the budget. Total valid pairs = 8.

## Input Format

The input is provided in two lines:

The first line contains two space-separated integers n and budget, where:

0 ≤ n ≤ 1000
1 ≤ budget ≤ 10^9
The second line contains n space-separated integers prices[0], prices[1], ..., prices[n-1], where:

1 ≤ prices[i] ≤ 10^9 for all 0 ≤ i < n
prices is sorted in non-decreasing order

## Constraints

0 ≤ prices.length ≤ 1000
1 ≤ prices[i] ≤ 10^9 for all 0 ≤ i < prices.length
prices is sorted in non-decreasing order
1 ≤ budget ≤ 10^9
All inputs are integers

## Output Format

Output a single integer representing the total count of unique index pairs (i, j) with 0 ≤ i < j < n such that prices[i] + prices[j] ≤ budget. If n < 2, output 0.

## Sample Input 0

0
100

## Sample Output 0

0

## Sample Input 1

1
5
5

## Sample Output 1

0

## Running the Code

Use printf to provide input:

```bash
printf "5\n1 2 3 4 5\n7" | node index.js
```

For n=5, prices=[1,2,3,4,5], budget=7, outputs 8.

## Approaches

### Brute Force (O(n²))

The brute force approach (commented out in `index.js`) uses nested loops to check all pairs, counting those with sum <= budget. Simple but quadratic time.

Optimization: Since the array is sorted, if `prices[i] >= budget`, no need to check further pairs starting with `i` (break outer loop). Similarly, in the inner loop, if `prices[j] >= budget`, break early as subsequent `j` will also be >= budget.

### Two-Pointer (O(n))

Leverages the sorted array by maintaining two pointers: `left` at the start (index 0) and `right` at the end (index n-1).

- While `left < right`:
  - If `prices[left] + prices[right] <= budget`, all elements from `left` to `right-1` can pair with `right` to form valid sums (since the array is sorted). Add `right - left` to count and increment `left`.
  - Otherwise, decrement `right` to try smaller sums.

This achieves O(n) time because each pointer moves at most n times, and we count ranges efficiently without checking every pair.
