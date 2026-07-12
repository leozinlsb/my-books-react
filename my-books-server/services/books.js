const fs = require("fs")

function getAllBooks(){
    return JSON.parse( fs.readFileSync("books.json") )
}

function getBookById(id){
    const books = JSON.parse( fs.readFileSync("books.json"))

    const filteredBook = books.filter( book => book.id === id)[0]

    return filteredBook
}

function insertBook(newBook){
    const books = JSON.parse( fs.readFileSync("books.json") )

    const newBookList = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newBookList))
}

function modifyBook(patchedBook, id){
    let books = JSON.parse( fs.readFileSync("books.json") )
    const modifyIndex = books.findIndex(book => book.id === id)

    const modifiedContent = {...books[modifyIndex], ...patchedBook}

    books[modifyIndex] = modifiedContent

    fs.writeFileSync("books.json", JSON.stringify(books))
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    modifyBook
}