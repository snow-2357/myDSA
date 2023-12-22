const binarySearch = (arr, target) => {
  let first = 0,
    last = arr.length - 1;
  let mid = Math.floor((last + first) / 2);

  while (first <= last) {
    mid = Math.floor((last + first) / 2);
    if (target === arr[mid]) {
      return true;
    } else if (target > arr[mid]) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  return false;
};
