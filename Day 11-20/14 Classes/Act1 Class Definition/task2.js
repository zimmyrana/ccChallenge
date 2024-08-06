//Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }

    updateAge(newAge){
        this.age = newAge
        console.log(`age updated to: ${this.age}`)
        return this.age
    }    
}

let person = new Person('kohli',18)

console.log(person.greet())
person.updateAge(35)
console.log(person.greet())


