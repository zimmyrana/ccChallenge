//Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.


const string = '98 02 33  Hello how are You 248 92'

const pattern = /[A-Z]\w+/g

const match = string.match(pattern)

console.log(match);
