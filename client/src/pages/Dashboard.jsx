import FilterBar from "../components/FilterBar";
import LogGrid from "../components/LogGrid";
function Dashboard(){
    return (
        <div>
            <h1>Log Monitor Dashboard</h1>
            <FilterBar />

            {/* TODO: add table/list and pagination*/}
            <LogGrid />
        </div>
    )
}
export default Dashboard;