const mongoose = require("mongoose")

// schema for Log document
// service: the service the has been logged(auth, payment etc)
// level: severity level of log(info, warn, error, debug)
// message: specific details about the log
// FUTURE: add diagnostic info such as IP and DNS
const LogSchema = new mongoose.Schema({
    service : {
        type: String,
        required : true, 
        trim: true,
    },
    level: {
        type: String,
        required: true,
        trim : true,
        enum: ["INFO", "WARN", "ERROR", "DEBUG"],
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
},{timestamps:true});

const Log = mongoose.model("Log", LogSchema);
module.exports = Log;