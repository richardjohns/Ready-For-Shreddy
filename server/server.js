const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const resorts = require('./routes/routes')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

// const xxx = require('./routes/xxx')
// const yyyy = require('./routes/yyyy')
// const zzzz = require('./routes/zzzz')

// server.use('/api/v1/xxx', xxx)
server.use('/api/v1/resorts', resorts)
// server.use('/api/v1/zzz', zzz)

module.exports = server
