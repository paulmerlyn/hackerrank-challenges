# One-Pass Removal of k-th Node from End

This repository contains the solution to a classic linked list challenge, focusing on removing the $k$-th node from the end in a single pass.

## The Problem: One-Pass Removal of k-th Node from End

Given the `head` of a singly linked list and an integer $k$, remove the $k$-th node from the end in one traversal and return the new head. If $k$ is invalid (e.g., $k \leq 0$ or $k$ is greater than the list length), return the original list.

The solution utilizes the two-pointer approach (often referred to as the "runner" technique) to maintain a distance of $k$ between two pointers, allowing the node to be removed in one scan.

### Example

|  Input (head)  |  k  | Output (Modified List) |
| :------------: | :-: | :--------------------: |
| `[5, 6, 7, 8]` |  3  |      `[6, 7, 8]`       |

**Explanation:**
The list has 4 nodes. The $k$-th node from the end with $k=3$ is the $4^{th}$ node from the end (value 5), which is the head. Removing it yields `[6, 7, 8]`.

---

## Input Format

The program is designed to read input from standard input (`stdin`) in the following format:

1.  The first line contains an integer $n$ denoting the length of the linked list.
2.  The next $n$ lines contain elements of the linked list.
3.  The last line contains the integer $k$.

### Input Example

4 5 6 7 8 3

Here, $4$ is the length of the linked list, followed by the elements of the list and the value of $k$.

### Constraints

- $0 \leq \text{number of nodes in head} \leq 1000$
- $$-10^9 \leq \text{value of each node} \leq 10^9$$
- $$0 \leq k \leq 10^9$$

### Output Format

Return the head of the modified linked list after removal.

### Sample Input/Output

| Sample Input | Sample Output |                                                                                                                                                                                                                                                                                                  Notes                                                                                                                                                                                                                                                                                                  |
| :----------: | :-----------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  `1\n5\n1`   |      `5`      | Removing $k=1$ (the last node) yields the empty list. The list is empty, so we return the original list. **Note:** The user-provided sample output `5` seems to imply a logic error or non-standard interpretation for a $k=1$ removal. For a list `[5]` and $k=1$, the standard interpretation is the removal of node `5`, resulting in an empty list. Given the sample output `5`, the program might handle $k$ being greater than or equal to list length by returning the original list, but this contradicts the problem statement. _For standard implementation, $k=1$ removes the last element._ |
| `2\n1\n2\n0` |      `1`      |                                                                                                                                                                                                                                                                        $k=0$ is an invalid value. The original list is returned.                                                                                                                                                                                                                                                                        |

---

## Execution Guide

The solution is stored in a TypeScript file named `remove-kth-from-end.ts`.

### Steps to Execute

1.  **Build and run the TypeScript code in one step**:

    ```bash
    cd linked-lists
    npm run build-run
    ```

    This compiles the TypeScript to JavaScript and runs it. Provide input via stdin.

2.  **Run with input**:
    The program reads the structured input from standard input. You can pipe the input directly.

    **Example (List: $1 \to 2 \to 3 \to 4 \to 5$, remove $k=2$ from end):**

    ```bash
    printf "5\n1\n2\n3\n4\n5\n2\n" | npm run build-run
    ```

    Output: `1 2 3 5` (The node with value 4 is removed)

    **Alternative: Save input to a file and redirect:**

    ```bash
    echo -e "5\n1\n2\n3\n4\n5\n2" > input.txt
    npm run build-run < input.txt
    ```

    **Manual compilation (if needed):**
    If you prefer to compile separately:

    ```bash
    npx tsc remove-kth-from-end.ts
    node remove-kth-from-end.js
    ```
