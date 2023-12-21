const nums = [2, 2, 1];

const singleNumber = (nums) => {
  const map = new Map();
  for (let i of nums) {
    map.set(i, map.has(i) ? map.has(i) + 1 : 1);
  }
  for (let i of map) {
    if (i[1] === 1) {
      return i[0];
    }
  }
  //   console.log(map);
};

console.log(singleNumber(nums));
