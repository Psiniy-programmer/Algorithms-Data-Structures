/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
  const sorted = strs.sort((a, b) => b.length - a.length);
  let isStop = false;

  return sorted[0].split("").reduce((res, letter, i) => {
    if (isStop) {
      return res;
    }

    const isContains = sorted.every((word, wordIndex) => {
      if (word.indexOf(letter) === 0) {
        sorted[wordIndex] = word.slice(1);
        return true;
      } else {
        return false;
      }
    });

    if (isContains) {
      res += letter;
    } else {
      isStop = true;
    }

    return res;
  }, "");
};