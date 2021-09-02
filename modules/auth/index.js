const ADMIN_EMAIL = 'nguyenducdung853@gmail.com';
const ADMIN_PASSWORD = '123123'

const handlers = {
    signIn(req, res, next) {
        try {
            let data = req.body

            let email = String(data.email).trim().toLowerCase()
            let password = data.password

            if (email != ADMIN_EMAIL || password != ADMIN_PASSWORD) {
                throw new Error('Wrong email or password!')
            }

            let user = { email: ADMIN_EMAIL }
            res.json(user)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = handlers