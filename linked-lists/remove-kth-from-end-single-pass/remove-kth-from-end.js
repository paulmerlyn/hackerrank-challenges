'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
let inputArray = [];
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputArray = inputString.split('\n');
    main();
});
function readLine() {
    return inputArray[currentLine++];
}
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function removeKthFromEnd(head, k) {
    const atEndOfList = node => {
        return node?.next === null || node?.next === undefined;
    };
    // Phase 1: advance the p1 runner; progress down k items
    let p1 = head, p2 = head;
    let count = k;
    while (count > 0) {
        if (atEndOfList(p1))
            return head;
        p1 = p1.next;
        count--;
    }
    // Check if p1 runner is at EOL; remove head if so
    if (atEndOfList(p1)) {
        return head.next;
    }
    // Phase 2: Add p2 to head and progress to end
    console.log('Phase 2 begins');
    while (!atEndOfList(p1)) {
        p1 = p1.next;
        if (atEndOfList(p1)) {
            console.log('Perform removal during Phase 2');
            p2.next = p2.next.next;
            break;
        }
        p2 = p2.next;
    }
    return head;
}
function main() {
    const n = parseInt(readLine().trim(), 10);
    let head = null;
    let current = null;
    for (let i = 0; i < n; i++) {
        const val = parseInt(readLine().trim(), 10);
        const newNode = new ListNode(val);
        if (!head) {
            head = newNode;
            current = head;
        }
        else {
            current.next = newNode;
            current = newNode;
        }
    }
    const k = parseInt(readLine().trim(), 10);
    const result = removeKthFromEnd(head, k);
    // Print the list
    let output = '';
    let node = result;
    while (node) {
        output += node.val + ' ';
        node = node.next;
    }
    console.log(output.trim());
}
