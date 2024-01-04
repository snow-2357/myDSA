var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      let low = i + 1;
      //   console.log(low);
      while (low < arr.length) {
        arr[low + 1] = arr[low];
        low++;
      }
      i++;
    }
    console.log(arr);
  }
  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
