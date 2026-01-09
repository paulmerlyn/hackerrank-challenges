
class SinglyLinkedListStack {

  constructor(arrSize, stackCount) {
    this.arr = new Array(arrSize)
    this.stackSize = Math.floor(arrSize/stackCount)
    this.pointers = new Map()
    // Initialize pointers to the start of each stack's section
    for (let i = 1; i <= stackCount; i++) {
      this.pointers.set(`p${i}`, (i - 1) * this.stackSize - 1)
    }
    console.log(this.pointers)
  }

  getPointer(stackNum) {
    return this.pointers.get(`p${stackNum}`)
  }

  push(val, stackNum) {
    if (stackNum > 3) throw new Error(`Unsupported stackNum; stack must be 1, 2, or 3`)
    
    const stackStart = (stackNum - 1) * this.stackSize
    const pointer = this.pointers.get(`p${stackNum}`)
    
    if (pointer >= stackStart + this.stackSize - 1) {
      throw new Error(`Stack ${stackNum} overflow`)
    }
    
    const newIndex = pointer + 1
    this.arr[newIndex] = val
    this.pointers.set(`p${stackNum}`, newIndex)
    console.log(`We just assigned arr[${newIndex}] to value: ${val} inside push()`)
  }

  pop(stackNum) {
    if (stackNum > 3) throw new Error(`Unsupported stackNum; stack must be 1, 2, or 3`)
    
    const stackStart = (stackNum - 1) * this.stackSize
    const pointer = this.pointers.get(`p${stackNum}`)
    
    if (pointer < stackStart) {
      throw new Error(`Stack ${stackNum} is empty`)
    }
    
    const val = this.arr[pointer]
    this.arr[pointer] = undefined
    this.pointers.set(`p${stackNum}`, pointer - 1)
    return val
  }
}

// const myStack = new SinglyLinkedListStack()
// myStack.pushInsertNode(1)
// myStack.pushInsertNode(2)
// myStack.pushInsertNode(3)
// myStack.pushInsertNode(4)

// printSinglyLinkedList(myStack.head, "\n")
// console.log("\nPop from stack:", myStack.popRemoveNode().data)

const myStack1 = new SinglyLinkedListStack(18, 3)
console.log("\nTest case for myStack1", myStack1)
myStack1.push(1, 1)
myStack1.push(2, 2)
myStack1.push(3, 3)
myStack1.push(5, 1)
myStack1.pop(1)
myStack1.push(2, 1)
myStack1.push(3, 1)
myStack1.push(4, 1)
console.log(myStack1)

const myStack2 = new SinglyLinkedListStack(18, 3)
console.log("\nTest case for myStack2 should produce a stack overflow error", myStack2)
myStack2.push(1, 1)
myStack2.push(2, 2)
myStack2.push(3, 3)
myStack2.push(5, 1)
myStack2.pop(1)
myStack2.push(2, 1)
myStack2.push(3, 1)
myStack2.push(4, 1)
myStack2.push(5, 1)
myStack2.push(6, 1)
myStack2.push(7, 1)
myStack2.push(8, 4)
console.log(myStack2)

/*
0-5      -1
6-11     5
12-17    11
*/
