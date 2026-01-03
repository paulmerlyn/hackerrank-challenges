/*
Here I tackle the variant of this problem where the linked lists are in reverse order 
i.e. rather than have the units at the head of the lists, now the units are at the tail.
Of course, if the list implementation has a tail pointer and is a DLL, this is trivial -
we'd simply traverse from the tail and apply the same process as I used in my index-problem-2.5.js.
But I presume we should assume that we either have a SLL or we have a DLL with no tail!
Let's try to solve this with a SLL implementation and no tail.
*/
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

const sumListsReverse = (head1, head2) => {
  const recursor = (p1, p2, isTail1, isTail2, numArr1, numArr2) => {
    if (!isTail1) {
      p1 = p1.next
      numArr1.unshift(p1.data)
      isTail1 = p1.next === null
    }
    if (!isTail2) {
      p2 = p2.next
      numArr2.unshift(p2.data)
      isTail2 = p2.next === null
    }
    if (!isTail1 || !isTail2) return recursor(p1, p2, isTail1, isTail2, numArr1, numArr2)
    else return { numArr1, numArr2 }
  }

  const summer = (numArr1, numArr2) => {
    const longerArr = numArr1.length > numArr2.length ? numArr1 : numArr2
    console.log("num arrays:", numArr1, numArr2)
    console.log("longerArr is:", longerArr)
    let sum = 0
    let base = 0
    for (let i=0; i < longerArr.length; i++) {
      console.log(`iteration i=${i} thru for loop with ${numArr1[i]} and ${numArr2[i]} and base ${base}`)
      let num1 = isNaN(numArr1[i]) ? 0 : numArr1[i] 
      let num2 = isNaN(numArr2[i]) ? 0 : numArr2[i] 
      sum = sum + (num1 + num2) * Math.pow(10, base)
      base++
    }
    return sum
  }

  if (head1 === null && head2 === null) return null
  let isTail1 = head1.next === null
  let isTail2 = head2.next === null
  let p1 = head1
  let p2 = head2
  let num1 = p1?.data, num2 = p2?.data
  const { numArr1, numArr2 } = recursor(p1, p2, isTail1, isTail2, [num1], [num2])
  const sum = summer(numArr1, numArr2)
  console.log(`sum is: ${sum}`)

  // Now build return list
  const sumStr = `${sum}`

  const sumList = new SinglyLinkedList()
  for (let i=0 - 1; i < sumStr.length; i++) {
    sumList.insertNode(Number(sumStr[i]))
  }
  return sumList
}

const mySLL1 = new SinglyLinkedList()
mySLL1.insertNode(6)
mySLL1.insertNode(1)
mySLL1.insertNode(7)
mySLL1.insertNode(1)

const mySLL2 = new SinglyLinkedList()
mySLL2.insertNode(2)
mySLL2.insertNode(9)
mySLL2.insertNode(5)

printSinglyLinkedList(mySLL1.head, "\n")
console.log("\n")
printSinglyLinkedList(mySLL2.head, "\n")


let resultList = sumListsReverse(mySLL1.head, mySLL2.head)
// console.log(res)
printSinglyLinkedList(resultList.head, "\n")


/*

6171
+295
----
6466
 
console.log("\n")
printSinglyLinkedList(summedList.head, "\n")

const mySLL3 = new SinglyLinkedList()
mySLL3.insertNode(9)
mySLL3.insertNode(9)
mySLL3.insertNode(9)

const mySLL4 = new SinglyLinkedList()
mySLL4.insertNode(1)
mySLL4.insertNode(0)
mySLL4.insertNode(1)

summedList = sumLists(mySLL3.head, mySLL4.head)
console.log("\n")
printSinglyLinkedList(summedList.head, "\n")
*/
