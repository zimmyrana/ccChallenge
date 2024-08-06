//Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name. 

class Person {
    constructor(firstName,lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName(){
        return this.firstName + ' ' + this.lastName
    }

    set setFullName(name){
        const [firstName,lastName] = name.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person = new Person('Mohan','Lal')
console.log(person.fullName)
person.setFullName = 'chandel sahab'
console.log(person.fullName)

