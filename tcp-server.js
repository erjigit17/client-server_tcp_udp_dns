'use strict';

const net = require('net');
const onData = (data, ...args) => {
  console.log('mail: ' + data);
  console.dir({ args });
}
net.createServer(socket => {

  socket.setNoDelay(true);
  socket.write('heart');
  console.dir(socket.address());
  socket.on('data', onData);
}).listen(3000);