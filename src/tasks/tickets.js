// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

const tickets = (peopleInLine) => {
  const price = 25;

  const res = peopleInLine.reduce((refund, cur) => {
    if (cur > price && refund < cur) {
      return false; // деньги кончились, вываливаемся
    }

    if (cur === price) {
      refund += cur;
    } else {
      refund -= cur - price;
    }

    return refund;
  }, 0);

  return res ? 'YES' : 'NO'
};

// console.log(tickets([25, 25, 50, 100]));
// console.log(tickets([25,25,50,50]))
// console.log(tickets([25,100]))
console.log(tickets( [25,25,25,25,25,25,25,50,50,50,100,100,100,100]))

