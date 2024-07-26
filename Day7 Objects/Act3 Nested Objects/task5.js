//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. 

const library = {
    name: 'state library',
    books: [{
        "bname": "Bunge Limited",
        "author": "Samaria Penhall",
        "year": 1983
    }, {
        "bname": "Axalta Coating Systems Ltd.",
        "author": "Kalie Brimming",
        "year": 2008
    }, {
        "bname": "Resolute Energy Corporation",
        "author": "Dillie Brackley",
        "year": 1997
    }, {
        "bname": "Recon Technology, Ltd.",
        "author": "Fritz Fiddeman",
        "year": 1986
    }, {
        "bname": "Bank of America Corporation",
        "author": "Matt Bick",
        "year": 1987
    }]
}

console.log(`${library.name} has these books:`);
console.table(library.books);

