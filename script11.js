var fs = require('fs')
var texto = 'sei lá to testando aqui'

fs.writeFile('arquivo3.txt', texto,
    function(err){
        if(err)
            throw err
    }
)

console.log('Arquivo abriu') 