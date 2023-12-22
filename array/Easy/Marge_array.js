let nums1 = [1, 2, 3];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

let first = 0;
let sec = 0;

while (first < m || sec < n) {
  if (nums1[first] < nums2[sec]) {
    first++;
  } else if (nums1[first] == 0) {
  } else {
    // sift
    nums1.splice(first, 0, nums2[sec]);
    sec++;
    first++;
  }
}

console.log(nums1);
