const express = require('express')
const http = require('http')
const app = express()
const auth = require('./middlewares/auth.js')

app.use(auth)

app.use((req, res, next) => {
  console.log('oh you got middleware no.1')
  next('something wrong')
})

app.use((req, res) => {
  console.log('oh you got middleware no.2')
  res.end('Hello my express demo!')
})

app.use((err, req, res, next) => {
  res.end(err)
})

const server = http.createServer(app)

server.listen('8888')
console.log('open in http://localhost:8888')
