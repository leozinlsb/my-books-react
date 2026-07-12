const fs = require("fs")

function getAllBooks(){
    return JSON.parse( fs.readFileSync("books.json") )
}

function getBookById(id){
    const book = JSON.parse( fs.readFileSync("books.json"))

    const filteredBook = book.filter( book => book.id === id)[0]

    return filteredBook
}

function insertBook(newBook){
    const book = JSON.parse( fs.readFileSync("books.json") )

    const newBookList = [...book, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newBookList))
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook
}