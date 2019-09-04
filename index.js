const createNestedArr = (row, col) => {
  const nestedArr = []
  for(let i = 0; i < row; i++){
    let rowArr = []
    for(let j = 0; j < col; j++){
      rowArr.push(getrandomAlphabet())
    }
    nestedArr.push(rowArr)
  }
  return nestedArr
}

const getrandomAlphabet = () => {
  const lib = 'abcdefghijklmnopqrstuvwxyz'
  return lib[Math.floor(Math.random() * lib.length)]
}

console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))