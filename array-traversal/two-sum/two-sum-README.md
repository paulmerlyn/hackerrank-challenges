# Two Sum for Slot Length

This is a solution to the HackerRank "Two Sum" problem, where you need to find indices of two task durations that sum to a given slot length.

## Problem

Given an array of positive integers `taskDurations` and an integer `slotLength`, return the indices of two elements that sum to `slotLength` or `[-1, -1]` if no such pair exists. Indices must be 0-based with `i < j`.

## Input Format

- First line: integer `n` (number of tasks)
- Next `n` lines: each containing one task duration
- Last line: integer `slotLength`

## Output Format

Two space-separated integers `i j` representing the indices, or `-1 -1` if no pair exists.

## Running the Code

The code reads from stdin, so provide input via piping:

```bash
echo -e "4\n2\n7\n11\n15\n9" | node index.js
```

or:

```bash
printf "4\n2\n7\n11\n15\n9" | node index.js
```

This should output `0 1` (indices of 2 and 7).

## Implementations

### Paul's Initial Implementation (O(n²))

The code uses a brute force approach with nested loops to check all pairs, ensuring `i < j`. This is simple and works well for n ≤ 1000.

### Optimal Implementation (O(n))

For better performance, use a hash map to store seen values:

```javascript
function findTaskPairForSlot(taskDurations, slotLength) {
  const seen = new Map();
  for (let i = 0; i < taskDurations.length; i++) {
    const complement = slotLength - taskDurations[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(taskDurations[i], i);
  }
  return [-1, -1];
}
```

This achieves O(n) time and space complexity.
