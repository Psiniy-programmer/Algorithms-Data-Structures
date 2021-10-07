// You are given an array(list) strarr of strings and an integer k.
//Your task is to return the first longest string consisting of k consecutive strings taken in the array.

const longestConsec = (strarr, k) => {
    if (strarr.length < k) {
        return '';
    }
    const concated = strarr.map((cur, i) => {
        let word = '';
        let end = i+k;

        if (end > strarr.length) {
            return '';
        }

        for(let j = i; j < end; j++) {
            word += strarr[j]
        }

        return word;
    }, '').sort((a,b) => b.length - a.length);
    

    return concated[0] ? concated[0] : '';
};

const test = ["zone", "abigail", "theta", "form", "libe", "zas"]; //abigailtheta
const test2= [ 'itvayloxrp',
  'wkppqsztdkmvcuwvereiupccauycnjutlv',
  'vweqilsfytihvrzlaodfixoyxvyuyvgpck' ]
console.log(longestConsec(test2, 2));
