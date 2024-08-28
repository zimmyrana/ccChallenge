//Task 9: Write a function that accepts a key and a value, and saves the value to both localstorage and sessionstorage. Retrieve and log the values from both storage mechanisms.

(function storeIt(){

    localStorage.setItem('username','admin')
    sessionStorage.setItem('username','admin')

    console.log(sessionStorage.getItem('username'))
    console.log(localStorage.getItem('username'))

    localStorage.removeItem('username')
    sessionStorage.removeItem('username')

    console.log(localStorage.getItem('username'))
    console.log(sessionStorage.getItem('username'))

})()