# Lexicographical Letter Combinations of Phone Digits

Given a string of digits where '2'-'9' map to letters (like on a phone keypad) and '0','1' map to themselves, return all possible letter combinations in lexicographical order.

## Examples

### Example 1

**Input:**

```
digits = 23
```

**Output:**

```
['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
```

**Explanation:**

Step 1: Map '2' → [a, b, c], '3' → [d, e, f].  
Step 2: Use backtracking: fix first letter then append each letter from the second set.  
For 'a': combine with [d, e, f] → [ad, ae, af]  
For 'b': combine with [d, e, f] → [bd, be, bf]  
For 'c': combine with [d, e, f] → [cd, ce, cf]  
Step 3: Collect all combinations and sort lexicographically (they are already in order).

### Example 2

**Input:**

```
digits = 203
```

**Output:**

```
['a0d', 'a0e', 'a0f', 'b0d', 'b0e', 'b0f', 'c0d', 'c0e', 'c0f']
```

**Explanation:**

Step 1: Map '2' → [a, b, c], '0' → ['0'], '3' → [d, e, f].  
Step 2: Backtracking over three positions:  
First letter from '2': a, then insert '0', then each of [d, e, f] → [a0d, a0e, a0f]  
Next '2' letter: b → [b0d, b0e, b0f]  
Next '2' letter: c → [c0d, c0e, c0f]  
Step 3: The results are collected in lexicographical order.

## Input Format

The first and only line of input contains a single string of digits, digits.

## Constraints

- 0 <= digits.length <= 10
- For all 0 <= i < digits.length, digits[i] is one of the characters '0','1','2','3','4','5','6','7','8','9'
- Mapping is defined as: '2'->3 letters, '3'->3 letters, '4'->3 letters, '5'->3 letters, '6'->3 letters, '7'->4 letters, '8'->3 letters, '9'->4 letters, '0'->"0", '1'->"1"
- Total number of combinations (∏ over i of mapping_size(digits[i])) will not exceed 10^6 under the above length bound

## Output Format

Return a STRING_ARRAY containing all possible letter combinations that the input digit string could represent using the standard phone keypad mapping: '2'->"abc", '3'->"def", '4'->"ghi", '5'->"jkl", '6'->"mno", '7'->"pqrs", '8'->"tuv", '9'->"wxyz", '0'->"0", '1'->"1". The returned array must be sorted in ascending lexicographical order.

## Sample Input 0

```
23
```

## Sample Output 0

```
ad
ae
af
bd
be
bf
cd
ce
cf
```

## Sample Input 1

```
203
```

## Sample Output 1

```
a0d
a0e
a0f
b0d
b0e
b0f
c0d
c0e
c0f
```

## How to Run

To run the solution using Node.js with input from stdin:

```bash
printf "23" | node letter-combo-of-phone-digits.js
```

Replace `23` with your desired input digits.
