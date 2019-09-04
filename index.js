function createNestedArray (row,column){
    let result = []
    let kamusAlphabet = 'abcdefghijklmnopqrstuvwxyz'

    let len = kamusAlphabet.length
    for(let i=0; i<row; i++){
        result[i] = []
        for(let j=0; j<column; j++){
            result[i][j] = kamusAlphabet[Math.floor(Math.random()*len)]
        }
    }
    return result
}

console.log(createNestedArray(5,3))
console.log(createNestedArray(4,2))
console.log(createNestedArray(3,3))