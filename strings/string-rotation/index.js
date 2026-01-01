const isRotation = (str1, str2) => {
  if (str1 === str2) return true
  if (str1.length !== str2.length) return false

  const concatenated = str1 + str1
  return concatenated.includes(str2)
}

const testCases = [
  { str1: "waterbottle", str2: "erbottlewat", expected: true },
  { str1: "waterbottle", str2: "erbottlewax", expected: false }
]

for (let tc of testCases) {
  console.log(`${tc.str1} and ${tc.str2} pass: ${tc.expected === isRotation(tc.str1, tc.str2)}`)
}