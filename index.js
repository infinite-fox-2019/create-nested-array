function createNestedArr(row,cel){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let output = []
    for(let i = 0; i < row; i++){
        let temp = []
        for(let j = 0 ; j < cel; j++){
            temp.push(alphabet[Math.floor(Math.random() * 25)])
        }
    output.push(temp)
    }
    return output
}
console.log(createNestedArr(4,2));
console.log(createNestedArr(5,3));