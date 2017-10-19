const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

// const xxx = require('./routes/xxx')
// const yyyy = require('./routes/yyyy')
// const zzzz = require('./routes/zzzz')

// server.use('/api/v1/xxx', xxx)
// server.use('/api/v1/yyy', yyy)
// server.use('/api/v1/zzz', zzz)

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'))
// })

module.exports = server
