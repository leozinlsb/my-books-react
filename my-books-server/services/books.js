const fs = require("fs")

function getAllBooks(){
    return JSON.parse( fs.readFileSync("books.json") )
}

function getBookById(id){
    const book = JSON.parse( fs.readFileSync("books.json"))

    const filteredBook = book.filter( book => book.id === id)[0]

    return filteredBook
}

module.exports = {
    getAllBooks,
    getBookById
}