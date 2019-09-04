/*isi random huruf */

function nestedArray(baris, kolom){

    let huruf = "abcdefghijklmnopqrstuvwxyz"
    let base = []
    for(let i=0; i<baris; i++){
        let row = []
        for(let j=0; j<kolom; j++){
            let str =""
            for(let k=0; k<huruf.length; k++){
                let random = Math.floor(Math.random()*huruf.length)
                str+=huruf[random]
                break
            }
            row.push(str)
        }
        base.push(row)
    }

    return base
    
}



console.log(nestedArray(5,3))
console.log(nestedArray(4,2))