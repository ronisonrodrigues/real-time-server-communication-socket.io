var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', socket => {
    const { microservice } = socket.handshake.query;
    console.log(microservice + 'conectado');
});

http.listen(3333, function(){
  console.log('listening on *:3333');
});