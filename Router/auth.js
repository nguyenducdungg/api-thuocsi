const express = require('express')

const authRouter = new express.Router()
const authHandlers = require('../modules/auth')

authRouter.post('/sign-in', authHandlers.signIn)

module.exports = authRouter