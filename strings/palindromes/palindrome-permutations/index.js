const isPermutOfPalindrome = str => {
  const regex = /\s+/g
  const purgedStr = str.toLowerCase().replaceAll(regex, "")
  const charCountsMap = new Map()
  for (let char of purgedStr) {
    let valForChar = charCountsMap.get(char)
    if (!valForChar) valForChar = 1
    else valForChar++
    charCountsMap.set(char, valForChar)
  }

  let oddCharCountCount = 0
  let exceededThreshold = false
  charCountsMap.forEach((v, k) => {
    if (v % 2 !== 0) {
      oddCharCountCount++
      if (oddCharCountCount > 1)  {
        exceededThreshold = true
      }
    } 
  })
  return !exceededThreshold
}

const testCases = [
  { str: "Tact Coa", expected: true },
  { str: "emad am", expected: false },
  { str: "mad  ma", expected: true },
]

for (let tc of testCases) {
  console.log(tc.str, "pass?", tc.expected === isPermutOfPalindrome(tc.str))
}