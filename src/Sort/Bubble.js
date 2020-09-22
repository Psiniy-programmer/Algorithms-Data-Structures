// Bubble sort
// Description : https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort

// Complexity : Best - n, Average - n^2, Worst - n^2

let testArr = [5, 2, 3, 1, 10, -2, 1, 5, 7]

/**
 * Bubble sort algorithm
 * @param {Array} arr - The array on which the sorting will be carried out
 * @returns {Array} - Sorted array
 */
const bubbleSort = arr => {
    let length = testArr.length - 1;
    let isSwapped = false;
    let tempA;

    for (let passes = 0; passes < length; passes++) {
        isSwapped = false;
        for (let item = 0; item < length; item++) {
            if (arr[item] > arr[item + 1]) {
                tempA = arr[item];
                arr[item] = arr[item + 1];
                arr[item + 1] = tempA;
                isSwapped = true;
            }

        }
        if (!isSwapped) break;
    }
    return arr;
}

console.log(bubbleSort(testArr));