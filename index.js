function createNestedArr (rows, columns) {
  let result = [];

  for (let i = 0; i < rows; i++) {
    result.push([]);

    for (let j = 0; j < columns; j++) {
      
      let letters = 'abcdefghijklmnopqrstuvwxyz'
      
      result[i].push(letters.charAt(Math.floor(Math.random() * letters.length)));
    }
  }
  return result
}

console.log(createNestedArr(4,2))
console.log(createNestedArr(5,3))