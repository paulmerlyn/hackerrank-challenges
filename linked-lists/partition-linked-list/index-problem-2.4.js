const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.previous = null
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node, sep) {
    while (node != null) {
        process.stdout.write(String(node.data));

        node = node.next;

        if (node != null) {
            process.stdout.write(sep);
        }
    }
}

const partition = (node, x) => {
  const left = new DoublyLinkedList()
  const right = new DoublyLinkedList()

  let p = node
  if (p === null) return -1

  while (p !== null) {
    if (p.data < x) {
      left.insertNode(p.data)
    } else {
      right.insertNode(p.data)
    }
    p = p.next
  }
  // printDoublyLinkedList(left.head, "\n")
  // printDoublyLinkedList(right.head, "\n")

  left.tail.next = right.head
  return left
}

const myDLL = new DoublyLinkedList()
myDLL.insertNode(3)
myDLL.insertNode(5)
myDLL.insertNode(8)
myDLL.insertNode(5)
myDLL.insertNode(10)
myDLL.insertNode(2)
myDLL.insertNode(1)

// printDoublyLinkedList(myDLL.head, "\n")
const partitionedList = partition(myDLL.head, 5)
printDoublyLinkedList(partitionedList.head, "\n")
