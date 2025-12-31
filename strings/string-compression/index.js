const nextNonConsecFromIndex = (str, i) => {
  const tgt = str[i]
  let nextIdx = i+1
  // aaab. nextIdx 1->2->3
  // abbb
  for (let p=nextIdx; p < str.length - i; p++) {
    if (str[p] === tgt) {
      nextIdx++
      if (nextIdx > str.length) return nextIdx
    } else {
      return nextIdx
    }
  }
  return -1
}

const getReplacementStr = (char, numberOfRepetitions) => {
  let str = ""
  for (let i=1; i <= numberOfRepetitions; i++) {
    str += char
  }
  return str + numberOfRepetitions
}
const computeCompressedStr = (str, i, nextIdx) => {
  const repeatedChar = str[i]
  const numberOfRepetitions = nextIdx - i - 1
  const strArr = str.split("")
  console.log("In computeCompressedStr() where strArr is:", strArr)
  const replacementStr = getReplacementStr(repeatedChar, numberOfRepetitions)
  console.log("In computeCompressedStr() where replacementStr is:", replacementStr)
  strArr.splice(i, numberOfRepetitions, replacementStr)
  return strArr.join("")
}

const compressStr = (str) => {
  console.log("Calling compressStr with:", str)
  let isCompressed = false;
  let nextIdx = 0
  let i=0
  let compressedStr
  do {
    nextIdx = nextNonConsecFromIndex(str, nextIdx)
    console.log("About to call  computeCompressedStr() with:", str, i, nextIdx)
    compressedStr = computeCompressedStr(str, i, nextIdx)
    console.log("compressedStr obtained:", compressStr)
    i = nextIdx
    if (nextIdx === -1 || nextIdx > str.length) isCompressed = true
  } while (!isCompressed)
  return compressStr
}

const testCases = [
  { str: "aabcccccaaa", expected: "a2b1c5a3" }
]

for (let tc of testCases) {
  console.log(tc.str, "expected:", tc.expected, "actual:", compressStr(tc.str), "pass:", tc.expected === compressStr(tc.str))
}