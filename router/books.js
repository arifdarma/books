const express = require('express')
const router = express.Router()
const bookController = require('../controller/bookController')
var db = require('../database')

router.get('/title/:title',bookController.getBooks)
router.post('/wishlist',bookController.saveWishList)
router.get('/showWishList',bookController.showWishList)

module.exports = router;