function createNestedArray(row, col){
    let arrIn = [];
    let arrOut = [];
    const data = 'abcdefghijklmnopqrstuvwxyz';

    for(let i = 0; i<row; i++){
        arrIn = []
        for(let j = 0; j<col; j++){
            let randomize = data.charAt(Math.floor(Math.random() * data.length));
            arrIn.push(randomize);
        }
        arrOut.push(arrIn);
    }
    return arrOut;
}

console.log(createNestedArray(5,3));
console.log(createNestedArray(4,2));

