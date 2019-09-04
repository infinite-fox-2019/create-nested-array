function createNestedArr(jumlahRow,jumlahCol){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let output = []
  for (let i = 0; i < jumlahRow; i++){
    let temp = []
    for (let j = 0; j < jumlahCol; j++){
      temp.push(alphabet[Math.floor(Math.random()*26)])
    }
    output.push(temp)
  }
return output;
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))