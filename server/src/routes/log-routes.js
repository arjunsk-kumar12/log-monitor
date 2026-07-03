const express = require('express')
const {addLog} = require("../controllers/log-controller")
const router = express.Router();

//POST/logs add route
router.post("/logs", addLog);

module.exports = router;