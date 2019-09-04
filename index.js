const createNestedArr = (row, col) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const totalItem = row * col
  let counter = 1
  const result = []

  for (let i = 0; i < row; i++) {
    const temp = []
    for (let j = 0; j < col; j++) {
      const randomAlphabet = Math.floor(Math.random() * 26)
      const currentAlphabet = alphabet[randomAlphabet]
      temp.push(currentAlphabet)
      counter++
    }
    result.push(temp)
  }
  return result
}

console.log(createNestedArr(4, 4))
console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))
