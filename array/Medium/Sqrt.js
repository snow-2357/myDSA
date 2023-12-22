// find square root

var mySqrt = function (x) {
  if (x <= 1) return x;
  let first = 0,
    last = x;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (mid * mid <= x && x < (mid + 1) * (mid + 1)) {
      return mid;
    } else if (mid * mid > x) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return last;
};

console.log(mySqrt(1024));
