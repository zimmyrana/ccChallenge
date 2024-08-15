//Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

function linearSearch(arr, ele) {

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] === ele) {
            return i
        }

    }
    return -1
}

let arr = [43,65,87,90,67]

console.log(linearSearch(arr,90))