const rotate = twoD => {
  const N = twoD.length
  const swapsMax = Math.pow(N, 2)
  let swaps = 0

  let row = 0, col = 0 // initialize
  let destRow, destCol
  let tempVal
  let tempRow, tempCol

  while (swaps < swapsMax) {
    destRow = (N-1) - col // 1
    destCol = row     // 0  
    tempVal = twoD[destRow][destCol] // 2
    twoD[destRow][destCol] = twoD[row][col]
    row = destRow
    col = destCol
    swaps++
  }
  return twoD
}

const tc1 = [[1,2],[3,4]]
const tc2 = [[1,2,3],[4,5,6],[7,8,9]]
const tc3 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

console.log(rotate(tc1))
// console.log(rotate(tc1, "ccw"))
// console.log(rotate(tc2, "cw"))

/*
Cycling thru N rows
0,0 moves to 2,0    // row changes from N to 0, and col is row
0,1 moves to 1,0
0,2 moves to 0,0

1,0 moves to 2,1    // row changes from N to 0, and col is row
1,1 moves to 1,1
1,2 moves to 0,1

2,0 moves to 2,2    // row changes from N to 0, and col is row
2,1 moves to 1,2
2,2 moves to 0,2

1 2    3 1
3 4    4 2

(0,0) moved to (0,1)

E.g. N=3
1st row becomes (N)th col
2nd row becomes (N-1)th col
pth row becomes (N-p)th col

Given [[1,2,3],[4,5,6],[7,8,9]]
Cycle thru rows

*/