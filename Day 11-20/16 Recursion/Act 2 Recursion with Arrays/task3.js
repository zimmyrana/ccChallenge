//Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sum(arr, index = 0) {
    if (index === arr.length) {
        return 0
    } else {
        return arr[index] + sum(arr, index + 1)
    }
}

console.log(sum([1,2,3,4,5]))
console.log(sum([1,2,3,4,5,6,7,8,9,0]))