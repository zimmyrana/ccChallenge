//Task 1: Write a script to save a string value to localstorage and retrieve it. Log the retrieved value.

//to use localStorage we need to create html page because localStorage is a part of browser API not node.js 
localStorage.setItem('username','admin')

let username = localStorage.getItem('username')

console.log(username)