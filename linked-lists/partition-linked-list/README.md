# Partition Linked List
From Cracking the Coding Interview p 94 (problem 2.4). Solution on p 212

## Description
Write code to partition a linked list around a value x such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right portion"; it does not need to appear between the left and right partitions.

Example
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition =5]
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

## Strategy Notes
Swap or bubble?

3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 cf 3 -> 5 no change b/c 3 <= P
3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 cf 5 -> 8 no change b/c P <= 8
3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 cf 8 -> 5 swap b/c 8 > P
3 -> 5 -> 5 -> 8 -> 10 -> 2 -> 1 cf 8 -> 10 no change b/c 8 < 10
3 -> 5 -> 5 -> 8 -> 10 -> 2 -> 1 cf 10 -> 2 swap b/c 10 > 2
3 -> 5 -> 5 -> 8 -> 2 -> 10 -> 1 cf 10 -> 1 swap b/c 10 > 1
3 -> 5 -> 5 -> 8 -> 2 -> 1 -> 10 At end, so return to beginning having set at least one swap flag
3 -> 5 -> 5 -> 8 -> 2 -> 1 -> 10 cf 3 -> 5 no change b/c 3 <= P
3 -> 5 -> 5 -> 8 -> 2 -> 1 -> 10 cf 5 -> 5 no change b/c 5 <= 5
3 -> 5 -> 5 -> 8 -> 2 -> 1 -> 10 cf 5 -> 8 no change b/c 5 <= 8
3 -> 5 -> 5 -> 8 -> 2 -> 1 -> 10 cf 8 -> 2 swap b/c 8 > 2
3 -> 5 -> 5 -> 2 -> 8 -> 1 -> 10 cf 8 -> 1 swap b/c 8 > 1
3 -> 5 -> 5 -> 2 -> 1 -> 8 -> 10 cf 8 -> 1 swap b/c 8 > 1
3 -> 5 -> 5 -> 2 -> 1 -> 8 -> 10 cf 8 -> 10 no change b/c 8 <= 10
3 -> 5 -> 5 -> 2 -> 1 -> 8 -> 10 At end, so return to beginning having set at least one swap flag
...
5 swaps with 2: 3 -> 5 -> 2 -> 5 -> 1 -> 8
1 swaps with 5: 3 -> 5 -> 2 -> 1 -> 5 -> 8
5 swaps with 2: 3 -> 2 -> 5 -> 1 -> 5 -> 8
5 swaps with 1: 3 -> 2 -> 1 -> 5 -> 5 -> 8

## Analysis
I asked Kilo Chat to analyze my approach. It didn't love it, saying that bubble sort has O(n^2) time complexity and can be error prone, requiring careful pointer manipulation.
   
   Recommended approach is to use a Two-lists approach b/c it's simpler and O(n) time. Go thru the list and place each node that you encounter into either a before list (i.e. list of nodes that should be on left side of the partition) or an after list (i.e. list of nodes that should be on right side of the partition).

   Make sure you keep a pointer to the tail of each list as well as to the head?

   Join the before and after lists

An alternative In-Place Rearrangement approach offered by Chat involves moving a node to the head of a list:

   // Insert at front
                current.next = head;
                head = current;

Full algo for In-Place Rearrangement:

   function partition(head, x) {
    let current = head;
    let runner = head;
    
    while (current !== null) {
        if (current.data < x) {
            // Move current to front
            if (current !== head) {
                // Remove current from its position
                runner.next = current.next;
                // Insert at front
                current.next = head;
                head = current;
            }
        }
        runner = current;
        current = current.next;
    }
    
    return head;
}

## My Implementation of the Two-Lists Solution
I coded an implementation in file index-problem-2.4.js. 

### Big O Analysis
I think my solution has:

time complexity O(n) where n is the length of the list

space complexity O(n)

Kilo Chat says my solution is excellent although "Your solution creates new nodes, which uses O(n) extra space. An optimized version could rearrange existing nodes". Here's the optimized version (which I don't fully understand):

const partition = (head, x) => {
    let leftHead = null, leftTail = null;
    let rightHead = null, rightTail = null;
    let current = head;
    
    while (current !== null) {
        let next = current.next;  // Save next pointer
        current.next = null;      // Disconnect current node
        
        if (current.data < x) {
            // Add to left list
            if (leftHead === null) {
                leftHead = current;
                leftTail = current;
            } else {
                leftTail.next = current;
                leftTail = current;
            }
        } else {
            // Add to right list
            if (rightHead === null) {
                rightHead = current;
                rightTail = current;
            } else {
                rightTail.next = current;
                rightTail = current;
            }
        }
        current = next;
    }
    
    // Connect the lists
    if (leftTail) {
        leftTail.next = rightHead;
    }
    
    return leftHead || rightHead;
}
