var fs = require('fs')

fs.writeFile('arquivo2.txt', 'Desenvolvimento de Aplicações Distribuidas e moveis',
    function(err){
        if(err)
            throw err
    }
)

console.log('Arquivo abriu') 