'use strict';

const net = require('net');

const socket = new net.Socket();

socket.on('data', data => {
  console.log('📧: '+ data);
});

socket.connect({
  port: 3000, 
  host: 'localhost'
}, () => {
  socket.write('💋')
});

socket.unref()