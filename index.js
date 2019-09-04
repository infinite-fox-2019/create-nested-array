const alphabets = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
];

function createNestedArr(jumlahRow, jumlahCol) {
    let result = [];
    for(let i = 0; i < jumlahRow; i++) {
        result[i] = [];
        for(let j = 0; j < jumlahCol; j++) {
            let randomIndex = Math.floor(Math.random() * Math.floor(25));
            result[i][j] = alphabets[randomIndex];
        }
    }
    
    return result;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
