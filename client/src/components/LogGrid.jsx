
//displays the log in a table format
//TODO: Need to improve ui and format
function LogGrid(props){
    const logs = props.logs;
    return (
        <div className="log-grid">
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Service</th>
                        <th>Level</th>
                        <th>Message</th>
                    </tr>
                </thead>

                <tbody>
                    {logs.map((log) =>(
                        <tr>
                            <td>{log.createdAt}</td>
                            <td>{log.service}</td>
                            <td>{log.level}</td>
                            <td>{log.message}</td>
                        </tr>   
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default LogGrid;