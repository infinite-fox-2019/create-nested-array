function createNestedArray(row,col){
    
    let nested = [] 
    for(let i = 0; i < row; i++){
        let container = []
        for(let j = 0; j < col; j++){
            container.push(generateRandomAlphabet())
        }
        nested.push(container)
    }

    return nested

    function generateRandomAlphabet(){
        let alphabet = 'abcdefghijklmopqrstuvwxyz'
        return alphabet[Math.floor(Math.random()*25)]
    }
}

console.log(createNestedArray(5,2))
