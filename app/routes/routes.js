const express = require('express')
const router = express.Router()

Product = require('./products/product')

Product(router)

module.exports = router