function zero_matrix(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let col = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; i < n; j++) {
            if (matrix[i][j] == 0) {
                col.push(j);
                matrix = nullRow(matrix, i);
            }
        }
    }

    for (let a = 0; a < col.length; a++) {
        matrix = nullCol(matrix, col[a]);
    }

    return matrix;
}

function nullRow(matrix, m) {
    for (let f = 0; f < matrix[0].length; f++){
        matrix[m][f] = 0;
    }
    console.log(matrix);
    return matrix;
}

function nullCol(matrix, n) {
    for (let s = 0; s < matrix.length; s++){
        matrix[s][n] = 0;
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
console.log(a.length);


console.log(zero_matrix(a));
