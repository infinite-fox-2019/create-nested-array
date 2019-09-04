// Create a Nested Array
// Dipadana Putu
function createNestedArr(jumlahRow,jumlahCol){
  let huruf = 'abcdefghijklmnopqrstuvwxyz'
  let output = [];
  for(let i = 0; i < jumlahRow; i++){
    output.push([]);
    for(let j = 0; j < jumlahCol; j++){
      output[i].push(huruf[Math.ceil(Math.random()*25)])
    }
  }
  return output;
}

// Test Drive
console.log(createNestedArr(4,2));
console.log(createNestedArr(5,3));
console.log(createNestedArr(10,10));
