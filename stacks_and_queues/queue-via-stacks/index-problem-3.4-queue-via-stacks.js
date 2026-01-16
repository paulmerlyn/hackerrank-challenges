/* 
Implementation of our stack as a Singly Linked List where we insert nodes at the head and remove from the head 
(or conceivably to/from the tail if we maintain a tail pointer).
*/
class QueueViaTwoStacks {
    constructor() {
        this.inStack = new SinglyLinkedListStack()
        this.outStack = new SinglyLinkedListStack()
    }

    enqueue(nodeData) {
        this.inStack.pushInsertNode(nodeData)
    }

    dequeue() {
        if (this.outStack.isEmpty()) {
            let data
            while(!this.inStack.isEmpty()) {
                data = this.inStack.popRemoveNode().data
                this.outStack.pushInsertNode(data)
            }
        }
        return this.outStack.isEmpty() ? null : this.outStack.popRemoveNode().data
    }
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.max = this.data
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

    peekNode() {
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

// const myStack = new SinglyLinkedListStack()
// myStack.pushInsertNode(1)
// myStack.pushInsertNode(2)
// myStack.pushInsertNode(3)
// myStack.pushInsertNode(4)

// printSinglyLinkedList(myStack.head, "\n")
// console.log("\nPop from stack:", myStack.popRemoveNode().data)

const myQueue = new QueueViaTwoStacks()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)

console.log("Dequeue from queue:", myQueue.dequeue()) // should be 1
console.log("Dequeue from queue:", myQueue.dequeue()) // should be 2
myQueue.enqueue(5)
console.log("Dequeue from queue:", myQueue.dequeue()) // should be 3
myQueue.dequeue()
myQueue.dequeue()
console.log("Dequeue from queue:", myQueue.dequeue()) // should be null