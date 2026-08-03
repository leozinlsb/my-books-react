const express = require('express')
const bookRouter = require("./routes/books")
const favoriteRouter = require("./routes/favorites")
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))
const port = 8000

app.use('/books', bookRouter)
app.use('/favorites', favoriteRouter)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})