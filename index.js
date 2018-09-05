const express = require('express');
const socket = require('socket.io');

const app = express();
let io;

app.use(express.static(__dirname+'/public'));

const server = app.listen(3000, () =>{console.log('listening at 3000')});

io = socket(server);

io.sockets.on('connection', (socket) => {
    console.log(`new connection with ${socket.id}`);

    socket.on('drawn', (data) => {
        socket.broadcast.emit('drawn', data);
    })
});