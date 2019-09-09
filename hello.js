var http = require('http');
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome back mastah ||| work with travisCI NodeJS dan Github \n'); // missing semi-colon will fail the build
}).listen(1337, '127.0.0.1');
 
console.log('Server running at http://0.0.0.0:8000/');
