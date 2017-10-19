var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

<<<<<<< HEAD
// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'))
// })
=======
// const APP_ID = b1d7cd0e
// const APP_KEY = 726b72a42e1b3e722eccc6ef2deecbd1

server.use('api.weatherunlocked.com/api/resortforecast/4424660?hourly_interval=6&app_id={APP_ID}&app_key={APP_KEY}', (req, res) => {
    request
        .get("http://api.weatherunlocked.com/" + req.params.number)
        .end((err, response) => {
            if (err) {
                console.log(err)
            } else {
                res.json(response.body)
            }
        })
})

>>>>>>> 6e1a5e18e977ef0420bea472aa73644d94845437

module.exports = server
