let input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let input2 = [5, 4, -1, 7, 8];

//bruteforce
const brute = (nums) => {
  let max_sum = null;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (max_sum < sum) {
        max_sum = sum;
      }
    }
  }
  return max_sum;
};

console.log(brute(input1));
console.log(brute(input2));
