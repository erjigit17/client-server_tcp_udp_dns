'use strict';

const dgram = require('dgram');
const message = Buffer.from('hello');
const client = dgram.createSocket('udp6');

client.send(message, 3000, 'localhost', err => {
  if (err) {
    client.close();
    throw err;
  };
});