'use strict';

const Client = require('./session/client.js');
const Session = require('./session/session.js');

const routing = { 
  '/': async () => '<h1>Welcome to homepage</h1>', 
  '/start': async client => {
    Session.start(client);
    return `Session token is: ${client.token}`;
  }, 
  '/destroy': async client => {
    const result = `Session destroyed: ${client.token}`;
    Session.delete(client.token);
    return result;
  }, 
  '/api/method1': async client => {
    if (client.session) {
      client.session.set('method1', 'called');
      return { data: 'example result' };
    } else {
      return { data: 'access is denied' };
    }
  }, 
  '/api/method2': async client => ({
    url: client.req.url,
    headers: client.req.headers,
  }),
  '/api/method3': async client => {
    if (client.session) {
      return  [...client.session.enteries()]
        .map(([key, value]) => `<b>${key}</b>: ${value}<br>`)
        .join();
    }
    return 'No session found';
  },
};

const types = {
  object: JSON.stringify,
  string: s => s,
  number: n => n + '',
  undefined: () => 'not found',
};

