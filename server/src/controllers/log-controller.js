const Log = require("../models/Log");
const mongoose = require("mongoose")

// POST/logs
// add recieved logs to database and validate the logs
const addLog = async(req,res) =>{
    try{
        //cjecl of each of the field are present
        const {service, level, message} = req.body;
        if(!service || !level || !message){
            return res.status(400).json({
                success: false,
                message: "Invalid log."
            })
        }

        //save to database
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
        //get the service and level from query params of request
        const {service, level} = req.query;
        const filterObj = {};
    
        //check which parameters are given
        if(service){
            filterObj.service = service;
        }
        if(level){
            filterObj.level = level;
        }
        
        //check if logs are present
        const logs = await Log.find(filterObj);
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