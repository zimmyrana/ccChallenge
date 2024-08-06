//Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }

}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age)
        this.studentID = studentID
    }

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old. student id is ${this.studentID}`
    }
}

let student = new Student('kohli', 35, 18)

console.log(student.getID())
console.log(student.greet())