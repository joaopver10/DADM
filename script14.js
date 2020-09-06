var http = require('http');
var url = require('url');
var fs = require('fs');

http
  .createServer(function (req, res) {
    var dados = url.parse(req.url, true).query;
    var nome = dados.nome;
    var sobrenome = dados.sobrenome;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('Nome: ' + nome + '<br>');
    res.write('Sobrenome: ' + sobrenome);
    res.end();
  })
  .listen(8080);

console.log(
  'Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.'
);
