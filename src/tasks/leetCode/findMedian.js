/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort();
    const len = merged.length;
    
    if (len % 2) { // нечетные
      return merged[(len / 2).toFixed(0) - 1]
    } else { // четные
      return (merged[(len / 2).toFixed(0) - 1] + merged[(len / 2).toFixed(0)]) /2
    }
  };

  console.log(findMedianSortedArrays([3], [-2, -1]))