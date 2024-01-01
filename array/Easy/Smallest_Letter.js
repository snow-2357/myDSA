/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let low = 0,
    high = letters.length - 1,
    mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    // if (letters[mid] > target) {
    //   high = mid - 1;
    // } else {
    //   low = mid + 1;
    // }
    letters[mid] > target ? (high = mid - 1) : (low = mid + 1);
  }
  return low == letters.length ? letters[0] : letters[low];
};

console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
