var MyHashSet = function () {
  this.hashSet = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (this.hashSet.includes(key)) {
    return;
  }

  this.hashSet.push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let indexForRemove = this.hashSet.indexOf(key);

  if (indexForRemove === -1) {
    return;
  }

  let fHalf = this.hashSet.slice(0, indexForRemove);
  let sHalf = this.hashSet.slice(indexForRemove + 1);
  this.hashSet = [...fHalf, ...sHalf];
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.hashSet.includes(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

export default MyHashSet;