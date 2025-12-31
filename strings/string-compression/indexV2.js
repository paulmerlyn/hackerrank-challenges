/*
aabcccccaaa -> a2b1c5a3

Start at i 0
Set leftP = i
Identify tgt = str[leftP]
Increment rightP until str[rightP] !== tgt
Perform compressedStr construction using: consecCount = rightP - leftP and repeatingChar = str[leftP]
If rightP >= str.length stop
*/

const getCompressedStr = str => {
  if (str.length === 0) return str

  let retOriginal = true
  let compressedStr = ""
  let i = 0
  let leftP = i
  let consecCount = 1
  for (let rightP = leftP + 1; i < str.length; rightP++ ) {
      let tgt = str[leftP]
      if (tgt === str[rightP]) {
        consecCount++
        retOriginal = false
      }
      else {
        // build compressedStr
        compressedStr = builder(compressedStr, tgt, consecCount)
        leftP = leftP + consecCount
        consecCount = 1
      }
      i++
  }
  return retOriginal ? str : compressedStr
}

  const builder = (compressedStr, char, consecCount) => {
    return compressedStr + char + consecCount
  }

const testCases = [
  { str: "aabcccccaaa", expected: "a2b1c5a3" },
  { str: "abcdefg", expected: "abcdefg" },
]

for (let tc of testCases) {
  console.log(tc.str, "expected:", tc.expected, "actual:", getCompressedStr(tc.str), "pass:", tc.expected === getCompressedStr(tc.str))
}