/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 var fbV = function (isBadVersion: any) {
    return function (n: number): number {
      let left = 1,
          right = n;
      let res;
      while (left < right) {
        let mid = Math.floor(left + (left + right) / 2);
        if (isBadVersion(mid)) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      
      return left;
    };
  };
  