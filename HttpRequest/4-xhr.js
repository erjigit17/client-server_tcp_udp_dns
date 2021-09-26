'use strict';

const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('./4-xhr.html', 'utf8');

http.createServer((req, res) => {
  if (req.url === '/persons') {
    res.end(JSON.stringify({ name: 'Erji'}));
  } else {
    res.end(index);
  }
}).listen(8000);