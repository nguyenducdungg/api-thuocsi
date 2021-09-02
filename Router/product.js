const exprerss = require('express')
const productHandlers = require('../modules/products')
const productRouter = new exprerss.Router()

productRouter.get('/', productHandlers.findMany)

productRouter.get('/:id', productHandlers.findOne)

productRouter.post('/',  productHandlers.create)

productRouter.put('/',  productHandlers.update)

productRouter.delete('/:id', productHandlers.delete)

module.exports = productRouter