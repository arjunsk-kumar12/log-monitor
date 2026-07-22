


//fetches all the logs in database
async function getLogData(){
    try{
        //api call to fetch logs
        const res = await fetch("http://localhost:3000/api/v1/logs");
        
        if(!res.ok){
            throw new Error("Failed to fetch logs.")
        }
        const resData = await res.json();
        return resData.logs;
    }catch(e){
        return [];
    }
}

export default getLogData