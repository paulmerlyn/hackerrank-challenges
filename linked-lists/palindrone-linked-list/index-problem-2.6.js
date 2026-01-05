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

const isPalindrome = (head, tail) => {
  if (head === null || head.next === null) return false
  console.log("inside isPalindrome with head.data:", head.data, "and tail.data:", tail.data)
  let p = head, q = tail
  let palindrome = true
  let exit = false
  while (!exit) {
    console.log("p.data is", p.data, "and q.data is", q.data)
    if (p.data !== q.data) {
      palindrome = false
      exit = true
    } else {
      if (p.next === q.previous) {
        exit = true
      }
      if (p.next === q && q.previous === p) {
        exit = true
      }
      p = p.next
      q = q.previous
    }
  }
  return palindrome
}

const myDLL1 = new DoublyLinkedList()
myDLL1.insertNode("M")
myDLL1.insertNode("A")
myDLL1.insertNode("D")
myDLL1.insertNode("A")
myDLL1.insertNode("M")

printDoublyLinkedList(myDLL1.head, "\n")
console.log("\n", myDLL1.tail.previous.data) // should be A
console.log(myDLL1.tail.data) // should be M

const isPal1 = isPalindrome(myDLL1.head, myDLL1.tail)
console.log(isPal1) // MADAM true

const myDLL2 = new DoublyLinkedList()
myDLL2.insertNode("E")
myDLL2.insertNode("A")
myDLL2.insertNode("T")

const isPal2 = isPalindrome(myDLL2.head, myDLL2.tail)
console.log(isPal2) // EATS false

const myDLL3 = new DoublyLinkedList()

const isPal3 = isPalindrome(myDLL3.head, myDLL3.tail)
console.log(isPal3) // null false

const myDLL4 = new DoublyLinkedList()
myDLL4.insertNode("Q")
myDLL4.insertNode("Q")

const isPal4 = isPalindrome(myDLL4.head, myDLL4.tail)
console.log(isPal4) // QQ true

const myDLL5 = new DoublyLinkedList()
myDLL5.insertNode("Q")

const isPal5 = isPalindrome(myDLL5.head, myDLL5.tail)
console.log(isPal5) // Q false

