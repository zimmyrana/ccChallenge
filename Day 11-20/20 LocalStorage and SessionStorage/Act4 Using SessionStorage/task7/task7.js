//Task 7: Create a simple form that saves user input (e.g., name and email) to sessionstorage when submitted. Retrieve and display the saved data on page load.

let username = document.getElementById('uname')
let email = document.getElementById('email')
let btn = document.getElementById('btn')
let info = document.getElementById('info')

btn.addEventListener('click',()=>{
    const obj = {
        username:username.value,
        email:email.value
    }
    sessionStorage.setItem('user',JSON.stringify(obj))

   
})

const user  = JSON.parse(sessionStorage.getItem('user'))

if(user){
    info.innerText = user.username + " " + user.email
}