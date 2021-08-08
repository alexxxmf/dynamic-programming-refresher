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

console.log(howSum(7, [2, 3]));
