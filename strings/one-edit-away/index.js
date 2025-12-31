const oneEditAway = (str1, str2) => {

  const removeCharFromStr = (str, i) => {
    const strArr = str.split("")
    strArr.splice(i, 1)
    return strArr.join("")
  }

  const oneEditViaInsertOrRemove = (str1, str2) => {
    console.log('Calling oneEditViaInsertOrRemove()')
    if (str1.length === str2.length) return false
    else str1IsLonger = str1.length > str2.length

    let long, short
    if (str1IsLonger) {
      long = str1
      short = str2
    } else {
      long = str2
      short = str1
    }

    console.log('long:', long, "short:", short)
    for (let i=0; i < long.length; i++) {
      const longCopy = long
      const shortenedStr = removeCharFromStr(longCopy, i)
      // const longCopyArr = longCopy.split("")
      // longCopyArr.splice(i,1)  // perform splice then later use longCopyArr
      // console.log("join on longCopyArr after splice(i,1): ",longCopyArr.join(""))
      if (shortenedStr === short) return true
    }
    return false
  }

  const oneEditViaReplace = (str1, str2) => {
    if (str1.length !== str2.length) return false

    for (let i=0; i < str1.length; i++) {
      const str1Copy = str1
      const shortenedStr1Copy = removeCharFromStr(str1Copy, i)
      for (let j=0; j < str2.length; j++) {
        const str2Copy = str2
        const shortenedStr2Copy = removeCharFromStr(str2Copy, j)
        if (shortenedStr1Copy === shortenedStr2Copy) return true
      }
    }
    return false;
  }

  if (Math.abs(str1.length - str2.length) > 1) return false

  if (str1 === str2) return true

  if (oneEditViaInsertOrRemove(str1, str2)) return true
  else return oneEditViaReplace(str1, str2)
}

const testCases = [
  { str1: "pale", str2: "pale", expected: true },
  { str1: "tiny", str2: "loooonger", expected: false},
  { str1: "pale", str2: "ple", expected: true },
  { str1: "pales", str2: "pale", expected: true },
  { str1: "pale", str2: "bale", expected: true },
  { str1: "pale", str2: "bake", expected: false }
]

for (let tc of testCases) {
console.log(tc.str1, "and", tc.str2, "pass:", tc.expected === oneEditAway(tc.str1, tc.str2))
}
