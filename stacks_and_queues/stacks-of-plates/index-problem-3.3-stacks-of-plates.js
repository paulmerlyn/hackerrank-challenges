/* 
Implementation of our stack as a Singly Linked List where we insert nodes at the head and remove from the head 
(or conceivably to/from the tail if we maintain a tail pointer).
*/
const StacksOfPlates = class {
    constructor(capacity) {
        this.capacity = capacity // max nodes ("plates") per stack
        this.stacks = []
        this.stacks.push(new SinglyLinkedListStack())
        this.activeStackIndex = 0
    }

    push(nodeData) {
        let activeStack = this.stacks[this.activeStackIndex]
        if (activeStack.count === this.capacity) {
            this.activeStackIndex++
            this.stacks.push(new SinglyLinkedListStack())
            activeStack = this.stacks[this.activeStackIndex]  // Get the new stack
        }
        activeStack.pushInsertNode(nodeData)
    }

    pop() {
        const activeStack = this.stacks[this.activeStackIndex]
        console.log("Active stack index inside pop() is:", this.activeStackIndex)
        if (activeStack.isEmpty()) {
            return null // or throw error, depending on how we want to handle popping from empty stack
        } else {
            const poppedNode = activeStack.popRemoveNode()
            if (activeStack.count === 0) {
                this.activeStackIndex--
                this.stacks.pop()
            }
            return poppedNode.data
        }
    }

    popAt(index) {
        // Validate index
        if (index < 0 || index >= this.stacks.length) {
            throw new Error("Invalid stack index");
        }

        const stackAtIndex = this.stacks[index]
        if (stackAtIndex.isEmpty()) {
            throw new Error("Stack at index is empty");
        }

        const poppedNode = stackAtIndex.popRemoveNode()
        if (stackAtIndex.count === 0) {
            this.stacks.splice(index, 1);
        } // after popping from this indexed stack, remove it from this.stacks

        // Adjust active stack index if needed
        if (index <= this.activeStackIndex) {
            this.activeStackIndex = Math.max(0, this.activeStackIndex - 1);
        }
    
        return poppedNode.data;
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
        this.count = 0
    }

    pushInsertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);
        this.count++

        if (this.head == null) {
            this.head = node;
        } else {
            node.next = this.head
            this.head = node;
        }
    }

    popRemoveNode() {
      const top = this.head
      this.count--
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

const myStackOfPlates = new StacksOfPlates(5)
myStackOfPlates.push(1)
myStackOfPlates.push(2)
myStackOfPlates.push(3)
myStackOfPlates.push(4)
console.log("Active stack index after pushing four plates is:", myStackOfPlates.activeStackIndex)
myStackOfPlates.push(5)
myStackOfPlates.push(6)
console.log("Active stack index after pushing six plates is:", myStackOfPlates.activeStackIndex)
const poppedPlate6 = myStackOfPlates.pop()
console.log("Active stack index after popping sixth plate is:", myStackOfPlates.activeStackIndex)
console.log("Popped plate 6 value is:", poppedPlate6)
myStackOfPlates.push("plate 6")
myStackOfPlates.push("plate 7")
const poppedPlate7 = myStackOfPlates.pop()
console.log("Active stack index after popping seventh plate is:", myStackOfPlates.activeStackIndex)
console.log("Popped plate 7 value is:", poppedPlate7)
const poppedPlate5 = myStackOfPlates.popAt(0)
console.log("Popped plate 5 value is:", poppedPlate5)

// printSinglyLinkedList(myStack.head, "\n")
// console.log("\nPop from stack:", myStack.popRemoveNode().data)
