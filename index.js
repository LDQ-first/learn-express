const express = require('express')
const http = require('http')
const app = express()
const auth = require('./middlewares/auth.js')

const mw1 = (req, res, next) => {
  console.log('mw1')
  next()
}

const mw2 = (req, res, next) => {
  console.log('mw2')
  next()
}

const mw3 = (req, res, next) => {
  console.log('mw3')
  res.end('done')
}


app.use([mw1, mw2], mw3)

// app.use(auth)

app.use((err, req, res, next) => {
  res.end(err)
})

const server = http.createServer(app)

server.listen('8888')
console.log('open in http://localhost:8888')
