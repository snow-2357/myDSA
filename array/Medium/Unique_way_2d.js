// var uniquePaths = function (m, n) {
//   let x = 0,
//     y = 0;
//   if (x == m - 1 && y == n - 1) {
//     return 1;
//   }
//   if (x >= m || y >= n) return 0;
//   else {
//     return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
//   }
// }; // will fail in large values because of recursion,
// we can modify it by keeping track where we already visited for the dp solution

var uniquePaths = function (m, n) {
  let maxNoOfStep = m + n - 2;
  return (maxNoOfStep * (maxNoOfStep - 1)) / 2;
};
// we have to take m-1 + n-1 steps with right and down steps to find the
// destination so its m+n-2 C 2  and from nCr fromula we can multiplay from n to n-r upon r to 1.

console.log(uniquePaths(3, 7));
// console.log(dp);
