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
 * Complete the 'countAffordablePairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER budget
 */

function countAffordablePairs(prices, budget) {
    // Write your code here
    if (prices.length < 2) return 0
    
    let count = 0;
    // for (let i=0; i < prices.length; i++) {
    //   if (prices[i] >= budget) break; // skip optimization
    //   for (let j=i+1; j < prices.length; j++) {
    //     if (prices[j] >= budget) break; // skip optimization
    //     if (prices[i] + prices[j] <= budget) count++
    //     }
    // }
    // return count;

    let left = 0;
    let right = prices.length - 1;
    
    while (left < right) {
        if (prices[left] + prices[right] <= budget) {
            // All pairs from left to right-1 with right are valid
            count += right - left;
            left++;
        } else {
            right--;
        }
    }
    
    return count;
}

function main() {
    const firstLine = readLine().trim().split(' ');
    const pricesCount = parseInt(firstLine[0], 10);
    const budget = parseInt(firstLine[1], 10);

    const prices = readLine().trim().split(' ').map(Number);

    const result = countAffordablePairs(prices, budget);

    console.log(result);
}
