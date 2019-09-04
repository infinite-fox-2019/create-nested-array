function createNestedArr(jumlahRow, jumlahCol) {
    // YOUR CODE HERE...
    let result = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < jumlahRow; i++) {
        let store = []
        for (let j = 0; j < jumlahCol; j++) {
            store.push(alphabet[Math.floor(Math.random() * 26)])
        }
        result.push(store)
        store = []
    }
    return result
}


// TEST CASE
console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))