/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const row = matrix.length;
  const col = matrix[0].length;

  let rowx = new Array(row).fill(0);
  let colx = new Array(col).fill(0);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] == 0) {
        rowx[i] = 1;
        colx[j] = 1;
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (rowx[i] == 1 || colx[j] == 1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};
