const Joi = require("joi");

//validate POST/logs

const validateLog = (data)=>{
    const logSchema = Joi.object({
        service : Joi.string().required().trim().min(3).max(50),
        level: Joi.string().required().uppercase()
                .valid("INFO","WARN","DEBUG","ERROR"),
        message: Joi.string().required().trim().min(3).max(500)
    })

    return logSchema.validate(data);
}

const validateQuery = (data)=>{
    
    const querySchema = Joi.object({
        service : Joi.string().trim().min(3).max(50),
        level: Joi.string().uppercase()
                .valid("INFO","WARN","DEBUG","ERROR"),
        
    })

    return querySchema.validate(data);
}

module.exports = {validateLog, validateQuery};