'use strict';

const net = require('net');
const onData = (data, ...args) => {
  console.log('📧: ' + data);
  console.dir({ args });
}
const server = net.createServer(socket => {
  socket.setNoDelay(true);
  socket.write('❤');
  console.dir(socket.address());
  socket.on('data', onData);
  socket.on('error', err => {
    console.log('socket error: ' + err);
  })
}).listen(3000);

server.on('error', err => {
  console.log('server error: ' + err);
})