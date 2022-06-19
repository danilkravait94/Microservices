'use strict';

const express = require('express');

const port = 8080;
const host = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Congratulations. You reach service 2');
});

app.listen(port, host);
console.log(`Hello from http://${host}:${port}`);