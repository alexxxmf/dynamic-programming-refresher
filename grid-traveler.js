const gridTraveler = (m, n) => {
  if (n === 0 || m === 0) return 0;
  if (n === 1 && m === 1) return 1;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

const mgridTraveler = (n, m, memo = {}) => {
  const key = m + "," + n;

  if (key in memo) return memo[key];
  if (n === 1 && m === 1) return 1;
  if (n === 0 || m === 0) return 0;

  memo[key] = mgridTraveler(m - 1, n, memo) + mgridTraveler(m, n - 1, memo);
  return memo[key];
};

// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 4));
// console.log(gridTraveler(18, 18)); TOO SLOW

console.log(mgridTraveler(3, 3));
console.log(mgridTraveler(18, 18));
