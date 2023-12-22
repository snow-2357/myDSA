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

// const binarySearch = (arr, target) => {
//   let first = 0,
//     last = arr.length - 1;
//   let mid = Math.floor((last + first) / 2);

//   while (first <= last) {
//     mid = Math.floor((last + first) / 2);
//     if (target === arr[mid]) {
//       return true;
//     } else if (target > arr[mid]) {
//       first = mid + 1;
//     } else {
//       last = mid - 1;
//     }
//   }

//   return false;
// };

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
