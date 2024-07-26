//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

const book = {
    title: 'Operating System Concepts',
    author: ' Silberschatz, Galvin and Gagne',
    year: 2012,
    getDescription: function(){
        return `"${this.title}" by "${this.author}"`
    }
}

console.log(book.getDescription())