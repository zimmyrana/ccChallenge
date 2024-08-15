//Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring. 

//sliding window technique
function longStr(str) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let subStr = new Set()

    if(!str){
        return 0
    }

    while (end < str.length) { // 0 < 7
        if (!subStr.has(str[end])) {
            subStr.add(str[end])
            end++
            maxLength = Math.max(maxLength,subStr.size)
        } else {
            subStr.delete(str[start])
            start++
        }
    }

    return maxLength

}

console.log(longStr('abcabcbb'));
console.log(longStr('bbbbb'));
console.log(longStr('pwwkew'));
