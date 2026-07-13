const fs = require("fs")
const { getAllBooks, getBookById, insertBook, modifyBook, deleteBookById } = require("../services/books")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const book = getBookById(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(404)
        res.send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body

        if (req.body.nome) {
            insertBook(newBook)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("Nome é obrigatório")
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        if (id && Number(id) && req.body.nome) {
            modifyBook(body, id)
            res.send("Item modificado")
        } else {
            res.status(422)
            res.send("Body ou Id inválidos (nome é obrigatório)")
        }


    } catch (error) {
        res.status(404)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deleteBookById(id)
            res.send("Deletado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}