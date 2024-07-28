//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

let sumAll = (...nums) => {
    return nums.reduce((preVal, currVal) => {
        return preVal + currVal
    },0)
}

console.log(sumAll(3,4,5))

console.log(sumAll())