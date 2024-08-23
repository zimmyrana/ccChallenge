//Write a regular expression to match all digits in a string. Log the matches.

const moNo = '98 02 33  hello how are yo 248 92'

const pattern = /\d/g

const match = moNo.match(pattern)

console.log(match)