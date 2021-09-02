const express = require('express')

const authRouter = require('./auth')
const productRouter = require('./product')

const router = new express.Router()

router.use('/api/auth', authRouter)

router.use('/api/product', productRouter)

module.exports = router