var socket = require('socket.io-client')('https://localhost');
socket.emit('chat message', "Hello from camera");
