function nestedArray (jumlahRow,jumlahCol){
    let totalAlphabet = jumlahRow*jumlahCol;
    let str = "";
    let arr = [];
    for(let i = 0; i<totalAlphabet;i++){
        let generateAlphabet = Math.floor(Math.random()*25+97);
        str+=String.fromCharCode(generateAlphabet);
    }
    for(let i = 0; i<jumlahRow;i++){
        arr.push([]);
        for(let j = 0;j<jumlahCol;j++){
            arr[i].push(str[0]);
            str = str.slice(1);
        }
    }
    return arr;
}

console.log(nestedArray(2,2));
console.log(nestedArray(5,4));