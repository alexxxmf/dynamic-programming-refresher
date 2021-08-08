const howSum = (targetSum, numArr) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numArr) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numArr);

    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }
  return null;
};

const mHowSum = (targetSum, numArr, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numArr) {
    const remainder = targetSum - num;
    const remainderResult = mHowSum(remainder, numArr, memo);

    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3]));
console.log(mHowSum(300, [14, 7]));
