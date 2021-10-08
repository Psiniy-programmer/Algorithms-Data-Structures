/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const res = [];

  nums.some((item, i) => {
    for (let index = i + 1; index < nums.length; index++) {
      if (item + nums[index] === target) {
        res.push(i);
        res.push(index);
        return true;
      }
    }
  });

  return res;
};

// nums = [2,7,11,15], target = 9

console.log(twoSum([2, 7, 11, 15], 9));
console.log(false + false)