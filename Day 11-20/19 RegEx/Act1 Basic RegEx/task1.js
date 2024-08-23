// task1.  Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const text = "I love JavaScript. JavaScript is a versatile language. JavaScript is used for web development.";

const pattern = /JavaScript/g;

const match = text.match(pattern)

console.log(match);
