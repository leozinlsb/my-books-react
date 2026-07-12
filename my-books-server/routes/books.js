const { Router } = require("express")
const { getBooks, getBook, postBook, patchBooks, deleteBooks } = require("../controllers/book")

const router = Router()

router.get('/', getBooks)
router.get('/:id', getBook)

router.post('/', postBook)

router.patch('/', patchBooks)

router.delete('/', deleteBooks)

module.exports = router