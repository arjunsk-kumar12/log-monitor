const Log = require("../models/Log");
const {validateLog, validateQuery} = require("../validation/validation")
const mongoose = require("mongoose")

// POST/logs
// add recieved logs to database and validate the logs
const addLog = async(req,res) =>{
    try{

        //validate the request and check if each field is valid
        const {error} = validateLog(req.body)
        if(error){
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            })
        }
        
        //extract field from request body
        const {service, level, message} = req.body;

        //create log and save to db
        let log = new Log({service,level,message});
        await log.save();

        //succesfully added to database
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
//TODO: Pagination, filtering, sorting etc
const getLogs = async(req,res) =>{
    try{
        const {error, value} = validateQuery(req.query);
        if(error){
            return res.status(400).json({
                success : false,
                message: error.details[0].message
            })
        }
        //get the service and level from query params of request(after validation)
        const {service, level, page, limit,sort} = value;
        const filterObj = {};
    
        //check which parameters are given
        if(service){
            filterObj.service = service;
        }
        if(level){
            filterObj.level = level;
        }
        
        //check if logs are present
        //apply sort parameters
        //apply pagination parameters
        const logs = await Log.find(filterObj).sort(sort).skip((page - 1) * limit).limit(limit);

        //no logs found with given query params
        if(logs.length === 0){ 
            return res.status(200).json({
                sucess: true,
                messsage: "No logs present with given parameters.",
                logs
            })
        }
        //successfully retrieved
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

// GET/logs:id 
// return a specific log based on id
const getLogbyID = async(req,res) =>{
    try{
        const logId = req.params.id;
        
        //check if valid id format
        if(!mongoose.Types.ObjectId.isValid(logId)){
            return res.status(400).json({
                success: false,
                message: "Invalid ID format"
            })
        }
        
        //check if log is present in db
        const log = await Log.findById(logId);
        if(!log){
            return res.status(404).json({
                success: false,
                message: "Invalid ID. Log not found."
            })
        }
        //successfully retrieved
        return res.status(200).json({
            success : true, 
            message: "Successfully found log.",
            log
        })
    }catch(e){
        console.error(e)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
}
module.exports = {addLog, getLogs, getLogbyID};