const Log = require("../models/Log");


// POST/logs
// add recieved logs to database and validate the logs
const addLog = async(req,res) =>{
    try{
        const {service, level, message} = req.body;
        if(!service || !level || !message){
            return res.status(400).json({
                success: false,
                message: "Invalid log."
            })
        }

        let log = new Log({service,level,message});
        await log.save();

        return res.status(201).json({
            success: true,
            message: "Log added successfully.",
            log
        })
    }catch(e){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
}

// GET/logs
// return all logs added to database
const getLogs = async(req,res) =>{
  try{
    const logs = await Log.find();
    if(!logs){
        return res.status(400).json({
            sucess: false,
            message: "No logs present"
        })
    }
    return res.status(200).json({
        success: true,
        message: "All logs retrieved.",
        logs
    })
  }catch(e){
    return res.status(500).json({
        success: false,
        message: "Internal Server Error."
    })
  }
}
module.exports = {addLog, getLogs};