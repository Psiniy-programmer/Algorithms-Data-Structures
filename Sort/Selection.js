// Selection sort 
// Description : https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort

// Complexity : Best - n^2, Average - n^2, Worst - n^2

let testArr = [5, 2, 3, 1, 10, -2]

/**
 * Bubble sort algorithm
 * @param {Array} arr - The array on which the sorting will be carried out
 * @returns {Array} - Sorted array
 */
const selectionSort = arr => {
    let passesCount = 0;
    let temp, swap, prevIndex, minItem;

    for (passesCount; passesCount < arr.length - 1; passesCount++) {
        minItem = arr[passesCount];
        swap = false;
        for (let i = passesCount; i < arr.length; i++) {
            if (arr[i] < minItem) {
                temp = arr[passesCount];
                minItem = arr[i];
                prevIndex = i;
                swap = true;
            }
        }
        if (swap) {
            arr[passesCount] = minItem;
            arr[prevIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(testArr))