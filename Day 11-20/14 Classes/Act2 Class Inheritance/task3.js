//Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID. 


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

    getID() {
        return this.studentID
    }
}

let student = new Student('kohli', 35, 18)

console.log(student.getID())
console.log(student.greet())