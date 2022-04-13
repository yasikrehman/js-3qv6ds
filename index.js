function getIndex(...args) {
  let [sumArray, target] = args;
  const arr = [];
  sumArray.filter((nums, i, self) => {
    let final = target - nums;
    if (self.indexOf(final) !== -1) {
      arr.push(self.indexOf(final));
    }
  });
  return arr;
}

let sum = getIndex([1, 16, 5, 12, 3], 8);

console.log(sum);
