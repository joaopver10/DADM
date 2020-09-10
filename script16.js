var fs = require('fs')

fs.unlink('arquivoNovo.txt',
    function(err){
         if (err)
            throw err
    }
)