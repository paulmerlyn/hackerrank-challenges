# Sum lists
(Cracking the Coding Challenge p 95; solution 214)

## Description
You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a lined list.

### Example
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2) i.e. 617 + 295
Output: 2 -> 1 -> 9 i.e. 912

### Follow Up Variant:
Suppose the digits are stored in forward order. Repeat the same problem.
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5) i.e. 617 + 295
Output: 9 -> 1 -> 2 i.e. 912

## Strategy Ideas
### Idea 1
Set pointers p and q at heads
Initialize sum = 0
Initialize multiplier = 10^n where n is number of traversals
Traverse, adding (pdata + qdata) * multiplier // call a summing function (pdata, qdata, multiplier)
When at end of longest list stop

Obtain units, tens, hundreds, etc. by string reversal OR convert to array via split("") and shift

Time: O(n) where n is length of longest list
Space: O(n)

## Strategy Ideas for the "Follow Up" Variant
I've created file index-problem-2.5-reverse.js to tackle this. I've added some commentary in that file regarding need to remove the tail from the implementation. I've also made the list SLL to deny the opportunity of traversing to the tail then traversing backwards, combining units first as in my original implementation.

I could cache the higher powers (descending towards units as I traverse) into an array or string, using, say, unshift or reversal to combine the values with the correct 10^base once I know the length of each list, but would that be cheating?

   6 1
   2 9 5

Hints from Kilo Chat:
1. Could use a two-pass solution, determining the length of each list on the first pass, then using that knowledge to set the 10^base multiplier.
1. Could use stacks (either the call stack or an explicit stack) to reverse the processing order
1. Could use recursion (recommended by Chat)

### Thinking About Recursion
- return function that calls itself function(num1, num2, false, false)
- function(num1, num2, isLast1, isLast2) // return null unless true,true
- when at end of a list, call with num=0, isLast=true
- exit when true, returning the sum

I've now implemented the Follow-Up Variant in file index-problem-2.5-reverse.js. This solution is sound and applies recursion, though it could be considered cheating because I use an array to store the numbers.

Alternative strategies to consider:
1. Two passes down the number lists, the first pass to determine length differentials and then pad the shorter list by prepending 0-value nodes to the head.
2. Recursion with carry ... this seems hard to me, but here's what Kilo Chat offered:

Option 1: Recursive with Carry (Recommended)

function sumListsForward(head1, head2) {
    const len1 = getLength(head1);
    const len2 = getLength(head2);
    
    const result = addWithCarry(head1, head2, len1, len2);
    
    if (result.carry > 0) {
        const newHead = new SinglyLinkedListNode(result.carry);
        newHead.next = result.sum;
        return newHead;
    }
    
    return result.sum;
}

function addWithCarry(node1, node2, len1, len2) {
    if (len1 === 0 && len2 === 0) {
        return { sum: null, carry: 0 };
    }
    
    const val1 = len1 > 0 ? node1.data : 0;
    const val2 = len2 > 0 ? node2.data : 0;
    
    const nextResult = addWithCarry(
        len1 > 0 ? node1.next : null,
        len2 > 0 ? node2.next : null,
        len1 - 1, len2 - 1
    );
    
    const sum = val1 + val2 + nextResult.carry;
    const carry = Math.floor(sum / 10);
    
    const newNode = new SinglyLinkedListNode(sum % 10);
    newNode.next = nextResult.sum;
    
    return { sum: newNode, carry: carry };
}