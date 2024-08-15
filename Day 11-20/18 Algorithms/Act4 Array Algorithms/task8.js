//Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {

    let n = arr.length
    let temp = []

    for (let i = 0; i < n; i++) {
        temp[(i + k) % n] = arr[i]
    }

    return temp

}

console.log(rotateArray([32, 54, 76, 87, 89], 3))