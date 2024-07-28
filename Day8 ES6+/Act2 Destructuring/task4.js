//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console

const book = {
    title: 'Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    publisher: 'J.B. Lippincott & Co.',
    ISBN: '978-0-06-112008-4',
    pages: 281
}

const { title, author } = book

console.log(`the '${title}' by ${author}`)