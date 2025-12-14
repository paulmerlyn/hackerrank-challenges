const flipper = (matrix) => {
    const mm = new Map();
    const mmf = new Map();
    const len = matrix.length;
    const n = len / 2;
    let key;
    let sumLeft = 0, sumRight = 0, sumBottom = 0, sumTop = 0;

    for (let i = 0; i < len; i++) {
        for (let j= 0; j < len; j++) {
            key = `${i}_${j}`;
            mm.set(key, matrix[i][j]);
        }
    }


    for (let i = 0; i < len; i++) {
        for (let j= 0; j < n; j++) {
            key = `${i}_${j}`;
            console.log(`key is: ${key}`);
            sumLeft += mm.get(key);
            console.log(`Just added this to sumLeft: ${mm.get}`)
        }
        console.log(`sumLeft: ${sumLeft}`);
        for (let j= n; j < len; j++) {
            key = `${i}_${j}`;
            sumRight += mm.get(key);
        }
        console.log(`sumRight: ${sumRight}`);

        if (sumRight > sumLeft) {
            console.log(`*** sumLeft is ${sumLeft}, sumRight is ${sumRight}`);
            for (let j= 0; j < n; j++) {
                let temp = mm.get(`${i}_${j}`);
                mm.set(`${i}_${j}`, mm.get(`${i}_${n - 1 - j}`));
                mm.set(`${i}_${n - 1 - j}`, temp);
            }
        }
    }

    for (let i = 0; i < len; i++) {
        for (let j= 0; j < len; j++) {
            key = `${i}_${j}`;
            mmf.set(key, matrix[j][i]);
        }
    }


    return mm;
}

const matrix = [[1, 2, 3, 4],[5,6, 7, 8],[9,100, 11,12],[13,14,15,16]];
console.table(flipper(matrix));
console.log(flipper(matrix));