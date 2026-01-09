
class SinglyLinkedListStack {

  constructor(arrSize, stackCount) {
    this.arr = new Array(arrSize)
    this.stackSize = Math.floor(arrSize/stackCount)
    this.pointers = new Map()
    for (let i = 1; i <= stackCount; i++) {
      this.pointers.set(`p${i}`, -1)
    }
    console.log(this.pointers)
  }

  getPointer(stackNum) {
    return this.pointers.get(`p${stackNum}`)
  }

  // Decrement after pop()
  decrementStackPointer(stackNum) {
    const stackFactor = (stackNum - 1) * this.stackSize
    const pointer = this.pointers.get(`p${stackNum}`)
    const pointerNew = (pointer - 1) % this.stackSize + stackFactor
    this.pointers.set(`p${stackNum}`, pointerNew)
  }

  // Increment after push()
  incrementStackPointer(stackNum) {
    const stackFactor = (stackNum - 1) * this.stackSize
    const pointer = this.pointers.get(`p${stackNum}`)
    const pointerNew = (pointer + 1) % this.stackSize + stackFactor
    this.pointers.set(`p${stackNum}`, pointerNew)
  }

  push(val, stackNum) {
    try {
      if (stackNum > this.stackSize) throw new Error(`Unsupported stackNum; stack must be no greater than ${this.stackSize}`)
      this.incrementStackPointer(stackNum)
      const pointer = this.getPointer(stackNum)
      this.arr[pointer] = val
      console.log(`We just assigned arr[${pointer}] to value: ${val} inside push()`)
    } catch(e) {
      console.log("Unsupported stackNum!")
    }
  }

  pop(stackNum) {
    if (stackNum > this.stackSize) throw new Error(`Unsupported stackNum; stack must be no greater than ${this.stackSize}`)
    const val = this.arr[this.getPointer(stackNum)]
    delete this.arr[this.getPointer(stackNum)]
    this.decrementStackPointer(stackNum)
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

const myStack = new SinglyLinkedListStack(18, 3)
console.log(myStack)
myStack.push(1, 1)
myStack.push(2, 2)
myStack.push(3, 3)
myStack.push(5, 1)
myStack.pop(1)
myStack.push(2, 1)
myStack.push(3, 1)
myStack.push(4, 1)
myStack.push(5, 1)
myStack.push(6, 1)
myStack.push(7, 1)
myStack.push(8, 4)
console.log(myStack)

/*
0-5      -1
6-11     5
12-17    11
*/
