/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let longest = '';
    
    while (s) {
      let temp = s;
      
      for (let i = 0; i < s.length; i++) {
        if (temp[0] !== temp[temp.length - 1]) {
          break;
        } else {
          temp = temp.slice(0, -1);
          
          if (s.length > longest.length) {
            longest = s;
          }
        }
      }
      
      s = s.slice(0, -1);
    }
    
    return longest;
  };
console.log(Number(''))
  console.log((''+1234).split('').reverse().join(''))