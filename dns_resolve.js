'use strict';

const dns = require('dns');

dns.resolve('o.kg', (err, data) => {
  if (err) {
    if (err.code === 'ECONNREFUSED') {
      console.log('No internet connection');
    } else {
      console.log('Web is dead');
    }
  }
  console.log({ data });
});

dns.resolveAny('ilimbox.kg', (err, data) => {
  if (err) throw err;
  console.log({ data });
});

// dns.lookupService('176.126.167.25', 443, (err, host, service) => {
//   if (err) throw err;
//   console.log({ host, service });
// });