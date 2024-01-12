let numbers = [2, 7, 11, 15],
  target = 22;

const twoSum = function (numbers, target) {
  let low = 0,
    high = numbers.length - 1;

  while (low < high) {
    if (numbers[low] + numbers[high] == target) {
      return [low, high];
    } else if (numbers[low] + numbers[high] > target) {
      high--;
    } else {
      low++;
    }
  }
  return -1;
};

console.log(twoSum(numbers, target));
