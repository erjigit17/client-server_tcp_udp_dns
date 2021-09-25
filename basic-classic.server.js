'use strict';

const http = require('http');

const host = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, world!</h1>');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

server.on('error', (err) => {
  if (err.code === 'EACCES') {
    console.log(`No access to port: ${port}`);
  }
});