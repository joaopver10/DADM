var conexao = require('./bdConectaAgenda')

conexao.connect(
    function (err) {
        if (err)
            throw err
        else {
            console.log('Coxao estabelecida')

            var operaçao = "INSERT INTO pessoa(nome, email) VALUES('João Pedro', 'joaozinho@gmai.com')"

            conexao.query(operaçao,
                function (err) {
                    if (err)
                        throw err
                    else {
                        console.log('Pessoa incluída com sucesso')
                    }
                }
            )
        }
    }
)