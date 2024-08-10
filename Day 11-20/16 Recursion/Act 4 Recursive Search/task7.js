//Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.


//binary search applied only on monotonic(increment/decrement) series
function binarySearch(arr, targetElement, startIndex = 0, endIndex) {
    if (startIndex > endIndex) {
        return -1
    }

    let midIndex = Math.floor((startIndex + endIndex)/2)

    if (arr[midIndex] === targetElement) {
        return midIndex
    } else if (arr[midIndex] > targetElement) {
        return binarySearch(arr, targetElement, startIndex, midIndex - 1)
    } else {
        return binarySearch(arr, targetElement, midIndex + 1, endIndex)
    }

}

let arr = [23, 43, 56, 76, 90]
let target = 76
console.log(binarySearch(arr,target,0,arr.length-1))
