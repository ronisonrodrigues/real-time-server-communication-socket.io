const io = require('socket.io-client');
const socket = io('http://localhost:3333', {
    query: { microservice: 'microservice-01' }
});

socket.on('server', data => {
    const { message } = data;
    console.log('Servidor disse: ' + message);
});