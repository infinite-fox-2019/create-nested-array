function createNestedArr(jumlahRow, jumlahCol) {
    let output = []
    let abjad = 'qwertyuiopasdfghjklzxcvbnm'
    let random 
    for (let i=0; i<jumlahRow; i++) {
        output.push([])
        for (let j=0; j<jumlahCol; j++) {
            random = Math.floor(Math.random()*abjad.length)
            output[i].push(abjad[random])
        }
    }
    return output
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))