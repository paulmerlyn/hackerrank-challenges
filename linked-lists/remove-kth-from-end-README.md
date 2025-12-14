# One-Pass Removal of k-th Node from End

This repository contains the solution to a classic linked list challenge, focusing on removing the $k$-th node from the end in a single pass.

## The Problem: One-Pass Removal of k-th Node from End

Given the `head` of a singly linked list and an integer $k$, remove the $k$-th node from the end in one traversal and return the new head. If $k$ is invalid (e.g., $k \leq 0$ or $k$ is greater than the list length), return the original list.

The solution utilizes the two-pointer approach (often referred to as the "runner" technique) to maintain a distance of $k$ between two pointers, allowing the node to be removed in one scan.

### Example

| Input (head) | k | Output (Modified List) |
| :---: | :---: | :---: |
| `[5, 6, 7, 8]` | 3 | `[6, 7, 8]` |

**Explanation:**
The list has 4 nodes. The $k$-th node from the end with $k=3$ is the $4^{th}$ node from the end (value 5), which is the head. Removing it yields `[6, 7, 8]`.

---

## Input Format

The program is designed to read input from standard input (`stdin`) in the following format:

1.  The first line contains an integer $n$ denoting the length of the linked list.
2.  The next $n$ lines contain elements of the linked list.
3.  The last line contains the integer $k$.

### Input Example