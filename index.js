const express = require('express')
const http = require('http')
const app = express()

app.use('/', (req, res) => {
  res.end('Hello my express demo!')
})

const server = http.createServer(app)

server.listen('8888')
