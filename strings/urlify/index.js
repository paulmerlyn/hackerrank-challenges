const urlify = (str) => {
  const trimmedStr = str.trim()
  const regex = /\s+/g
  const replacedStr = trimmedStr.replaceAll(regex, "%20")
  return replacedStr
}

const testCases = [
  { str: "    hell o.", trueLength: 6, expected: "hell%20o." },
  { str: "xy    hell o", trueLength: 8, expected: "xy%20hell%20o." },
  { str: "hell o   ", trueLength: 5, expected: "hell%20o" }
]

for (let tc of testCases) {
  console.log(tc.str, "expected:", tc.expected, "actual:", urlify(tc.str), "length match:", tc.trueLength === urlify(tc.str).length)
}