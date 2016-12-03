var socket = require('socket.io-client')('https://10.0.0.9');
var v4l2camera = require("v4l2camera");


socket.on('connect', function(){
    socket.emit('chat message', "Hello from camera");

    var cam = new v4l2camera.Camera("/dev/video0")
    if (cam.configGet().formatName !== "YUYV") {
        console.log("YUYV camera required");
        process.exit(1);
    }
    cam.configSet({width: 176, height: 144});
    cam.start();
    cam.capture(function loop() {
        var frame = cam.frameRaw();

        socket.emit('imageBuffer', Buffer.from(frame) );
        cam.capture(loop);
    });
});
