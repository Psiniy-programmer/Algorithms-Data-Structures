/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {  
    let res = 0;
    
    s.split('').reduce((acc, cur, i) => {
      if (!acc.includes(cur)) {
        acc += cur;

        if (acc.length > res) {
            res = acc.length;
          }
      } else {
        if (acc.length > res) {
          res = acc.length;
        }
        acc = cur + s[i-1];
      }
      
      return acc;
    }, '')
    
    return res;
  };
  

  console.log(lengthOfLongestSubstring("dvdf"))