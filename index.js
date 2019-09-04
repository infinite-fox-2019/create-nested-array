function createNestedArr(jumlahRow, jumlahColumn){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let letterArr = alphabet.split('')



  let result = []
  for(i=0 ; i<=jumlahRow ; i++){
    let penampung = []
    for(j=0 ; j< jumlahColumn ; j++){
      let random = letterArr[Math.floor(Math.random()*letterArr.length)]
      penampung.push(random)
    }
    result.push(penampung)
  }
  return result
}

console.log(createNestedArr(5,3))
