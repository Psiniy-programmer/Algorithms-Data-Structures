const high = (str) => {

  return str.split(" ").reduce(
    (res, word, i) => {
      let wordScore = 0;

      for (let i = 0; i < word.length; i++) {
        wordScore += word[i].charCodeAt(0) - 96;
      }

      if (wordScore > res.score) {
        res = {
          word,
          score: wordScore,
        };
      }

      return res;
    },
    {
      word: "",
      score: 0,
    }
  ).word;
};

console.log(high("abc ab"));
