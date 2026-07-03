const Log = require("../models/Log");


// POST/logs
// add recieved logs to database and validate the logs
const addLog = async(req,res) =>{
    try{
        const {service, level, message} = req.body;
        if(!service || !level || !message){
            return res.status(400).json({
                success: false,
                message: "invalid log"
            })
        }

        let log = new Log({service,level,message});
        await log.save();

        return res.status(201).json({
            success: true,
            message: "log added successfully",
            log
        })
    }catch(e){
        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
}

// TODO: GET/logs
// return all logs added to database

module.exports = {addLog};