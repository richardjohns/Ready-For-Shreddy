var server = require('./server')

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Well, well, well team. You have made it; you are listening on port', PORT)
})
