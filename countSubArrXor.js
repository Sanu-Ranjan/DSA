subarrayXor = (arr, k) => {
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
