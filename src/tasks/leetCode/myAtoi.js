/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function (s) {
    const splited = s.split("");
  
    // step1
  
    while (splited[0] === " ") {
      splited.shift();
    }
    //step 2
    let neg = false;
  
    if (splited[0] === "-") {
      neg = true;
      splited.shift();
    }
  
    if (splited[0] === "+") {
        if (neg) {
            return 0
        }
      splited.shift();
    }
  
    if (isNaN(splited[0])) {
        return 0
    }
  
    //step3
    let str = splited.join("").split(" ")[0];
    const hasExp = str.indexOf('e');
    if (hasExp >= 0) {
        str = str.slice(0, str.indexOf('e'))

    }

    let numb = Number(str) * (neg ? -1 : 1);
  
    if (!isNaN(numb)) {
          
      if (numb < -Math.pow(2, 31)) {
        return -2147483648;
      }
  
      if (numb > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
      }
  
      return numb;
    } else {
      let newNumb = '';
      //check on letters inside
      for(let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
          newNumb += str[i]
        } else {
          break
        }
      }
      
      newNumb = Number(newNumb) * (neg ? -1 : 1);
      
      if (newNumb < -Math.pow(2, 31)) {
        return -2147483648;
      }
  
      if (newNumb > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
      }
      
      return newNumb;
    }
  
    return 0;
  };

  console.log(myAtoi('42'));
  console.log(Array.isArray)