function createNestedArr(jlhRow, jlhCol){
    let hasil = []
    let huruf = 'abcdefghijklmnopqrstuvwxyz'
    
    for(let i = 0; i < jlhRow; i++){
        let temp = []
        for( let j = 0; j < jlhCol; j++){
            temp.push(huruf[Math.floor(Math.random()*26)])
        }
        hasil.push(temp)
    }
    return hasil
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
