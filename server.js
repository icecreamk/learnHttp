const http = require('http')

http.createServer(function(request, response) {
  console.log('request:', request.url)

  response.end('end')
}).listen(8888)

console.log('server listening on 8888')