/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  //   revers all rows
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
};
// build the matrix and observe
