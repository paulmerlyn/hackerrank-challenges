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
}

function printDoublyLinkedList(node, sep) {
    while (node != null) {
        process.stdout.write(String(node.data));

        node = node.next;

        if (node != null) {
            process.stdout.write(sep);
        }
    }
}

const sumLists = (head1, head2) => {
  let p = head1, q = head2
  let sum = 0
  let base = 0
  let pData, qData

  const getMultiplier = base => Math.pow(10, base)

  const summer = (sum, pData, qData, multiplier) => sum + (pData + qData) * multiplier

  while (p !== null || q !== null) {
    pData = p !== null ? p.data : 0
    qData = q !== null ? q.data : 0

    sum = summer(sum, pData, qData, getMultiplier(base))
    base++
    p = p.next
    q = q.next
  }

  // Now build return list
  const sumStr = `${sum}`

  const sumList = new DoublyLinkedList()
  for (let i=sumStr.length - 1; i >= 0; i--) {
    sumList.insertNode(Number(sumStr[i]))
  }
  return sumList
}

const myDLL1 = new DoublyLinkedList()
myDLL1.insertNode(7)
myDLL1.insertNode(1)
myDLL1.insertNode(6)

const myDLL2 = new DoublyLinkedList()
myDLL2.insertNode(5)
myDLL2.insertNode(9)
myDLL2.insertNode(2)

let summedList = sumLists(myDLL1.head, myDLL2.head)
printDoublyLinkedList(summedList.head, "\n")

const myDLL3 = new DoublyLinkedList()
myDLL3.insertNode(9)
myDLL3.insertNode(9)
myDLL3.insertNode(9)

const myDLL4 = new DoublyLinkedList()
myDLL4.insertNode(1)
myDLL4.insertNode(0)
myDLL4.insertNode(1)

console.log("\n\n")
summedList = sumLists(myDLL3.head, myDLL4.head)
printDoublyLinkedList(summedList.head, "\n")
