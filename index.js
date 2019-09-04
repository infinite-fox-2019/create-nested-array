function createNestedArr(jumlahRow, jumlahCol) {
let alphabets = 'abcdefghijklmnopqrstuvwxyz'
let res = []
for (let i=0; i<jumlahRow; i++) {
    let rows = []
    for (let j=0; j<jumlahCol; j++) {
        rows.push(alphabets.charAt(Math.floor(Math.random() * alphabets.length)))
    }
    res.push(rows)
}
return res
}
console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));
