/*
push(n) {
  identify which stack is empty (label it as other or auxillary; label non-empty stack as primary)
  if !primary && !aux: {
    push to prim // beginning or after multi-pop
    return
  } else {
    if n < peek(prim): { 
      push to prim
      return
    }
  } else {
    // n belongs somewhere below
    while peek(prim) < n {
      pop-push onto aux
    }
    push(n) onto aux
    while peek(prim) !== null {
      pop-push onto other
    }
    while peek(aux) !== null{
      pop-push onto prim
    }
  }
}
*/

class SortedStack {
    constructor() {
        this.primary = new SinglyLinkedListStack()
        this.aux = new SinglyLinkedListStack()
    }

    push(n) {
        if (this.primary.isEmpty() && this.aux.isEmpty()) {
            this.primary.pushInsertNode(n)
            return
        } else if (n < this.primary.peekNode()) {
            this.primary.pushInsertNode(n)
            return
        } else { // n belongs somewhere below
            while(!this.primary.isEmpty() && this.primary.peekNode() < n) {
                this.aux.pushInsertNode(this.primary.popRemoveNode().data)
            }
            this.aux.pushInsertNode(n)
            while (!this.aux.isEmpty()) {
                this.primary.pushInsertNode(this.aux.popRemoveNode().data)
            }
        }
    }

    pop() {
        return this.primary.popRemoveNode()
    }
}

/* 
Implementation of our stack as a Singly Linked List where we insert nodes at the head and remove from the head 
(or conceivably to/from the tail if we maintain a tail pointer).
*/
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

    peekNode() {
      return this.head?.data
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

const mySortedStack = new SortedStack()
mySortedStack.push(1)
mySortedStack.push(5)
mySortedStack.push(3)
mySortedStack.push(2)
mySortedStack.push(6)
mySortedStack.push(10)
mySortedStack.push(1)

printSinglyLinkedList(mySortedStack.primary.head, "\n")
