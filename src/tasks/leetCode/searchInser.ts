function searchInsert(nums: number[], target: number): number {
  let left: number = 0,
    right: number = nums.length - 1,
    curIndex: number = 0;

  while (true) {
    if (left > right) return left;
    let mid: number = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    }

    curIndex = mid;

    if (nums[mid] === target) break;
  }

  return curIndex;
}