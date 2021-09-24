'use strict';

const dgram = require('dgram');
const server = dgram.createSocket('udp6');

server.on('message', (msg, rinfo) => {
  console.dir({msg, rinfo});
});

server.bind(3000);