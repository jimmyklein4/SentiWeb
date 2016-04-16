
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static(__dirname + '/'));

io.on('connection', function(socket) {
	console.log("User connected");
	socket.on('disconnect', function() {
		//console.log("User disconnected");
	});
	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	});
});

http.listen(3000, function() {
    console.log("Listening on port 3000");
});