var socket = require('socket.io-client')('https://10.0.0.9');
socket.emit('chat message', "Hello from camera");
