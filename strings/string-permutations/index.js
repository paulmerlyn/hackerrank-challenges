const isPermut = (str1, str2) => {
  const isSameChar = (char1, char2) => {
    return char1 === char2
  }

  const findAndRemove = (str, tgt) => {
    for (let i=0; i < str.length; i++) {
      if (isSameChar(str[i], tgt)) {
        const charsArr = str.split("")
        charsArr.splice(i, 1)
        return charsArr.join("")
      }
    }
    return false
  }

  for (let char of str1) {
    str2 = findAndRemove(str2, char)
    if (str2 === false) return false // char of str1 not found in str2 so not permuts
  }
  if (str2 === "") return true // cycled thru str1 and str2 depleted
  return false // str2 still has characters left, so not permutations
}

const testCases = [
  { str1: "abcd", str2: "dcab", expected: true },
  { str1: "part", str2: "party", expected: false },
  { str1: "party", str2: "part", expected: false },
  { str1: "xyz1 ", str2: " 1yzx", expected: true },
  { str1: "", str2: "0", expected: false },
  { str1: "false", str2: "", expected: false },
  { str1: "smiss", str2: "misss", expected: true },
]

for (let tc of testCases) {
  console.log(tc.str1, "and", tc.str2, "expected:", tc.expected, "actual:", isPermut(tc.str1, tc.str2))
}
