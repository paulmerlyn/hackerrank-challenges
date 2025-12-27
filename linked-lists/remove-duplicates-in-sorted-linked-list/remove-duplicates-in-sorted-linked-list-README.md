# Remove Consecutive Duplicates from Sorted Linked List

Write a function `deleteDuplicates` that removes consecutive duplicate nodes in-place, retaining only the first node of each group. Return the head of the resulting list.

## Example

**Input:**

```
head = [1, 2, 2, 2, 3, 4, 4, 5]
```

**Output:**

```
[1, 2, 3, 4, 5]
```

**Explanation:**

- Given `1 → 2 → 2 → 2 → 3 → 4 → 4 → 5`.
- Start at 1 (next is 2, no skip).
- Move to 2; skip all consecutive 2's so that 2 links directly to 3 (removing two extra 2 nodes).
- Now list is `1 → 2 → 3 → 4 → 4 → 5`.
- Move to 3 (next is 4, no skip).
- At 4, skip the duplicate 4 so it links to 5.
- The resulting list is `1 → 2 → 3 → 4 → 5`.

**Note:** This challenge differs from "remove-kth-from-end-single-pass" in that it can be solved with a single runner (pointer), whereas the latter required two runners to find the kth node from the end. Additionally, since the list is sorted, duplicates are guaranteed to be consecutive, meaning we only need to check and remove adjacent nodes with the same value without worrying about non-adjacent duplicates further down the list.

## Input Format

The first line contains `n`, the length of the linked list.
The next `n` lines contain the elements of the linked list.

**Example:**

```
8
1
2
2
2
3
4
4
5
```

Here, `8` is the length of the linked list, followed by the node values.

## Constraints

- `0 <= n <= 1000`, where `n` is the number of nodes in the linked list
- `-10^5 <= Node.val <= 10^5` for each node in the list
- The linked list is sorted in non-decreasing order: for each node `u` with successor `v`, `u.val <= v.val`

## Output Format

The function returns the head of the deduplicated list.

## Sample Input 0

```
0
```

## Sample Input 1

```
1
1
```

## Sample Output 1

```
1
```

## How to Run

To run the solution using Node.js with input from stdin:

```bash
printf "8\n1\n2\n2\n2\n3\n4\n4\n5\n" | node index.js
```

Replace the input with your desired list length and node values.
