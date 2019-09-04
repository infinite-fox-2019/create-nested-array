function createNestedArr(row,col){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz' 
    let out = []
    for(let i = 0; i<row;i++){
        out.push([])    
        for(let j = 0; j<col;j++){
            out[out.length-1].push(alphabet[Math.floor(Math.random()*26)])
        }       
    }
    return out
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))