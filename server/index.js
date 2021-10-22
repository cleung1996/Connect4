const controllers = require('./controller')
const express = require('express');
const path = require('path');
// const db = require('./db');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//nodemon  "start": "nodemon server/server.js"