var http = require('http')
var url = require('url')

var end = 'http://localhost:8080/data.html?dia=17&mes=3&ano=2003'
var dados = url.parse(end, true).query

http.createServer(
    function(req, res){

        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
        res.write('<h1> Dados do endereço </h1>')
        res.write(`Host: ${dados.dia}`)
        res.end()
    }
).listen(8080)