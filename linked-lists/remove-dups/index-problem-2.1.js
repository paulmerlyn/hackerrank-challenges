// My solution for Cracking the Coding Chalenge problem 2.1 (p 94)
// Implements Linked List set-up code from index-base.js

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

function removeDups(sLL) {
  if (sLL.head === null) return sLL
  let p1 = sLL.head
  let p2 = p1
  let foundData = [p1.data]
  let dedupedSLL = new SinglyLinkedList()
  dedupedSLL.insertNode(p1.data)
  while (p2.next !== null) {
    p2 = p1.next // move p2 forwards to explore
    if (foundData.includes(p2.data)) {
      // remove
      p1.next = p2.next
    } else {
      // add node to new list and add value to foundData
      foundData.push(p2.data)
      dedupedSLL.insertNode(p2.data)
    }
    p1 = p1.next // advance p1
  }
  return dedupedSLL
}

const mySLL = new SinglyLinkedList()
mySLL.insertNode(1)
mySLL.insertNode(2)
mySLL.insertNode(3)
mySLL.insertNode(1)
mySLL.insertNode(2)
mySLL.insertNode(3)

printSinglyLinkedList(mySLL.head, "\n")
console.log("\n\nvalue of head of list", mySLL.head.data)
console.log("\n\nvalue of tail of list", mySLL.tail.data)

console.log("**** After deduplication ****")
const deduped = removeDups(mySLL)
printSinglyLinkedList(deduped.head, "\n")
