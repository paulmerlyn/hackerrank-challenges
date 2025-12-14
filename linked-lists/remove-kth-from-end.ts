'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
let inputArray: string[] = [];

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputArray = inputString.split('\n');

    main();
});

function readLine() {
    return inputArray[currentLine++];
}

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    if (!head || k < 0) return head;

    k = k + 1; // Convert 0-based to 1-based

    let fast = head;
    for (let i = 0; i < k; i++) {
        if (!fast) return head;
        fast = fast.next;
    }

    if (!fast) return head.next; // k == n, remove head

    let slow = head;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next!;
    }

    slow.next = slow.next!.next;
    return head;
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    let head: ListNode | null = null;
    let current: ListNode | null = null;
    for (let i = 0; i < n; i++) {
        const val = parseInt(readLine().trim(), 10);
        const newNode = new ListNode(val);
        if (!head) {
            head = newNode;
            current = head;
        } else {
            current!.next = newNode;
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