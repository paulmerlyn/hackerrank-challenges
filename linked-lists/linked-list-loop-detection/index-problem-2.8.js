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

/* Algo: If the p (slow runner) and q (fast runner) ever point to the same node or q === q.next or p === p.next, we have a loop. */
const findCircularNode = head => {
  // Single or null node edge cases for early return
  if (!head || head.next === null) return null
  if (head.next === head) return head

  let p = head
  let q = head.next
  let circularNode = null

  while (q !== null) {
    if (p === q) { 
      console.log('p === q')
      circularNode = p
      break
    }
    if (q === q?.next) { 
      console.log('q === q.next')
      circularNode = q
      break
    }
    if (p === p.next) {
      console.log('p === p.next')
      circularNode = p
      break
    }
    p = p.next
    q = q.next?.next
  }

  return circularNode
}

// Test case 1 (is a circular linked list)
const commonNode = new SinglyLinkedListNode("C")

const mySLL1 = new SinglyLinkedList()
mySLL1.insertNode("A")
mySLL1.insertNode("B")

mySLL1.tail.next = commonNode
mySLL1.tail = commonNode

mySLL1.insertNode("D")
mySLL1.insertNode("E")

mySLL1.tail.next = commonNode
mySLL1.tail = commonNode

// printSinglyLinkedList(mySLL1.head, "\n") // We can print this, but it prints to infinity!

const circularNode1 = findCircularNode(mySLL1.head)
console.log("\ncircularNode for mySLL1 is:", circularNode1)

// Test case 2 (not a circular LL)
const mySLL2 = new SinglyLinkedList()
mySLL2.insertNode("A")
mySLL2.insertNode("B")
mySLL2.insertNode("C")
mySLL2.insertNode("D")
mySLL2.insertNode("D")

const circularNode2 = findCircularNode(mySLL2.head)
console.log("\ncircularNode for mySLL2 is:", circularNode2)

// Test case 3 (is a circular linked list)
const mySLL3 = new SinglyLinkedList()
mySLL3.insertNode("A")
mySLL3.insertNode("B")

mySLL3.tail.next = commonNode
mySLL3.tail = commonNode
commonNode.next = commonNode

const circularNode3 = findCircularNode(mySLL3.head)
console.log("\ncircularNode for mySLL3 is:", circularNode3)


