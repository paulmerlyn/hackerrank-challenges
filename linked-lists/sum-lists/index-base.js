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

const myDLL = new DoublyLinkedList()
myDLL.insertNode(1)
myDLL.insertNode(2)
myDLL.insertNode(3)
myDLL.insertNode(1)
myDLL.insertNode(4)
myDLL.insertNode(5)

printDoublyLinkedList(myDLL.head, "\n")
console.log("\n", myDLL.tail.previous.data) // should be 4
console.log(myDLL.tail.data) // should be 5
