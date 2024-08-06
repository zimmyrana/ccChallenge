//Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

const _ = require('lodash')

const input = "hello world";
const output = _.capitalize(input);

console.log(output)