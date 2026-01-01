'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'minTasksToCancelForNoConflict' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING digits as parameter.
 */

const map = new Map()
    map.set("0", ["0"])
    map.set("1", ["1"])
    map.set("2", ["a", "b", "c"])
    map.set("3", ["d", "e", "f"])
    map.set("4", ["g", "h", "i"])
    map.set("5", ["j", "k", "l"])
    map.set("6", ["m", "n", "o"])
    map.set("7", ["p", "q", "r", "s"])
    map.set("8", ["t", "u", "v"])
    map.set("9", ["w", "x", "y", "z"])

function getMappedArrayFromDigitString(digitStr) {
    return map.get(digitStr)
}
function minTasksToCancelForNoConflict(digits) { // e.g. "203"
    // Write your code here
        if (digits.length === 0) return []
    
    // Convert string of digits into array of group arrays
    const groupsArray = []
    for (let char of digits) {
        groupsArray.push(getMappedArrayFromDigitString(char))
    }
    
    // Loop thru groupsArray
    let countOfGroups = groupsArray.length
    let counter = 1
    let combos = []
    while (counter <= countOfGroups) {
        // combos[]
    }
    
}

function main() {
    const digits = readLine();

    const result = minTasksToCancelForNoConflict(digits);

    process.stdout.write(result.join('\n') + '\n');
}