# Queue via Stacks Problem
Source: Cracking the Coding Interview 3.4 (p 99); solution p 236

## Description
Implement a MyQueue class which implements a queue using two stacks.

## Strategies
- Queue is defined as FIFO (push and shift)
- Stack provides LIFO push and pop

### Example Case
Queue:   5, 4, 3, 2, 1 ->
Push onto stack A: 5 -> 4 -> 3 -> 2 -> 1

This algo entails unstacking all nodes from A onto B (i.e. recreating B) for every removeOrDequeue(), which has time complexity O(n). Similarly, we're unstacking all nodes from B onto A (i.e. recreating A) for every removeOrDequeue(), which has time complexity O(n)


Push onto stack A: 5 -> 4 -> 3 -> 2 -> 1
Pop all from stack A onto stack B: 1 -> 2 -> 3 -> 4 -> 5

How do we keep the two stack synchronized?
Every time we pop from B, we pop all from stack B onto stack A:

On pop() // from B
... rebuild B, which B becomes 2 -> 3 -> 4 -> 5
Rebuild A on next push: 5 -> 4 -> 3 -> 2
Push to A: 6 -> 5 -> 4 -> 3 -> 2

On pop() twice // from B
... rebuild B, which becomes 2 -> 3 -> 4 -> 5 -> 6
... then perform double pop(), and B is now 4 -> 5 -> 6

Rebuild A on next push: 6 -> 5 -> 4

On pop() // from B
... rebuild B, which becomes 4 -> 5 -> 6
then perform pop(), and B is now 5 -> 6

## Big O Analysis
time complexity is O(n) for addOrEnqueue() or removeOrDequeue(), worst case (with no additional cost for successive operations of the same type)
space complexity is O(n)


## Alternative Approach 1
Kilo code tells me I can use one stack for enqueue and another stack for dequeue:

Enqueue
5 -> 4 -> 3 -> 2 -> 1 // len=5

Dequeue
1 -> 2 -> 3 -> 4 -> 5 // len=5

... which is kind of like I did above ... but Kilo points out that we only need to rebuild the dequeue stack if it's empty

enqueue()
Enqueue
6 -> 5 -> 4 -> 3 -> 2 -> 1 // len=6

dequeue()x5 // retrieve 1, 2, 3, 4, 5
Dequeue is empty
if (emptyDequeue) rebuild Dequeue stack, taking first len-poppedCount (=6-5 = 1) from Enqueue

## Refined Approach 2
Based on Kilo's help, I now have this enhancement:

enqueue:
push to inbox

dequeue:
if (outboxIsEmpty) {
  pop from inbox to outbox to empty inbox // we don't need to maintain the inbox after it's been popped (flipped) into the outbox!
  pop what you need from the outbox
} else {
  pop what you need from the outbox
}

## Big O Analysis
I've now implemented the above (i.e. Refined Approach 2)
I think time complexity of enqueue() is O(1), and time complexity of dequeue is O(n)
Space complexity of the solution is O(n)
