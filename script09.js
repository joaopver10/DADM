var fs = require('fs')

fs.open('arquivo1.txt', 'w', 
    function(err, file){
        if(err)
        throw err
    }
)


console.log('arquivo aberto')