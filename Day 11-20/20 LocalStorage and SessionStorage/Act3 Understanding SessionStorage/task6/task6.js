//Task 6: Write a script to save an object to sessionstorage by converting it to a JSON string. Retrieve and parse the object, then log it

let person = {
    firstName: 'ram',
    lastName: 'chandra'
}

sessionStorage.setItem('person',JSON.stringify(person))

let getPerson = sessionStorage.getItem('person')

console.log(getPerson);


