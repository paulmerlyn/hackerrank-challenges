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
 * Complete the 'generateAngleBracketSequences' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER n as parameter.
 */
function generateAngleBracketSequences(n) {
    const result = [];
    
    function backtrack(current, open, remaining) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        
        // Add '<' if we have remaining pairs to open
        if (remaining > 0) {
            backtrack(current + '<', open + 1, remaining - 1);
        }
        
        // Add '>' if there are open brackets to close
        if (open > 0) {
            backtrack(current + '>', open - 1, remaining);
        }
    }
    
    backtrack('', 0, n);
    return result;
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const result = generateAngleBracketSequences(n);

    process.stdout.write(result.join('\n') + '\n');
}
