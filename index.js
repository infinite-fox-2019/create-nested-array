function createNestedArray(totalRow, totalCol) {
    let output = [];
    let characters = 'abcdefghijklmnopqrstuvwxyz';

    for(let i = 0; i < totalRow; i++) {
        let tempArr = [];
        for(let j = 0; j < totalCol; j++) {
            tempArr.push(characters.charAt(Math.floor(Math.random() * characters.length)));
        }
        output.push(tempArr);
    }
    return output;
}

console.log(createNestedArray(5, 3));
console.log(createNestedArray(4, 2));