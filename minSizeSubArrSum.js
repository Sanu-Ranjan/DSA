const input1 = [2, 3, 1, 2, 4, 3];
const target1 = 7;
const input2 = [1, 1, 1, 1, 1, 1, 1, 1];
const target2 = 11;
//brute force approach
//find all subarray
//find sum of subarray
//if sum is equal to or greater than target then consider for min length
//repeat and find min

function minSubarrSum(nums, target) {
  let min = null;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (sum(i, j) >= target) {
        if (min) min = Math.min(min, j - i + 1);
        else min = j - i + 1;
      }
    }
  }
  function sum(start, end) {
    let total = 0;
    for (let i = start; i <= end; i++) {
      total += nums[i];
    }
    return total;
  }

  return min ? min : 0;
}

console.log(minSubarrSum(input1, target1));
console.log(minSubarrSum(input2, target2));
