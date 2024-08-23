//Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const string = '98 02 33  Hello how are You 248 92'

const pattern = /\d+/g

const match = string.match(pattern)

console.log(match);
