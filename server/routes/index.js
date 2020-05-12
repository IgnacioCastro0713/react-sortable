const express = require("express");
const app = express();

const taskRoutes = require("./task.route");

app.use("/task", taskRoutes);

module.exports = app;
