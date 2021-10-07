// complete the function
const solution = (string) => {
    if (string.length === 0) {
        return '';
    }

    return string.split('').reduce((res, cur) => {
         return cur === cur.toUpperCase() ? res += ` ${cur}` : res += cur; 
    }, '')
};
