const express = require('express')
const router = express()
// const fileUpload = require('express-fileupload')
const bodyParser = require("body-parser")
const authRouter = require('./auth')
const productRouter = require('./product')

router.use(express.static("public"));



router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// router.use(fileUpload())

router.use('/api/auth', authRouter)
router.use('/api/product', productRouter)

module.exports = router