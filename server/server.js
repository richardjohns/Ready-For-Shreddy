const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

// const accom = require('./routes/accom')
//
//
// server.use('/api/v1/accom', accom)


module.exports = server
