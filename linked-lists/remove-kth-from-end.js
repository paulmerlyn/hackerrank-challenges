'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var currentLine = 0;
var inputArray = [];
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
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function removeKthFromEnd(head, k) {
    if (!head || k < 0)
        return head;
    k = k + 1; // Convert 0-based to 1-based
    var fast = head;
    for (var i = 0; i < k; i++) {
        if (!fast)
            return head;
        fast = fast.next;
    }
    if (!fast)
        return head.next; // k == n, remove head
    var slow = head;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
}
function main() {
    var n = parseInt(readLine().trim(), 10);
    var head = null;
    var current = null;
    for (var i = 0; i < n; i++) {
        var val = parseInt(readLine().trim(), 10);
        var newNode = new ListNode(val);
        if (!head) {
            head = newNode;
            current = head;
        }
        else {
            current.next = newNode;
            current = newNode;
        }
    }
    var k = parseInt(readLine().trim(), 10);
    var result = removeKthFromEnd(head, k);
    // Print the list
    var output = '';
    var node = result;
    while (node) {
        output += node.val + ' ';
        node = node.next;
    }
    console.log(output.trim());
}
