//Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function checkPali(str){
    if(str.length <= 1){
        return true
    }

    if(str[0] === str[str.length-1]){
        return checkPali(str.slice(1,-1))
    } else {
        return false
    }
}

console.log(checkPali('logic'))