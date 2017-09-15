function zero_matrix(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let temp = matrix;
    let col = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (temp[i][j] === 0) {
                col.push(j);
                temp = nullRow(matrix, i);
                break;
            }
        }
    }

    for (let i = 0; i < col.length; i++) {
        temp = nullCol(temp, col[i]);
    }

    return temp;
}

function nullRow(matrix, m) {
    for (let i = 0; i < matrix[0].length; i++){
        matrix[m][i] = 0;
    }
    return matrix;
}

function nullCol(matrix, n) {
    for (let i = 0; i < matrix.length; i++){
        matrix[i][n] = 0;
    }
    return matrix;
}

let a = [
    [1,0,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,0,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,0,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,0,9,10],
    [1,2,0,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],    
];

// let m = a.length;
// let n = a[0].length;
// for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//         if(a[i][j] == 0) {
//             console.log(a[i][j]);
//         }
//         //console.log(a[i][j]);
//     }
// }


console.log(zero_matrix(a));
