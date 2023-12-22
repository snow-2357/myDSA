/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// m+n
// var searchMatrix = function (matrix, target) {
//   let targetrow = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     if (target === matrix[i][0]) {
//       return true;
//     } else if (target > matrix[i][0]) {
//       targetRow = i;
//     }
//   }
//   for (let i = 0; i < matrix[targetRow].length; i++) {
//     if (matrix[targetrow][i] === target) {
//       return true;
//     }
//   }
//   return false;
// };

// log(m*n)
// we will pretend that its a one D array we just need to convert the i and j to a single number

// 0 1  2  3     00 01 02 03
// 4 5  6  7     10 11 12 13
// 8 9 10 11     20 21 22 23

//  for  21  we can 2*column +1 = 9
var searchMatrix = function (matrix, target) {
  let first = 0,
    last = matrix[0].length * matrix.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    // conversion
    console.log(mid);
    let i = Math.floor(mid / matrix[0].length),
      j = mid % matrix[0].length;
    console.log(i, j);
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return false;
};

console.log(searchMatrix([[1, 2]], 30));
