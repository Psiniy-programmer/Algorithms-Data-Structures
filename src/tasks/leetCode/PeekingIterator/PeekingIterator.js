/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
 var PeekingIterator = function (iterator) {
  console.log(iterator)
  this.items = iterator;
  this.cur = 0;
  this.done = false;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (this.cur + 1 <= this.items.length) {
    return this.items[this.cur + 1]
  }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (!this.done) {
    this.cur++;
    return this.items[this.cur];
  }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.done;
};

const arr = [1,2,3]

  var obj = new PeekingIterator(arr)
  var param_1 = obj.peek()
  var param_2 = obj.next()
 var param_3 = obj.hasNext()

 console.log(param_1, param_2, param_3)
 

