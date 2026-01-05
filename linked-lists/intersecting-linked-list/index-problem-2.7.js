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

const intersectingNode = (head1, head2) => {
  if (head1 === head2) return head1

  if (head1.next === null || head2.next === null) return null // not same head and one list has only one node

  let p = head1
  while (p !== null) {
    let q = head2
    while (q !== null) {
      if (p === q) {
        return p
      }
      q = q.next
    }
    p = p.next
  }

  return null
}

// Test case with an intersection...
// The tricky part is that when you have a shared node, you can't have it point to two different next nodes. 
// The standard approach is:

// Create the intersection structure properly
const xNode = new SinglyLinkedListNode("X")

// List 1: A -> B -> X -> (rest of list 1)
const mySLL1 = new SinglyLinkedList();
mySLL1.insertNode("A");
mySLL1.insertNode("B");
mySLL1.tail.next = xNode;
mySLL1.tail = xNode;
mySLL1.insertNode("C");
mySLL1.insertNode("D");

printSinglyLinkedList(mySLL1.head, "\n")
console.log("\n")

// List 2: U -> V -> W -> X -> (rest of list 1)
// Note: After X, both lists share the same nodes!
const mySLL2 = new SinglyLinkedList();
mySLL2.insertNode("U");
mySLL2.insertNode("V");
mySLL2.insertNode("W");
mySLL2.tail.next = xNode;
mySLL2.tail = xNode;
// Don't add more nodes to mySLL2 - it shares the rest with mySLL1


printSinglyLinkedList(mySLL2.head, "\n")

const intersects1 = intersectingNode(mySLL1.head, mySLL2.head)
console.log("\nResult for mySLL1 and mySLL2:", intersects1)

// Test case without an intersection
const mySLL3 = new SinglyLinkedList()
mySLL3.insertNode("A")
mySLL3.insertNode("B")
mySLL3.insertNode("C")

printSinglyLinkedList(mySLL3.head, "\n")
console.log("\n")

const mySLL4 = new SinglyLinkedList()
mySLL4.insertNode("D")
mySLL4.insertNode("E")
mySLL4.insertNode("F")

printSinglyLinkedList(mySLL4.head, "\n")
console.log("\n")

const intersects2 = intersectingNode(mySLL3.head, mySLL4.head)
console.log("\nResult for mySLL3 and mySLL4:", intersects2)
