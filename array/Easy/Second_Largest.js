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

for (i in arr) {
  if (arr[i] > firstLargest) {
    // update both
    secondLargest = firstLargest;
    firstLargest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] < firstLargest) {
    // only one
    secondLargest = arr[i];
  }
}
console.log(secondLargest);
