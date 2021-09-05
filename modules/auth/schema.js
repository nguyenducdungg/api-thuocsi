const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userProfileSchema = new Schema({
    email: {
        type : String,
        required : true,
        unique : true,
        validate: {
            validator(email) {
                let isValidEmail = EMAIL_REGEX.test(email)
                // if (isValidEmail) {
                //     return true
                // } else {
                //     return "not an email"
                // }
                return isValidEmail
            }
        }
    },
    password: {
        type : String,
        required : true,
    },
    fullName: {
        type : String,
        required : true,
    },
    role: {
        type : String,
        enum : ["admin","user"]
    }
})

module.exports = userProfileSchema