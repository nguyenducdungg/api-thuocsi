require('./connect-mongo')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT
const router = require('./router')

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello from server!'))
app.use("/uploads", express.static("uploads"));
app.use(router)

app.use((err, req, res, next) => {
  let message = err.message
  let stack = err.stack

  res.status(400)
    .json({ message, stack })
})

app.listen(port, (err) => console.log(err || 'Server open at port ' + port))

