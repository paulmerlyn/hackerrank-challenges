/* 
Implementation of our stack as a Singly Linked List where we insert nodes at the head and remove from the head 
(or conceivably to/from the tail if we maintain a tail pointer).
*/
const MyQueue = class {
    constructor() {
        this.stackA = new SinglyLinkedListStack()
        this.stackB = new SinglyLinkedListStack()
    }

    addOrEnqueue(nodeData) {
        this.stackA.pushInsertNode(nodeData)
    }

    removeOrDequeue() {

    }
}
const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedListStack = class {
    constructor() {
        this.head = null;
    }

    pushInsertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            node.next = this.head
            this.head = node;
        }
    }

    popRemoveNode() {
      const top = this.head
      if (top === null) throw new Error("Empty stack")
      this.head = this.head.next
      return top
    }

    peakNode() {
      return this.head.data
    }

    isEmpty() {
      return this.head === null
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

const myStack = new SinglyLinkedListStack()
myStack.pushInsertNode(1)
myStack.pushInsertNode(2)
myStack.pushInsertNode(3)
myStack.pushInsertNode(4)

printSinglyLinkedList(myStack.head, "\n")
console.log("\nPop from stack:", myStack.popRemoveNode().data)
