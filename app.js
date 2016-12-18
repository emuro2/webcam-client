var socket = require('socket.io-client')('https://ec2-52-15-183-86.us-east-2.compute.amazonaws.com');
var v4l2camera = require("v4l2camera");
var cam = new v4l2camera.Camera("/dev/video0");
var frame = "";
if (cam.configGet().formatName !== "YUYV") {
    console.log("YUYV camera required");
    process.exit(1);
}
cam.configSet({width: 320, height: 240});
cam.start();
cam.capture(function loop() {
    cam.capture(loop);
});
socket.on('connect', function(){
    socket.emit('chat message', "Hello from camera");
});

socket.on('get image', function(){
    frame = cam.toYUYV();
    socket.emit('imageBuffer', Buffer(frame) );
});
