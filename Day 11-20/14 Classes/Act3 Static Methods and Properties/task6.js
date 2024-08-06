//Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students. 


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

    static studentCount = 0

    constructor(name, age) {
        super(name, age)
        Student.studentCount++
    }

    static getStudentCount() {
        return this.studentCount
    }

}

let student1 = new Student('Kohli', 23);
let student2 = new Student('Rohit', 20);
let student3 = new Student('Gill', 22);

console.log(Student.getStudentCount())

