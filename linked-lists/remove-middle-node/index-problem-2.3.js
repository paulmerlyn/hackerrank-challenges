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

const deleteFromMiddle = midNode => {
  let p = midNode
  while (p.next.next !== null) {
    p.data = p.next.data
    p = p.next
  }
  p.data = p.next.data
  p.next = null // sever the final node

}

const mySLL = new SinglyLinkedList()
mySLL.insertNode("a")
mySLL.insertNode("b")
mySLL.insertNode("c")
mySLL.insertNode("d")
mySLL.insertNode("e")
mySLL.insertNode("f")

printSinglyLinkedList(mySLL.head, "\n")

const cNode = mySLL.head.next.next
console.log("cNode has value", cNode.data)

deleteFromMiddle(cNode)
printSinglyLinkedList(mySLL.head, "\n")

// a -> b -> c -> d -> e -> f
