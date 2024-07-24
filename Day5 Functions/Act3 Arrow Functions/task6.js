//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let charCheck = (str,char) => {
    if (char === '') {
        // Return false if char is an empty string
        return false; 
    }
    return str.includes(char)
}

console.log(charCheck('hello','o'))
