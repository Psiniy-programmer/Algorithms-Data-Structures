// Merge Sort
// Description : https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort

// Complexity : Best - n*log(n), Average - n*log(n), Worst - n*log(n) (STABLE)

let testArr = [5, 2, 3, 1, 10, -2, 1, 5, 7]

/**
 * Bubble sort algorithm
 * @param {Array} arr - The array on which the sorting will be carried out
 * @returns {Array} - Sorted array
 */
export const mergeSort = arr => {
    let item, j;
    for (let i = 1; i < arr.length; i++) {
        j = i;
        while (arr[j - 1] > arr[j]) {
            item = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = item;
            j--;
        }
    }
    return arr;
}

console.log(mergeSort(testArr));