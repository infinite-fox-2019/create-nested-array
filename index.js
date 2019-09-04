

function createdNestedArray(row, col) {
    let output = []
    let lib = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < row; i++) {
        let temp = []
        for (let j = 0; j < col; j++) {
            temp.push(lib[Math.floor(Math.random() * lib.length)])
        }
        output.push(temp)
    }

    return output

}


console.log(createdNestedArray(5, 3));
console.log(createdNestedArray(4, 2));