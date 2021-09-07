const userInfoModel = require('./model')
const handlers = {
    async login(req, res, next) {
        try {
            let { email, password } = req.body

            if (!email) {
                throw new Error("email required")
            }

            if (!password) {
                throw new Error("password required")
            }

            let user = await userInfoModel.findOne({
                email
            })
            password = require('crypto').createHash('md5').update(password).digest('hex')
            if (!user || password !== user.password) {
                throw new Error("wrong email or password")
            }
            let userPayload = user.toObject()
            userPayload.access
            delete userPayload.password


            res.json(userPayload)

        } catch (err) {
            next(err)
        }
    },

    async signUp(req, res, next) {
        try {
            let { email, password, displayName } = req.body
            password = require('crypto').createHash('md5').update(password).digest('hex')

            if (!email) {
                throw new Error("email required")
            }

            if (!password) {
                throw new Error("password required")
            }

            if (password.length < 6) {
                throw new Error("password must be at least 6 characters")
            }

            if (!displayName) {
                throw new Error("displayName required")
            }

            let user = {
                email,
                password,
                displayName,
                roles: ["user"]
            }
            await userInfoModel.create(user)
            res.json(user)

        } catch (err) {
            next(err)
        }
    },
    async updateProfile(req, res, next) {
        try {
            let data = req.body
            let id = req.params.id
            if (!id) {
                throw new Error(`Require 'id' to update!`)
            }
            let user = await userInfoModel.findByIdAndUpdate(
                id,
                data,
                { new: true }
            )
            let userPayload = user.toObject()
            res.json(userPayload)

        } catch (err) {
            next(err)
        }
    },
    async findOne(req, res, next) {
        try {
            let id = req.params.id
            let user = await userInfoModel.findById(id)
            let userPayload = user.toObject()
            delete userPayload.password
            res.json(userPayload)
        } catch (err) {
            next(err)
        }
    },
    async findMany(req, res, next) {
        try {
            let {
                pageIndex,
                pageSize,
                sortBy,
                sort, // asc | desc
                search = '',
                fields = '',
                owner
            } = req.query

            pageSize = parseInt(pageSize) || 20
            pageIndex = parseInt(pageIndex) || 1

            let limit = pageSize
            let skip = (pageIndex - 1) * pageSize
            let sortInfo = `${sort == 'desc' ? '-' : ''}${sortBy}`
            // fields = 'title, description' > fieldArr = ['title', 'description']
            let fieldArr = fields.split(',').map(field => field.trim())
            let conditions = {}
            if (search) {
                conditions.displayName = new RegExp(search, 'i')
            }

            let items = await userInfoModel
                .find(conditions, fieldArr)
                .skip(skip)
                .limit(limit)
                .sort(sortInfo)

            res.json(items)
        } catch (err) {
            next(err)
        }
    },
    async deleteProfile(req, res, next) {
        try {
            let id = req.params.id;
            let item = await userInfoModel.findByIdAndDelete(id);
            res.json(item);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = handlers