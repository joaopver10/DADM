const { create } = require('domain')
var fs = require('fs')
var rs = fs.createReadStream('./arquivo2.txt')

rs.on('abrir',
    function(){
        console.log('o arquivo foi aberto')
    }
)