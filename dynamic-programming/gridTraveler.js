var gridTraveler = function (x = 18, y = 18, memo = {}) {
  if (x == 0 || y == 0) return 0;
  if (x == 1 && y == 1) return 1;

  let key1 = x.toString() + ":" + y.toString();
  let key2 = y.toString() + ":" + x.toString();

  if (key1 in memo) return memo[key1];
  if (key2 in memo) return memo[key2];

  memo[key1] = memo[key2] =
    gridTraveler(x - 1, y, memo) + gridTraveler(x, y - 1, memo);

  return memo[key1];
};
