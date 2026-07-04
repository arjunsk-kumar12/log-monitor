const express = require('express');
const {addLog, getLogs, getLogbyID} = require("../controllers/log-controller");
const router = express.Router();

//Log Routes
// POST/logs - add log to database
router.post("/", addLog);

// GET/logs - retrieve all logs in database
router.get("/",getLogs);

// GET/logs/:id - retrieve a specific log with given id
router.get("/:id", getLogbyID);

module.exports = router;