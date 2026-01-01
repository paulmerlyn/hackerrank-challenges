const rotate = twoD => {
  let newRows = [], newCols = []
  let newTwoD = []

  const N = twoD.length

  for (let i=N-1; i > 0; i--) {
    newCols[i] = []
    for (let j=0; j < N; j++) {
      newCols[i].push(twoD[i])
    }
  }

  for (let i=0; i < N; i++) {
    newRows[i] = []
    for (let j=0; j < N; j++) {
      newRows[i].push(newCols[j])
    }
    newTwoD.push(newRows[i])
  }

  return newTwoD
}
const tc1 = [[1,2],[3,4]]
const tc2 = [[1,2,3],[4,5,6],[7,8,9]]
const tc3 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

console.log(rotate(tc1))
// console.log(rotate(tc1, "ccw"))
// console.log(rotate(tc2, "cw"))

/*
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