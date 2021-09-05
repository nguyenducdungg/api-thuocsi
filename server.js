require('./connect-mongo')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 9000
const router = require('./router')

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello from server!'))

app.use(router)

app.use((err, req, res, next) => {
  let message = err.message
  let stack = err.stack

  res.status(400)
    .json({ message, stack })
})

app.listen(port, (err) => console.log(err || 'Server open at port ' + port))


// // router demo
// const routerExample = new express.Router()
// const routerChild1 = new express.Router()
// const routerChild2 = new express.Router()

// routerExample.get('/e1', (req, res) => res.send('e1')) // /example/e1
// routerExample.post('/e2', (req, res) => res.send('e2')) // /example/e2

// routerChild1.get('/', (req, res) => res.send('child 1')) // /child1

// routerChild2.get('/', (req, res) => res.send('child 2')) // /child2

// // ex1:
// // app.use('/example', routerExample)
// // app.use('/child1', routerChild1)
// // app.use('/child2', routerChild2)

// // ex2:
// routerExample.use('/child1', routerChild1)
// routerExample.use('/child2', routerChild2)
// app.use('/example', routerExample)