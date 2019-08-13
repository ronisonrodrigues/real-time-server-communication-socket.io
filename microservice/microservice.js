const io = require('socket.io-client');
const socket = io('http://localhost:3333', {
    query: { microservice: 'microservice-01' }
});

