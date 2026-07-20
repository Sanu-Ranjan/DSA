const input = [
  [1, 1, 0, 0, 0, 0, 3, 5, 6, 7, 0, 8, 9, 0],
  [2, 3, -2, 4],
  [-2, 0, -1],
  [0],
  [-1, 0, 0, 0],
  [-3, 0, 1, -2],
  [-1, 1, 2, 1],
];

const maxProduct = (nums) => {
  if (nums.length === 1) return nums[0];

  let max_product = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let product = 1;
      for (let j = i; j < nums.length; j++) {
        product *= nums[j];
        max_product = Math.max(max_product, product);
      }
    }
  }
  return max_product;
};

for (let val of input) {
  console.log(maxProduct(val));
}
