//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.


const book = {
    title: 'Operating System Concepts',
    author: ' Silberschatz, Galvin and Gagne',
    year: 2012,
    updateYear: function(year){
        return this.year = year
    }
}

//book's year before update
console.log(book.year)

book.updateYear(2025)

//book's year after update
console.log(book.year)