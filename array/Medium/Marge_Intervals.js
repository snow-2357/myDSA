let arrs = [
  [1, 4],
  [0, 2],
  [3, 5],
];
arrs.sort((a, b) => a[0] - b[0]);
let solarr = [];

for (let i = 0; i < arrs.length; i++) {
  let arr1 = arrs[i];
  for (let j = i + 1; j < arrs.length; j++) {
    let arr2 = arrs[j];

    if (arr1[0] == arr2[0] && arr1[1] == arr2[1]) {
      console.log("1");
      i++;
      continue;
    } else if (arr1[1] > arr2[0] && arr1[1] > arr2[1]) {
      console.log("2");
      i++;
      continue;
    } else if (arr1[1] >= arr2[0]) {
      arr1[1] = arr2[1];
      console.log("3");
      i++;
      continue;
    } else if (arr1[1] == arr2[1]) {
      console.log("4");
      arr1[1] = arr2[1];
      i++;
      break;
    } else {
      console.log("5");
      break;
    }
  }
  solarr.push(arr1);
}

console.log(solarr);
