const express = require('express')
const bookRouter = require("./routes/books")

const app = express()
app.use(express.json())
const port = 8000

app.use('/books', bookRouter)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})