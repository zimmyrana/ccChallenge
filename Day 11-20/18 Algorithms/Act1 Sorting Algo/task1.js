//Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

let arr = [1, 4, 6, 3, 3, 2, 8]
function bubbleShort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        //for number of round
        // console.log(`i:${i} arr[i]:${arr[i]}`)
        for (let j = 0; j < arr.length - i; j++) {
            // console.log(`i:${i} j:${j} arr[j]:${arr[j]} arr[j+1]:${arr[j+1]}`)
            if (arr[j] > arr[j+1]) {
                // console.log('swapped')
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            } else{

            }
        }
    }
    return arr
}

// bubbleShort(arr)
console.log(bubbleShort(arr))