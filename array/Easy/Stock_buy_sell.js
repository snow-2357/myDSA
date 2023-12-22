const prices = [7, 1, 5, 3, 6, 4];

let first = 0;
second = 1;
profit = 0;

while (first < prices.length) {
  if (prices[second] > prices[first]) {
    profit = Math.max(profit, prices[second] - prices[first]);
    second++;
  } else {
    first = last; //bc i dont need to check in between be i found something smaller
    second++;
  }
}

console.log(profit);
