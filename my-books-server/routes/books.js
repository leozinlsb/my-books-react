const { Router } = require("express")
const { getBooks, getBook, postBooks, patchBooks, deleteBooks } = require("../controllers/book")

const router = Router()

router.get('/', getBooks)
router.get('/:id', getBook)

router.post('/', postBooks)

router.patch('/', patchBooks)

router.delete('/', deleteBooks)

module.exports = router