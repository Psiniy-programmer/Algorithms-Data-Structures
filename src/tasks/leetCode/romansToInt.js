/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const values = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let cur;
  let prev = 0;

  return s.split("")
    .reverse()
    .reduce((res, letter) => {
      cur = values.get(letter);
      res += cur >= prev ? cur : -cur;
      prev = cur;
      return res;
    }, 0);
};

console.log(romatToInt("III"));
