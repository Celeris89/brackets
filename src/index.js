module.exports = function check(str, bracketsConfig) {
    let arr = Array.from(str);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (arr[i] === bracketsConfig[j][0] && arr[i + 1] === bracketsConfig[j][1]) {
                arr.splice(i, 2);
                i = -1;
                break;
            }
        }
    }
    return arr.length === 0;
}




// html lang="pl-PL">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>