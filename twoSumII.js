const input = [2, 7, 11, 15];
const target = 9;

// T-> O(n2)
const twoSum1 = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return true;
    }
  }
  return false;
};

// T-> O(nlogn)
// for every element use binary search for target - element
const twoSum2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const req = target - nums[i];
    if (binarySearch(nums, req)) return true;
  }

  return false;

  function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);
      if (nums[mid] === target) {
        return true;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }
};

//T->O(n)
//use set
function twoSum3(nums, target) {
  let mySet = new Set();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (mySet.has(num2)) {
      return true;
    } else {
      mySet.add(num1);
    }
  }
  return false;
}

console.log(twoSum1(input, target));
console.log(twoSum2(input, target));
console.log(twoSum3(input, target));
