import { useEffect, useState } from "react";
import getLogData from "../services/log-api-service"
import FilterBar from "../components/FilterBar";
import LogGrid from "../components/LogGrid";
function Dashboard(){
    //state to store and track logs
    const [logs,setLogs] = useState([]);
    
    //make api call to fetch logs
    useEffect(() =>{
        async function getLogs(){
            const logData = await getLogData();
            console.log("Fetched:", logData);
            setLogs(logData);
        }
        getLogs();
    
    }, [])

    return (
        <div>
            <h1>Log Monitor Dashboard</h1>
            <FilterBar />

            {/* TODO: Need to add dependencies for filters,services, pagination etc*/}
            {/*pass in log array to component for rendering */}
            <LogGrid logs={logs}/>
        </div>
    )
}
export default Dashboard;