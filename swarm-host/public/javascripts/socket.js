
var socket = io.connect('http://localhost:3000');
socket.on('stats', function (data) {
console.log(data);
});
