const exprerss = require('express')
// var multer = require('multer')
// const upload = multer({dest: 'upload/'})
const productHandlers = require('../modules/products')
const productRouter = new exprerss.Router()

// fileUpload(file) {
//     const url = this.props.uploadUrl;
//     let formData = new FormData();
//     formData.append("uploadfile", file); //Lưu ý tên 'uploadfile' phải trùng với tham số bên Server side
//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };
//     return axios.post(url, formData, config);
//   }

productRouter.get('/', productHandlers.findMany)

productRouter.get('/:id', productHandlers.findOne)

productRouter.post('/', productHandlers.create)

productRouter.put('/:id',  productHandlers.update)

productRouter.delete('/:id', productHandlers.delete)

module.exports = productRouter