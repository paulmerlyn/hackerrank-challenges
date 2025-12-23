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
 * Complete the 'isAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 */

function isAnagram(s, t) {
    // Write your code here
    // Write your code here
    if (s.length !== t.length) return 0
    
    const freq = new Map()
    
    // Map frequency distribution of s
    for (const char of s) {
        freq.set(char, freq.get(char) ? freq.get(char) + 1 : 1)
    }
    //console.log('Map freq from s:', freq)
    
    // Decrement map against freq distribution of t
    for (const char of t) {
        if (freq.get(char)) {
            freq.set(char, freq.get(char) - 1)
            if (freq.get(char) === 0) freq.delete(char)
        } else return 0;
    }
    
    return freq.size === 0 ? 1 : 0
}

function main() {
    const s = readLine();

    const t = readLine();

    const result = isAnagram(s, t);

    process.stdout.write(result + '\n');
}
