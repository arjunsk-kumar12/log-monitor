
//displays the log in a grid format
function LogGrid(){

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
                    <tr>
                        <td>10:42</td>
                        <td>auth-service</td>
                        <td>INFO</td>
                        <td>User successfully logged in</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default LogGrid;