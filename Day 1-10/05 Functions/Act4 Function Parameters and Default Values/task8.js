//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

let greet = (name,age=16) => {
    return `hello ${name} your age is ${age}.`
}

console.log(greet('maulik'))