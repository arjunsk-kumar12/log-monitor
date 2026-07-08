const Joi = require("joi");

// validate POST/logs

const validateLog = (data)=>{
    const logSchema = Joi.object({
        service : Joi.string().required().trim().min(3).max(50),
        level: Joi.string().required().uppercase()
                .valid("INFO","WARN","DEBUG","ERROR"),
        message: Joi.string().required().trim().min(3).max(500)
    })

    return logSchema.validate(data);
}

// validate the request query
// Filtering: service, level
// Sorting: sort(add priorites to log level later)
// Pagination: page, limit
const validateQuery = (data)=>{
    const querySchema = Joi.object({
        service : Joi.string().trim().min(3).max(50),
        level : Joi.string().uppercase()
                .valid("INFO","WARN","DEBUG","ERROR"),
        page : Joi.number().integer().min(1).default(1),
        limit : Joi.number().integer().min(1).max(50).default(10),
        sort :Joi.string()
                .valid("-createdAt", "createdAt", "-service", "service")
                .default("createdAt")
    })

    return querySchema.validate(data);
}

module.exports = {validateLog, validateQuery};