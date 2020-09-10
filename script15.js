var fs = require('fs');

fs.rename('arquivo1.txt', 'arquivoNovo.txt', function (err) {
  if (err) throw err;
});
