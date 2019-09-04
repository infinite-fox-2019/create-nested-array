function createNestedArr(jumlahRow, jumlahCol) {
    var result = [];
    for(let i = 0; i < jumlahRow; i++) {
        result[i] = [];
        for(let j = 0; j < jumlahCol; j++) {
            result[i][j] = String.fromCharCode(Math.floor(Math.random() * Math.floor(26) + 97));
        }
    }
    
    return result;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));