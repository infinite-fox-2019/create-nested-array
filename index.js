function createNestedArr(row,col) {
    const alhpabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let result = [];
    for (let i = 0; i < row; i++) {
        result.push([]);
        for (let j = 0; j < col; j++) {
            result[i].push(alhpabets[Math.floor(Math.random() * (27 - 0) ) + 0]);
        }
    }
    return result;
}
console.log(createNestedArr(5,3));
console.log(createNestedArr(4,4));
