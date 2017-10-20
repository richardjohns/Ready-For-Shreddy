const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')
const server = express()

const accoms = require('./routes/accoms')
const resorts = require('./routes/routes')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/accoms', accoms)
server.use('/api/v1/resorts', resorts)

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'))
// })

module.exports = server
