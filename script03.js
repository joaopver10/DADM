var http = require('http')

var nome = "joão pedro"
var idade = 21
var peso = 75.4
var altura = 1.78
var sexo = 'M' 

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})

    res.write('<html>');
    res.write('<head>');
    res.write('<title>Aula de Node.js</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Dados do Paciente</h1>');
    res.write('<p>');

    res.write(`Nome: ${nome}` + '<br>')
    res.write(`Idade: ${idade}` + '<br>')
    res.write(`Peso: ${peso}` + '<br>')
    res.write(`Altura: ${altura}` + '<br>')
    res.write(`Sexo: ${sexo}` + '<br>')

    res.write('</p>');
    res.write('</body>');
    res.write('</html>');   

    res.end()
}).listen(8080)