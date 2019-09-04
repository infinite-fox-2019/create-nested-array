const kamus = "abcdefghijklmnopqrstuvwxyz" // jumlah 26 atau index 0-25

function createNestedArr (jumlahRow, jumlahCol){
    let arr = []
    for(let i = 0 ; i < jumlahRow ; i++){
        arr.push([])
        for(let j = 0 ; j < jumlahCol ; j++){
            arr[arr.length-1].push(kamus[Math.floor(Math.random() * 26)])
        }
    }
    return arr
}

console.log(createNestedArr (5, 3));
console.log(createNestedArr (4, 2));