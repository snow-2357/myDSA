var uniquePaths = function (m, n) {
  let x = 0,
    y = 0;
  if (x == m - 1 && y == n - 1) {
    return 1;
  }
  if (x >= m || y >= n) return 0;
  else {
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  }
}; // will fail in large values because of recursion

console.log(uniquePaths(23, 12));
