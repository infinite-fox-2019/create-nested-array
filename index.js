function createNestedArr(jumlahRow, jumlahCol){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arrOut = [];
    let arrIn = [];
    for (let i=0; i<jumlahRow; i++){
        arrIn = [];
        for (let j=0; j<jumlahCol; j++){
            let num = Math.floor(Math.random()*26)
            arrIn.push(alphabet[num]);
        }
        arrOut.push(arrIn);
    }
    return arrOut
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));