const express = require('express')
const http = require('http')
const app = express()
const auth = require('./middlewares/auth.js')
const bodyParser = require('body-parser')

/**
 * 帮你解析传过来的json格式和url
 * 
*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  req.middlewares = []
  next()
})

const mw1 = (options) => {
  return (req, res, next) => {
   /* if (options.whatEver) {
      console.log('hey')
    }*/
    req.middlewares.push('mw1')
    next()
  }
}

const mw2 = (req, res, next) => {
  req.middlewares.push('mw2')
  next()
}

const mw3 = (req, res, next) => {
  req.middlewares.push('mw3')
  res.end(JSON.stringify(req.middlewares))
}

// app.use(mw1(), [mw2, mw3])

// app.use(auth)

app.use('/', mw1())

app.get('/a', mw2)
app.post('/u', mw2)

app.use(mw3)

app.use((err, req, res, next) => {
  res.end(err)
})

const server = http.createServer(app)

server.listen('8888')
console.log('open in http://localhost:8888')
