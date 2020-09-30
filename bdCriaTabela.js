var conexao = require('./bdConectaAgenda')

conexao.connect(
    function (err) {
        if (err)
            throw err
        else {
            console.log('Coxao estabelecida')

            var operaçao = 'CREATE TABLE pessoa (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(50), emaiL VARCHAR(30))'

            conexao.query(operaçao,
                function (err) {
                    if (err)
                        throw err
                    else {
                        console.log('Tabela criada com sucesso')
                    }
                }
            )
        }
    }
)