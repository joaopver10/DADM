var http = require('http')
var data = require('./data')


http.createServer(
    function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'})


        res.write('<html>');
        res.write('<head>');
        res.write('<title>Aula de Node.js</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Sejam bem-vindos</h1>');
        res.write('<p>');
        res.write('Hoje é ' + data.retornarDia() + "/" + data.retornarMes() + "/" + data.retornarAno() + data.retornarHora() + ':' + data.retornarMinuto());
        res.write('</p>');
        res.write('</body>');
        res.write('</html>');   

        res.end()  
    
    }
).listen(8080)