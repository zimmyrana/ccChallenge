//Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const string = '98 02 33 Hello how are You 248 92 (123) 456-7890'

const pattern = /^[a-zA-Z0-9]+/g

const match = string.match(pattern)

console.log(match);