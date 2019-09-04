function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
       result  = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function nested_array (row, col) {
    let arr_result = []

    for (let i = 0; i < row; i++) {
        arr_result.push([])
        for (let j = 0; j < col; j++) {
            arr_result[i].push(makeid(1))
        }
    }

    return arr_result

}

console.log(nested_array(3, 4));
