/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (nums.length <= k) {
    k = k % nums.length;

    if (k === 0) {
      return;
    }
  }

  let left: number[] = nums.slice(0, nums.length - k);
  let right: number[] = nums.slice(-k);
  const res: number[] = [...right, ...left];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
}