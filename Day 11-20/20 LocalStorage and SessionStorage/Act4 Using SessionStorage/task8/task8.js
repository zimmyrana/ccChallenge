// Task 8: Write a script to remove an item from sessionstorage. Log the sessionstorage content before and after removal.


sessionStorage.setItem('username','admin')

console.log(sessionStorage.getItem('username'))

sessionStorage.removeItem('username')

console.log(sessionStorage.getItem('username'))