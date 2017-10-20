const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')
const server = express()

const accoms = require('./routes/accoms')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/accoms', accoms)

module.exports = server
