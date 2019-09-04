
function angka(row,col){

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let output = []

    for(var i = 0; i<row ; i++){
        let temp = []
        for(var j = 0; j<col ;j++){
            let random = characters.charAt(Math.floor(Math.random() * characters.length))
            temp.push(random)
        }
    output.push(temp)
    }
    return output
}

console.log (angka(4,4))
console.log (angka(4,2))
