var socket = require('socket.io-client')('https://10.0.0.9');
var v4l2camera = require("v4l2camera");
var cam = new v4l2camera.Camera("/dev/video0");

console.log(cam.configGet().formatName);

if (cam.configGet().formatName !== "YUYV") {
    console.log("YUYV camera required");
    process.exit(1);
}
cam.configSet({width: 352, height: 288});
cam.start();
cam.capture(function loop() {
    cam.capture(loop);
});
socket.on('connect', function(){
    socket.emit('chat message', "Hello from camera");
    socket.emit('imageBuffer', Buffer(cam.frameRaw()) )
});
