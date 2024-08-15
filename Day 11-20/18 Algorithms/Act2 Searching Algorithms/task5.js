//Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target 

function binarySearch(array, target) {

    let startIndex = 0;
    let endIndex = array.length - 1
    

    while(startIndex <= endIndex){
        let midIndex = Math.floor((startIndex + endIndex) / 2)
        if (array[midIndex] === target) {
            return midIndex
        } else if (array[midIndex] < target) {
            startIndex = midIndex + 1
        } else {
            endIndex = midIndex - 1
        }
    }  
    return -1
}

let array = [23, 54, 76, 89, 45]

let target = 45

console.log(binarySearch(array, target))