// Задача: Идентичный алфавит

// Необходимо написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных букв и false в противном случае.

// Например:

// isEqualSymbols('кот', 'ток'); // => true
// isEqualSymbols('кот', 'тик'); // => false

const isEqualSymbols = (fWord, sWord) => {
    const fArray = fWord.toLowerCase().split('');
    const sArray = sWord.toLowerCase().split('');
    let flag = true;

    fArray.forEach((symb) => {
        if (!flag) {
            return;
        }
        
        if (!sArray.includes(symb)) {
            flag = false;
        }
    })
    
    return flag;
}

console.log(isEqualSymbols('кот', 'ток'));