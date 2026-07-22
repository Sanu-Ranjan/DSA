const singleNumber = (arr) => {
  let sorted = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i += 2) {
    if (i === arr.length - 1 || arr[i] != arr[i + 1]) return arr[i];
  }
};

const inputs = [[4, 1, 2, 1, 2], [2, 2, 1], [1]];

for (let val of inputs) {
  console.log(singleNumber(val));
}
