//anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

const anagrams = (word, words) => {
  return words.filter((item) => {
    return word.split("").every((letter) => item.includes(letter))
  });
};

// console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
console.log(anagrams("racer", ["racar", "caers", "racer"])); // =>['carer', 'racer']
console.log([1,1].reduce())