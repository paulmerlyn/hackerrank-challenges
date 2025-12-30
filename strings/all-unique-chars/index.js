// Loop thru chars
// Place char in map (built on hash map)
// If key exists, return false
// Return true after loop
const isUniqueFn = (str) => {
  const map = new Map()
  for (let char of str) {
    if (map.get(char)) return false
    map.set(char, true)
  }
  return true
}

// Now again but without using a data structure
const isUniqueFnWithoutDataStructure = (str) => {
  const sortedStr = str.split("").sort().join("")
  let compChar = ""
  for (let char of sortedStr) {
    if (char === compChar) return false
    compChar = char
  }
  return true
}

// Third time, using a numeric array and character codes (str.charCodeAt(idx) or str,codePointAt(idx))
const isUniqueFnLeveragingCharCodes = (str) => {
  let numericalArr = []
  for (let i=0; i < str.length; i++) {
    if (!numericalArr[str.codePointAt(i)]) numericalArr[str.codePointAt(i)] = true
    else return false
  }
  return true
}

const testCases = {
  'butterfly': false,
  'wasp': 'true',
  '1234': 'true',
  '': true,
  'a': true,
  'proper': false
}

for (let [str, isUnique] of Object.entries(testCases)) {
  console.log(str, "expected:", isUnique, "actual (via isUniqueFn)", isUniqueFn(str), "actual (via isUniqueFnWithoutDataStructure():", isUniqueFnWithoutDataStructure(str), "actual (via isUniqueFnLeveragingCharCodes():", isUniqueFnLeveragingCharCodes(str))
}