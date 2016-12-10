var socket = require('socket.io-client')('https://10.0.0.9');
var v4l2camera = require("v4l2camera");
var cam = new v4l2camera.Camera("/dev/video0");

if (cam.configGet().formatName !== "YUYV") {
    console.log("YUYV camera required");
    process.exit(1);
}
cam.configSet({width: 240, height: 297});
cam.start();
cam.capture(function loop() {
    var frame = cam.toYUYV();
    require("fs").createWriteStream("./result.jpg").end(imageBuffer);
    socket.emit('imageBuffer', Buffer(frame) );
    // cam.capture(loop);
});
socket.on('connect', function(){
    socket.emit('chat message', "Hello from camera");

});
