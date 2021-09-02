const mongoose = require('mongoose')
const Schema = mongoose.Schema

// String, Number, Boolean, Date, Object, Array, ObjectId 
const productShema = new Schema({
    //_id: ObjectId
    title: {
        type: String,
        required: [true, `yeu cau title!`],
        unique: true
    },
    price: {
        type: String,
        required: [true, `yeu cau price`],
    },
    categorySlug: {
        type: String,
        required: [true, `yeu cau categorySlug`],
    },
    producer: {
        type: String,
        required: [true, `yeu cau producer`],
    },
    slug: {
        type: String,
        required: [true, `yeu cau slug`],
    },
    description: {
        type: String,
        required: [true, `yeu cau description`],
    }
})

module.exports = productShema


