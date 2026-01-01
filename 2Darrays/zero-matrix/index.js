const zeroOut = mat => {
  let M = mat.length
  let N = mat[0].length
  const zerosMapRows = new Map()
  const zerosMapCols = new Map()

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (mat[i][j] === 0) {
        zerosMapRows.set(i, true)
        zerosMapCols.set(j, true)
      }
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      // check maps
      if (zerosMapRows.get(i) || zerosMapCols(j)) {
        mat[i][j] = 0
      }
    }
  }

  return mat
}


const tc1 = [[1,2,0],[4,5,6],[7,8,9]]

console.log(zeroOut(tc1))
/*
// 3x2 MxN
[1 2 0][4 5 6][7 8 9]

rowMap keys i [0,1]
colMap keys j [0,2]

1st iteration: For any encountered 0, populate map

2nd iteration: zero-out by reference to map
*/