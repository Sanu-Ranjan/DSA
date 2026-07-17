const input1 = [0, 2, 3, 4, 5, 2, 1, 0];
const input2 = [0, 2, 3, 3, 5, 2, 1, 0];

//brute force T-> O(n2);
const mountainArray = (nums) => {
  //find heighest and its index
  let index_max = 0;
  for (let i = 0; i < nums.length; i++) {
    //find max
    if (nums[index_max] < nums[i]) {
      index_max = i;
    }
  }

  //check for every element if every element on its right is greter than itself upto index_Max from start
  for (let i = 0; i < index_max; i++) {
    for (let j = i + 1; j <= index_max; j++) {
      if (nums[i] < nums[j]) continue;

      return false;
    }
  }

  //check for every element if every element of its right is less than itself starting from Index_max to end
  for (let i = index_max; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) continue;

      return false;
    }
  }
  return true;
};

console.log(mountainArray(input1));
console.log(mountainArray(input2));
