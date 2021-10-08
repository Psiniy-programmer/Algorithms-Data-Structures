const spinWords = (string) => {

    return string.split(' ').map((word) => {
        if (word.length >= 5) {
            return word.split('').reverse().join('');
        }

        return word;
    }).join(' ');
}


console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test")); 

