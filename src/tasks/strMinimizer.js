// Задача: «Сжатие строк»

// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку, в которой повторяющиеся буквы заменены количеством повторений.

// Например:

// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

const testStr = "AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD";

const rle2 = (str) => {
  let res = '';
  let counter = 1;
  const splitted = str.split('');

  splitted.forEach((letter, i) => {
    const next = splitted[i+1]; 

    if (letter === next) {
      return counter++;
    } else {
      res += counter > 1 ? letter + counter : letter;
      counter = 1;
    }
  })
  
  return res;
};



console.log(rle2(testStr) === 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');