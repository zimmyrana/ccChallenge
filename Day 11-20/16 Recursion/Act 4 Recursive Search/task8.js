// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
//

function occurrence(arr, target, index = 0) {
    if (arr.length === index) {
        return 0
    }

    let count = arr[index] === target ? 1 : 0

    return count + occurrence(arr, target, index + 1)
}