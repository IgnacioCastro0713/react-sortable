const express = require('express');
const app = express();
const routes = require('./routes')

// database
require('./config/db');

//port
const port = process.env.PORT || 3000;

// port server
app.set('port', port);

// middleware's
app.use(express.json());

// all routes
app.use(routes);

module.exports = app;