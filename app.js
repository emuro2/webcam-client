var socket = require('socket.io-client')('https://10.0.0.9');
var ss = require('socket.io-stream');
var videoStream = ss.createStream();
var ffmpeg = require('fluent-ffmpeg')();
var rawStream = ffmpeg.input('/dev/video0')inputFormat('YUV').size('176x144').inputFPS(15).loop().pipe(videoStream);

rawStream.on('error', function(err, stdout, stderr) {
    console.log('Cannot process video: ' + err.message);
  });

socket.on('connect', function(){
    socket.emit('chat message', "Hello from camera");

    // var cam = new v4l2camera.Camera("/dev/video0")
    // if (cam.configGet().formatName !== "YUYV") {
    //     console.log("YUYV camera required");
    //     process.exit(1);
    // }
    // cam.configSet({width: 176, height: 144});
    // cam.start();
    // cam.capture(function loop() {
    //     var frame = cam.frameRaw();
    //
    //
    //     cam.capture(loop);
    // });
    ss(socket).emit('imageBuffer', videoStream);

});
