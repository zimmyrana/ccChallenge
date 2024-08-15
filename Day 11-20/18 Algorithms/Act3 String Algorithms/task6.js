//Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function srtOccur(str) {
    let occurrences = {}
    for (let i = 0; i < str.length ; i++) {
        let char = str[i]
        if(occurrences[char]){
            occurrences[char]++
        }else{
            occurrences[char] = 1
        }
    }
    return occurrences
}

console.log(srtOccur('sahdksa'))