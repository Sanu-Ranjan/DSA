const input1 = [1, 0, 1, 1, 0, 1, 0];
const input2 = [0, 1, 1, 1, 0, 0, 1, 1];

// brute force approach
// find all subarrays
// count all ones in that sub aray
// if count is equal to length then it means there are no zeros
// then consider the subarray length as contender for max_length
// repeat for all sub array

const maxConsequitiveOnes = (nums) => {
  let max_length = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let length = j - i + 1;
      if (countOnes(i, j) === length) {
        max_length = Math.max(max_length, length);
      }
    }
  }

  return max_length;

  function countOnes(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
      if (nums[i] === 1) count++;
    }
    return count;
  }
};

console.log(maxConsequitiveOnes(input1));
console.log(maxConsequitiveOnes(input2));
