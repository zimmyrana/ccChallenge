//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

const book = {
    title: 'Operating System Concepts',
    author: ' Silberschatz, Galvin and Gagne',
    year: 2012
}

const keys = Object.keys(book)
const values = Object.values(book)

//these methods gives array of keys,values of an object
console.log(keys)
console.log(values)
