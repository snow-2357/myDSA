/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    //If n is negative, we convert it to positive and take the reciprocal of the base x.
    x = 1 / x;
    n = -n;
  }
  let sol = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      sol *= x; // If at any point, the power is odd, we multiply the result by sol.
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return sol.toFixed(5);
};

console.log(myPow(2, -2));
