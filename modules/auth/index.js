const userProfileModel = require('./model')
const handlers = {
    async signIn(req, res, next) {
        try {
            let { email, password } = req.body
            if (!email) {
                throw new Error(`Missing 'email'!`)
            }
            if (!password) {
                throw new Error(`Missing 'password'!`)
            }
            let user = await userProfileModel.findOne({
                email: String(email).toLowerCase().trim()
            })
            let hasPassword = hasMd5(String(password))
            if (!user || hasPassword != user.password) {
                throw new Error(`Wrong email or password`)
            }
            //signIn success if here if no error throw
            // gen ra 1 object chứa thông tin của user
            let userPayload = user.toObject()

            delete userPayload.password
            res.json(userPayload)
        } catch (err) {
            next(err)
        }
    }
}

function hasMd5(string) {
    return require('crypto')
        .createHash('md5')
        .update(string)
        .digest('hex')
}

module.exports = handlers

// try {
//     let user = {
//         fullName: 'Nguyen Duc Dung',
//         email: 'nguyenducdung853@gmail.com',
//         password: hasPassword,
//         role: ["admin"],
//     }
//     let item = await userProfileModel.create(user)

//     res.json(item)

// } catch (err) {
//     next(err)
// }