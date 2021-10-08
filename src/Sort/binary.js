/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let mid = 0,
  left = 0,
  right = nums.length -1;

  while (true) {
    if (left > right) return -1;
    mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    }

    if (nums[mid] > target) {
      right = mid - 1
    }

    if (nums[mid] === target) return mid;
  }

};