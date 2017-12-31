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

const mw1 = (options) => {
  return (req, res, next) => {
   /* if (options.whatEver) {
      console.log('hey')
    }*/
    console.log(req.body)
    console.log('mw1')
    next()
  }
}

const mw2 = (req, res, next) => {
  console.log('mw2')
  next()
}

const mw3 = (req, res, next) => {
  console.log('mw3')
  res.end('done')
}

app.use(mw1(), [mw2, mw3])

// app.use(auth)

app.use((err, req, res, next) => {
  res.end(err)
})

const server = http.createServer(app)

server.listen('8888')
console.log('open in http://localhost:8888')
