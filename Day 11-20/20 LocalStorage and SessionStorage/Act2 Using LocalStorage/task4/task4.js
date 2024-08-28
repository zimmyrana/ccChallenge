//Task 4: Write a script to remove an item from localstorage. Log the localstorage content before and after removal.

localStorage.setItem('username','admin')

console.log(localStorage.getItem('username'))

localStorage.removeItem('username')

console.log(localStorage.getItem('username'))
