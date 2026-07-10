const { Router } = require("express")
const { getBooks, postBooks, patchBooks, deleteBooks } = require("../controllers/book")

const router = Router()

router.get('/', getBooks)

router.post('/', postBooks)

router.patch('/', patchBooks)

router.delete('/', deleteBooks)

module.exports = router