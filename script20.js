var events = require('events');
var eventEmitter = new events.EventEmitter

var meuManipuladoEvento = function() {
    console.log('Aprender programação')
}

eventEmitter.on('mensagem', meuManipuladoEvento)
eventEmitter.emit('mensagem')


