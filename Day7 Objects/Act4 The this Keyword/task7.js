//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method. 

const book = {
    title: 'Operating System Concepts',
    author: ' Silberschatz, Galvin and Gagne',
    year: 2012,
    getBookWithYear(){
        return `The book "${this.title}" is published in ${this.year} year`
    }
}

console.log(book.getBookWithYear())