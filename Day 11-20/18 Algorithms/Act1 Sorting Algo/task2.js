//Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }

        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    
    return arr
}

let arr = [6, 2, 8, 4, 10]

console.log(selectionSort(arr))