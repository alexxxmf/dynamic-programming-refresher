const canSum = (targetSum, numArr) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numArr) {
    const remainder = targetSum - num;
    console.log("remainder", remainder);
    if (canSum(remainder, numArr) === true) {
      return true;
    }
  }

  return false;
};

const mcanSum = (targetSum, numArr, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numArr) {
    const remainder = targetSum - num;
    if (mcanSum(remainder, numArr, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[(targetSum = false)];
  return false;
};

console.log(canSum(7, [2, 3])); // true
// console.log(mcanSum(7, [5, 3, 4, 7])); // true
// console.log(mcanSum(7, [2, 4])); // false
// console.log(mcanSum(8, [2, 3, 5])); // true
// console.log(mcanSum(100, [2, 3, 4])); // false

// console.log(canSumAlt(7, [2, 3])); // true
