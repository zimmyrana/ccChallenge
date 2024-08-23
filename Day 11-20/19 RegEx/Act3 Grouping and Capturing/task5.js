//Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

const string = '98 02 33  Hello how are You 248 92 (123) 456-7890'

const pattern = /\([0-9][0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/g

const match = string.match(pattern)

console.log(match);