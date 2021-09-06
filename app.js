const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const express = require('express');

const server = http.createServer((req, res) => {
  const num = _.random(0, 20);
  console.log(num);
  const greet = _.once(() => {
    console.log('Request made');
  });
  greet();
  greet();

  res.setHeader('Content-Type', 'text/html');

  let path = 'index.html';

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.end(data);
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});