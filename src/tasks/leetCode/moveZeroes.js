/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let zeroPos;

    if (nums[i] === 0) {
      zeroPos = i;
      for (let j = i; j < nums.length; j++) {
        if (nums[j] !== 0) {
          nums[zeroPos] = nums[j];
          nums[j] = 0;
          break;
        }
      }
    }
  }
};

moveZeroes[(1, 0, 2)];

// [1,0,2,0,0,3]
// 1 => [1, 0, 2, 0, 0, 3]
//          ^<-^
// 2 => [1, 2]
