/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// normal soltion will be 2 loops or hashmap
// this is follow up, but the optimal will be the hashmap one

var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let output = [];
  const binarySearch = (ele) => {
    // here we will check if ele is in nums2
    let low = 0,
      high = nums2.length - 1,
      mid;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (nums2[mid] === ele) {
        low = mid;
        while (nums2[low] === ele) {
          /* You want to create a while loop that searches for the first occurrence of
            the target value in a sorted array. Once found, you want to replace that value with -Infinity,
            which will disrupt the sorted order of the array. */
          low--;
        }
        nums2[low + 1] = -Infinity; // for removing the the value so that this dont tigger for the same element
        return true;
      } else if (nums2[mid] < ele) {
        low = mid + 1;
      } else high = mid - 1;
    }
    return false;
  };

  for (let i of nums1) {
    if (binarySearch(i)) {
      output.push(i);
    }
  }

  return output;
};
const nums2 = [
    21, 47, 80, 4, 3, 24, 87, 12, 22, 11, 48, 6, 89, 80, 74, 71, 74, 55, 58, 56,
    4, 98, 40, 66, 49, 53, 62, 27, 3, 66, 78, 24, 48, 69, 88, 12, 80, 63, 98,
    65, 46, 35, 72, 5, 64, 72, 7, 29, 37, 3, 2, 75, 44, 93, 79, 78, 13, 39, 85,
    26, 15, 41, 87, 47, 29, 93, 41, 74, 6, 48, 17, 89, 27, 61, 2, 68, 99, 57,
    45, 73, 25, 33, 38, 32, 58,
  ],
  nums1 = [
    1, 39, 6, 81, 85, 10, 38, 22, 0, 89, 57, 93, 58, 69, 65, 80, 84, 24, 27, 54,
    37, 36, 26, 88, 2, 7, 24, 36, 51, 5, 74, 57, 45, 56, 55, 67, 25, 33, 78, 49,
    16, 79, 74, 80, 36, 27, 89, 49, 64, 73, 96, 60, 92, 31, 98, 72, 22, 31, 0,
    93, 70, 87, 80, 66, 75, 69, 81, 52, 94, 90, 51, 90, 74, 36, 58, 38, 50, 9,
    64, 55, 4, 21, 49, 60, 65, 47, 67, 8, 38, 83,
  ];
console.log(intersect(nums1, nums2));

// console.log(
//   [
//     21, 47, 80, 4, 24, 87, 22, 6, 89, 80, 74, 74, 55, 58, 56, 98, 66, 49, 27,
//     78, 24, 69, 88, 80, 65, 72, 5, 64, 7, 37, 2, 75, 93, 79, 39, 85, 26, 93, 74,
//     89, 27, 57, 45, 73, 25, 33, 38, 58,
//   ].sort((a, b) => a - b)
// );
