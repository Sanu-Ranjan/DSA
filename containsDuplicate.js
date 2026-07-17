const input1 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const input2 = [7, 3, 9, 2, 4, 6];
const containsDuplicates_1 = (nums) => {
  //brute force
  //T->O(n2) S->O(1)
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
    if (count > 1) return false;
  }
  return true;
};

const containsDuplicates_2 = (nums) => {
  // sort the array
  // then find duplicate adjacent
  // T->O(n Log n)
  let arr = [...nums];
  arr.sort((a, b) => a - b); //sort in increasing order
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return false;
  }
  return true;
};

console.log(containsDuplicates_1(input2));
console.log(containsDuplicates_2(input2));
