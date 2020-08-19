var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('Desenvolvimento de aplicações distribuidas e moveis')
    res.end()
}).listen(8080)

console.log('servidor iniciando na porta 8080. Pressione Ctrl + C para encerrar')