const maxProfit = (nums) => {
  let max_profit = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let profit = nums[j] - nums[i];
      if (profit > max_profit) max_profit = profit;
    }
  }
  return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
