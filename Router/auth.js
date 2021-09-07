const express = require('express')
const authRouter = new express.Router()
const authHandlers = require('../modules/auth')

authRouter.post('/login', authHandlers.login)

authRouter.post('/sign-up', authHandlers.signUp)

authRouter.get('/:id', authHandlers.findOne)

authRouter.get('/', authHandlers.findMany)

authRouter.put('/:id', authHandlers.updateProfile)

authRouter.delete('/:id', authHandlers.deleteProfile)


module.exports = authRouter