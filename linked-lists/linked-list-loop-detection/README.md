# Loop Detection
Source: Cracking the Coding Interview p 95 (solution p 223)

## Description
Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

DEFINITION: Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

EXAMPLE:
Input:  A -> B -> C -> D -> E -> C [the same as C as earlier]
Output: C

## Strategy
Q. What makes this LL a list with a loop?
A. Each node is NOT unique

### Idea 1
To detect non-unique nodes, we could use a Map or a Set, storing each node in the Set. Check the set to see if it already contains the node.
Advantage: should have O(n) runtime and detect the node in a single traversal at cost of more space.

### Idea 2 (very similar to Option 1?)
Two nodes (B and E) point to C. In a LL that is not circular, only one node points to each node.
To detect multi-referenced node, we could keep a count (in a Map) of how many nodes reference each node, Map(key=node, value=count)

### Idea 3
Try to sever the list at various places. If you sever it b/w D -> E, you can't reach C ... No, I don't think this makes sense!

### Idea 4
Using a double-runner, you get to the mid-point of the list. If you apply this strategy and it fails, it's because you have a loop. If the p (slow runner) and q (fast runner) ever point to the same node or q === q.next or p === p.next, we have a loop.

Input:  A -> B -> C -> D -> E -> E
Output: E

Input:  A -> B -> C -> D -> E -> F -> D [the same as C as earlier]
Output: D

I'm going to implement Idea 4 because it's time efficient and space efficient O(n) time and O(1) space

After doing this and coding it, I consulted Kilo Chat, which pointed that:

"The Core Issue: Your current algorithm stops when the runners meet, but that meeting point is NOT necessarily the start of the loop. You need a second phase to find the actual start." 

So my algorith correctly detects if the LL has a circularity, but it doesn't always return the start of the loop. Here is Kilo Chat's solution using two runners to correctly find and return the beginning of the lop:

const findCircularNode = head => {
    if (!head || !head.next) return null;
    
    // Phase 1: Detect if cycle exists
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) break; // Found a meeting point
    }
    
    // No cycle found
    if (!fast || !fast.next) return null;
    
    // Phase 2: Find the start of the cycle
    slow = head;  // Reset slow to head
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow; // This is the start of the cycle
}

Kilo Chat actually favors the strategy of using a Set, even though it is O(n) time; O(n) space:

const findCircularNode = head => {
    const seen = new Set();
    let current = head;
    
    while (current) {
        if (seen.has(current)) return current;
        seen.add(current);
        current = current.next;
    }
    
    return null;
}

Cracking the Coding Interview solution on p 255 also has some interesting comments on how to find the beginning of the loop node. When slow (p) coincides with fast (q)
