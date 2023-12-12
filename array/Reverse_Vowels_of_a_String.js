/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split("");
  let f = 0;
  l = s.length - 1;
  while (f < l) {
    if (!["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(s[f])) {
      f++;
    } else if (
      !["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(s[l])
    ) {
      l--;
    } else {
      [s[f], s[l]] = [s[l], s[f]];
      f++;
      l--;
    }
  }
  return s.join("");
};
