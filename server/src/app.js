const express = require("express");
const routes = require("./routes/log-routes");
const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use("/api/v1/logs",routes)

module.exports = app;