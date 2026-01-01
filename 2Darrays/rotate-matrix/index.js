/*
before
b(1,1)  b(1,2)  b(1,3)
b(2,1)  b(2,2)  b(2,3)
b(3,1)  b(3,2)  b(3,3)

after clockwise
b(3,1) b(2,1) b(1,1)
b(3,2) b(2,2) b(1,2)
b(3,3) b(2,3) b(1,3)

after counter-clockwise
b(1,3) b(2,3) b(3,3)
b(1,2) b(2,2) b(3,2)
b(1,1) b(2,1) b(3,1)

Rules (clockwise)
row 1 cols 1-3: rows decrement N-1; cols fixed at 1
row 2 cols 1-3: rows decrement N-1; cols fixed at 2
row N cols 1-N: rows decrement N-1; cols fixed at N

Rules (counter-clockwise)
row 1 cols 1-3: rows increment 1-N; cols fixed at N
row 2 cols 1-3: rows increment 1-N; cols fixed at 2
row N cols 1-N: rows increement 1-N; cols fixed at 1

1 2
3 4

3 1          2 4
4 2          1 3
*/

const rotate = (twoD, direction) => {
  const N = twoD.length
  let rotated = []
  let colCount = 0
  if (direction === 'cw') {
    for (let i=0; i < N; i++) {
      let row = []
      colCount++
      for (let j=N; j >0; j--) {
        row.push(twoD[j-1][i])
      }
      rotated.push(row)
    }
    return rotated
  }
  if (direction === 'ccw') {
    for (let i=N; i > 0; i--) {
      let row = []
      //colCount++
      for (let j=1; j <= N; j++) {
        row.push(twoD[j-1][i-1])
      }
      rotated.push(row)
    }
    return rotated    
  }
  if (direction === 'ccw') {
    
  }
  return -1
}

const tc1 = [[1,2],[3,4]]
const tc2 = [[1,2,3],[4,5,6],[7,8,9]]
const tc3 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

console.log(rotate(tc1, "cw"))
console.log(rotate(tc1, "ccw"))
console.log(rotate(tc2, "cw"))