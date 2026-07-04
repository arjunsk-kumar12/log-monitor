const express = require('express')
const {addLog, getLogs} = require("../controllers/log-controller")
const router = express.Router();

//Routes
// POST/logs - add log to database
router.post("/", addLog);

// GET/logs - retrieve all logs in database
router.get("/",getLogs)

module.exports = router;