let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function createNestedArr(row, col) {
  let hasil = [];
  for (let i = 0; i < row; i++) {
    let barisArray = [];
    for (let j = 0; j < col; j++) {
      barisArray.push(alphabet[Math.floor(Math.random() * (alphabet.length))]);
    }
    hasil.push(barisArray);
  }
  return hasil;
}

console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));
console.log(createNestedArr(4, 4));
