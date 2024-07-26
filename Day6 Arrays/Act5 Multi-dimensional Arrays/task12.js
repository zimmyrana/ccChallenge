//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

/////////////////////////////////////////////////////////////////
let arr1 = [12, 23, 34]
let arr2 = [45, 56, 67]
let arrMatrix = []

arrMatrix = [arr1, arr2]

console.log(arrMatrix)

/////////////////////////////////////////////////////////////////

let nums = [
   [1,2,3],
   [4,5,6],
   [7,8,9]
];

for (i = 0; i <= nums.length - 1; i++) {
    for (j = 0; j <= nums[i].length - 1; j++) {
        //i iterates over length of array (rows)
        //j iterates over length of each array(column)
        console.log(nums[i][j])
    }
}


