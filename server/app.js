const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes')

// database
require('./config/db');

//port
const port = process.env.PORT || 4000;

// port server
app.set('port', port);

// middleware's
app.use(cors());
app.use(express.json());

// all routes
app.use("/api",routes);

module.exports = app;