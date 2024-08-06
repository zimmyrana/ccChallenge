// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process. 

import {add} from './module1'
import {subtract} from './module2'


// Expose the functions to the global scope so we can use it on console
window.add = add;
window.subtract = subtract;

//otherwise it will only log this results
console.log(add(23,56))
console.log(subtract(23,56))

//check bundle.js after 'npm run dev' it will make short code of our modules