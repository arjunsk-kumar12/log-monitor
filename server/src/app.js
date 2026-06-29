const express = require("express");

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req,res)=>{
    res.send("TEST: Log Monitor Server is running")
})

module.exports = app;