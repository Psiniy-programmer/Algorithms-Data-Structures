// Quick sort
// Description : https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort

// Complexity : Best - n*log(n), Average - n*log(n), Worst - n^2

let testArr = [5, 2, 3, 1, 10, -2, 1, 5, 7]

/**
 * Bubble sort algorithm
 * @param {Array} arr - The array on which the sorting will be carried out
 * @returns {Array} - Sorted array
 */
export const quickSort = arr => {
    if (arr.length < 2) return arr;
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter(value => value < pivot);
    const more = arr.filter(value => value > pivot);
    return [...quickSort(less), pivot, ...quickSort(more)];
}

console.log(quickSort(testArr));