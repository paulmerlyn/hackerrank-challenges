'use strict';

/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s: string): number {
    let len = s.length;
    let mid = Math.floor(s.length / 2);
    let even = s.length % 2 === 0;
    
    const getLR = (s: string) => {
        let len = s.length;
        let mid = Math.floor(s.length / 2);
        let even = s.length % 2 === 0;
        let left: string, right: string;
        if (even) {
            left = s.slice(0, mid);
            right = s.slice(2, len);
        } else {
            left = s.slice(0, mid);
            right = s.slice(mid+1, len);
        }
        console.log('left:', left,'right is:', right);
        return { left: left, right: right };
    }

    let rightRev: string = getLR(s).right.split("").reverse().reduce((acc, cur) => acc + cur, "");
    console.log(`rightRev:`, rightRev);
    if (getLR(s).left === rightRev) return -1;
    
    for (let i=0; i<len; i++) {
        console.log('s is: ', s);
        let sCopy = s;
        let res = sCopy.split("");
        res.splice(i, 1);
        let resStr = res.reduce((acc, cur) => acc + cur, "");
        console.log('resStr:', resStr);
        let rightRev: string = getLR(resStr).right.split("").reverse().reduce((acc, cur) => acc + cur, "");
        console.log('comparing:', getLR(resStr).left, rightRev);
        if (getLR(resStr).left === rightRev) {
            return i;
        }
    }
    return -1;
    
    
    return 99;

}

console.log(palindromeIndex('aaab'));


