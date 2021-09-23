'use strict';

const net = require('net');

net.createServer(socket => {
  socket.write('heart');
  console.dir(socket.address());
  socket.on('data', data => {
    console.log('mail: ' + data);
  });
}).listen(3000);