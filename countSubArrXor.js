const subarrayXor = (arr, k) => {
  // code here
  let contXor = 0;
  let map = new Map();
  map.set(0, 1);
  let count = 0;
  for (let val of arr) {
    contXor = contXor ^ val;

    const required = contXor ^ k;
    if (map.has(required)) {
      count += map.get(required);
    }

    const freq = map.get(contXor);
    if (freq) map.set(contXor, freq + 1);
    else map.set(contXor, 1);
  }
  return count;
};

const bruteForce = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let xorSum = 0;
    for (let j = i; j < arr.length; j++) {
      xorSum = xorSum ^ arr[j];
      if (xorSum === k) count++;
    }
  }
  return count;
};

const inputs = [
  { nums: [4, 2, 2, 6, 4], target: 6, ans: 4 },
  { nums: [1, 2, 3, 4, 5], target: 5, ans: 2 },
  { nums: [0, 0, 0, 0, 0], target: 0, ans: 15 },
  { nums: [1, 1, 1, 1, 1], target: 1, ans: 9 },
  { nums: [1, 1, 1, 1, 1], target: 0, ans: 6 },
  { nums: [1, 0, 1, 2, 0, 8, 9], target: 1, ans: 6 },
];

for (let { nums, target, ans } of inputs) {
  console.log(`output:${ans},expected_op:${subarrayXor(nums, target)}`);
}

console.log("\n-----------Brute Force-------------");

for (let { nums, target, ans } of inputs) {
  console.log(`output:${ans},expected_op:${bruteForce(nums, target)}`);
}
