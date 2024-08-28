//Task 2: Write a script to save an object to localstorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const user = {
    username: 'admin',
    email: 'admin@example.com',
    role: 'superuser'
};

localStorage.setItem('user',JSON.stringify(user))

const getUser = JSON.parse(localStorage.getItem('user'))

console.log(getUser);
console.log(getUser.role);
