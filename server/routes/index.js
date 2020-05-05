const express= require('express');
const app = express();

const taskRoutes = require('./task');

app.use('/api', taskRoutes);

module.exports = app;
