const exprerss = require('express')
// var multer = require('multer')
// const upload = multer({dest: 'upload/'})
const productHandlers = require('../modules/products')
const productRouter = new exprerss.Router()

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './server/images')      //you tell where to upload the files,
//     },
//     filename: function (req, file, cb) {
//         cb(null,  'image-' + Date.now() + '.jpg')
//     }
// })

// const upload = multer({storage: storage,
//     onFileUploadStart: function (file) {
//       console.log(file.originalname + ' is starting ...')
//     },
// });

productRouter.get('/', productHandlers.findMany)

productRouter.get('/:id', productHandlers.findOne)

productRouter.post('/', productHandlers.create)

productRouter.put('/:id',  productHandlers.update)

productRouter.delete('/:id', productHandlers.delete)

module.exports = productRouter