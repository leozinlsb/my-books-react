const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const filteredBook = books.filter(book => book.id === id)[0]

    if (filteredBook === undefined) {
        throw new Error("Livro não encontrado")
    }

    return filteredBook
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const newBookList = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newBookList))
}

function modifyBook(patchedBook, id) {
    let books = JSON.parse(fs.readFileSync("books.json"))
    const modifyIndex = books.findIndex(book => book.id === id) //when the method .findIndex dont find anything it returns -1

    if (modifyIndex === -1) {
        throw new Error("Livro não encontrado")
    }

    const modifiedContent = { ...books[modifyIndex], ...patchedBook }

    books[modifyIndex] = modifiedContent

    fs.writeFileSync("books.json", JSON.stringify(books))
}

function deleteBookById(id) {
    let books = JSON.parse(fs.readFileSync("books.json"))
    const filteredBooks = books.filter(book => book.id !== id)

    fs.writeFileSync("books.json", JSON.stringify(filteredBooks))
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    modifyBook,
    deleteBookById
}