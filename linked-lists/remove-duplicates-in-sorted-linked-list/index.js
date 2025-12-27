'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep) {
    while (node != null) {
        process.stdout.write(String(node.data));

        node = node.next;

        if (node != null) {
            process.stdout.write(sep);
        }
    }
}



/*
 * Complete the 'deleteDuplicates' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST head as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteDuplicates(head) {
    // Write your code here
    // 5551
    if (!head) return head
    
    let p = head
    while (p.next) {
        if (p.next.data === p.data) {
            p.next = p.next.next
        } else p = p.next
    }
    return head
}

function main() {
    let head = new SinglyLinkedList();

    const headCount = parseInt(readLine().trim(), 10);

    for (let i = 0; i < headCount; i++) {
        const headItem = parseInt(readLine().trim(), 10);
        head.insertNode(headItem);
    }

    const result = deleteDuplicates(head.head);

    printSinglyLinkedList(result, '\n');
    process.stdout.write('\n');
}
