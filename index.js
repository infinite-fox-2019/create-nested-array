let alphabet = 'abcdefghijklmnopqrstuvwxyz'

function createArr(row, col) {
    let arr = []
    for (let i = 0; i < row; i++) {
        let rowArr = []
        for (let j = 0; j < col; j++) {
            rowArr.push(alphabet[Math.floor(Math.random() * alphabet.length)])
        }
        arr.push(rowArr)
    }
    return arr
}

console.log(createArr(3, 5));
console.log(createArr(3, 4));
console.log(createArr(4, 6));

