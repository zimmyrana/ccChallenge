//Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

let string = "hello how are you"

let pattern = /\w+\b$/g

let match = string.match(pattern)

console.log(match);
