const express = require("express");
const cors = require("cors");
const routes = require("./routes/log-routes");

const app = express();

//Middlewares
// only allow specific domains
// TODO: add more restrictions later
app.use(
    cors({
        origin : "http://localhost:5173",
        methods : ["GET", "POST", "DELETE", "PUT"]
    })
)

app.use(express.json());

//Routes
app.use("/api/v1/logs",routes)

module.exports = app;