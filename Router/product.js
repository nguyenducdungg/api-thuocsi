const express = require('express')
// const fileUpload = require('express-fileupload')
const productHandlers = require('../modules/products')
const productRouter = express()
productRouter.use(express.json())
const bodyParser = require("body-parser")
productRouter.use(bodyParser.urlencoded({ extended: true }))
productRouter.use(bodyParser.json({ type: 'application/json' }))
productRouter.use(bodyParser.raw())

// productRouter.use(fileUpload())

// const upload = multer({ storage: storage });


productRouter.get('/', productHandlers.findMany)

productRouter.get('/:id', productHandlers.findOne)

productRouter.post('/createProduct', productHandlers.create)
// productRouter.post("/createProduct", upload.single("image"), productHandlers.create)

productRouter.put('/:id', productHandlers.update)

productRouter.delete('/:id', productHandlers.delete)

module.exports = productRouter








