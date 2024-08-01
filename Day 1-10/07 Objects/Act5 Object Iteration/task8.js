//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

const book = {
    title: 'Operating System Concepts',
    author: ' Silberschatz, Galvin and Gagne',
    year: 2012
}

for (const key in book) {
   console.log(`${key} : ${book[key]}`)
}