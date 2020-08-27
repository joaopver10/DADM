var http = require('http')
var url = require('url')


http.createServer(

    function(req, res){
        res.writeHead(200, {'Content-Type':'text/html; charset = UTF-8'})
        
        var args = url.parse(req.url, true).query
        var nome = args.nome
        var sobrenome = args.sobrenome 

        res.end()
    }

).listen(8080)