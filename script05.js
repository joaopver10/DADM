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
        res.write('<h1>Desenvolvimento de Aplicações Web</h1>');
        res.write('<p>Aprender programação é construir o futuro.</p>');
        res.write('</body>');
        res.write('</html>');   

        res.end()  
    
    }
).listen(8080)