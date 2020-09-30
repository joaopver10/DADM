var conexao = require('./bdConectaAgenda')

conexao.connect(
    function (err) {
        if (err)
            throw err
        else {
            console.log('Coxao estabelecida')

            var operaçao = "INSERT INTO pessoa(nome, email) VALUES ?"

            var pessoas = [
                ['Silva Francisco', 'silva@gmail.com'],
                ['Marcelo silva', 'marcelo@gmail.com'],
                ['Carlos', 'carlos@gmail.com'],
                ['Zezinho', 'zezinho@gmail.com'],
                ['frança silva','franco@gmail.com'],
            ]

            conexao.query(operaçao, [pessoas],
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