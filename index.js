function createNestedArr (row, col) {
    let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = [];
    for (let i = 0; i < row; i++) {
        let temp = [];
        for (let j = 0; j < col; j++) {
            temp.push(huruf[Math.floor(Math.random() * huruf.length)]);
        }
        result.push(temp);
    }
    return result
};

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));