//Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }

    /* 
    Static Methods:

        Use when you need a utility function or a method that is relevant to the class as a whole, but does not need access to instance-specific data.

    Instance Methods:

        Use when you need to define behavior that operates on data specific to an instance of the class.
     */

    static msg(){
        return 'This is generic msg'
    }
    
}

console.log(Person.msg())