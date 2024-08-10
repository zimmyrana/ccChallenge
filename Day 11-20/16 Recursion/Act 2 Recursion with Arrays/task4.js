//Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function max(arr) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        let maxNum = max(arr.slice(1))
        return arr[0] > maxNum ? arr[0] : maxNum
    }
}

console.log(max([32,5,4,1,45,23]))