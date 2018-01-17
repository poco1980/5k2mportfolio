const socket = require('socket.io-clent')('https://ws.api.iextrading.com/1.0/ref-data/symbols')

socket.on('message', message => console.log(message))

socket.on('connect', () => {
    socket.emit('subscribe', 'snap,fb,aig+')
    socket.emit('unsubscribe', 'aig+')
})

socket.on('disconnect', () => console.log('Disconnected'))