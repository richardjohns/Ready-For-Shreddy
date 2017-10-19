var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

// const APP_ID = b1d7cd0e
// const APP_KEY = 726b72a42e1b3e722eccc6ef2deecbd1

server.use('/api/v1/snowreport', (req, res) => {
  request
    .get('api.weatherunlocked.com/api/resortforecast/4424660?hourly_interval=6&app_id=b1d7cd0e&app_key=726b72a42e1b3e722eccc6ef2deecbd1')
    .end((err, response) => {
      if (err) {
        console.log(err)
      } else {
        res.json(response.body)
      }
    })
})

module.exports = server
