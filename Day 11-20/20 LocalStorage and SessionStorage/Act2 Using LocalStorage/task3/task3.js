//Task 3: Create a simple form that saves user input (e.g., name and email) to localstorage when submitted. Retrieve and display the saved data on page load.


let username = document.getElementById('uname')
let email = document.getElementById('email')
let btn = document.getElementById('btn')
let display = document.getElementById('info')

window.addEventListener("DOMContentLoaded", (event) => {
    console.log('hello')
    
    btn.addEventListener('click', () => {
        const uname = username.value
        const mail = email.value
        localStorage.setItem('user', JSON.stringify({ username: uname, email: mail }))
       
    })

    let details = JSON.parse(localStorage.getItem('user'))
    if(localStorage.getItem('user')){
        display.innerText = details.username + " " + details.email
    }

});


