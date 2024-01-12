const arr = [1, 5, 7, 2, 8];

// let x = 0;
// let y = 0;
// for (i of arr) {
//   y = Math.max(y, i);
// }
// for (i of arr) {
//   if (i !== y) {
//     x = Math.max(x, i);
//   }
// }
// console.log(x);

let firstLargest = 0;
let secondLargest = 0;

for (let i of arr) {
  if (i > firstLargest) {
    // update both
    secondLargest = firstLargest;
    firstLargest = i;
  } else if (i > secondLargest && i < firstLargest) {
    // only one
    secondLargest = i;
  }
}
console.log(secondLargest);
