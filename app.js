var express=require('express');
var app = require('express')();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    app.use(express.static('public'));
    res.sendFile(__dirname + '/index.html');
});

/* ------------- Client to server / Server to client -------------
--------------------------------------------------------------- */
io.on('connection', function (socket) {
  socket.on('event', function (data) {
    console.log('d: ' + data);

    io.emit('event', data);
  })
});


server.listen(8080);
