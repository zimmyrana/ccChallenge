// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greet(name){
    let username = name
    return function (){
        return `Hello ${username}`
    }
}

const sayHi = greet('manohar')

console.log(sayHi())