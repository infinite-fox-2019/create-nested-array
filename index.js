function createNestedArr(row,col) {
    let total = [];
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0;i<row;i++) {
        let subTotal = [];
        for (let j = 0;j<col;j++) {
            let indexRandom = Math.floor(Math.random()*alpha.length);
            subTotal.push(alpha[indexRandom]);
        }
        total.push(subTotal);
    }
    return total
}

console.log(createNestedArr(5,4))
console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2))