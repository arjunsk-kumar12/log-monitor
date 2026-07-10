const axios = require("axios");
const {services, messages} = require("./log-data");

//use axios to send post requests

//generate a random log
function generateRandLog(){
    //get a random service
    const randService = services[Math.floor(Math.random() * services.length)];

    //retrieve the mock data({levels,messages}) for the randomly chosen service
    const logMessages = messages[randService];
    
    //pick a single data entry(level, message)
    const log = logMessages[Math.floor(Math.random() * logMessages.length)];

    //return the randomly selected log
    return {
        service : randService,
        level : log.level,
        message : log.message
    }
}

async function sendLog(){
    try{
        //create the log and send a post requests
        const randLog = generateRandLog();
        const res = await axios.post("http://localhost:3000/api/v1/logs", randLog);
        console.log(`${res.status} : ${randLog.service} - ${randLog.level} - ${randLog.message}`);
    }catch(e){
        console.error(e);
    }
}

//call the send log function every 1000ms
setInterval(sendLog,1000);