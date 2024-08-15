//Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeSort(arr1, arr2) {
    let n = arr1.length
    let m = arr2.length
    let i = 0, j = 0;
    let arr3 = []

    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            arr3.push(arr1[i])
            i++
        } else {
            arr3.push(arr2[j])
            j++
        }
    }

    while (i < n) {
        arr3.push(arr1[i++])
    }

    while (j < m) {
        arr3.push(arr2[j++])
    }

    return arr3

}

console.log(mergeSort([23, 56], [12, 90]));

