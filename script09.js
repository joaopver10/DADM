var fs = require('fs');

fs.open('arquivoNovo.txt', 'w', function (err, file) {
  if (err) throw err;
});

console.log('arquivo aberto');
