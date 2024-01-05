/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function(arr) {
//     for(let i =0;i<arr.length-1;i++){
//         let large=0
//         for(let j =i+1;j<arr.length;j++){
//             large=Math.max(large,arr[j])
//         }
//         arr[i]=large
//     }
//     arr[arr.length-1]=-1
//     return arr
// };

var replaceElements = function (arr) {
  let high = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = high;
    high = Math.max(high, temp);
  }
  arr[arr.length - 1] = -1;
  return arr;
};
