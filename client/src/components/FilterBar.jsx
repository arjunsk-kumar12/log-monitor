// Contains fields that can be used to search logs
// -> service | Level | Sort(lexographically, date, etc)

function FilterBar(){
       
    return (
        <div className="filter-bar">
            {/* Service filter */}
            <div className="filter-group">
                <label htmlFor="service">Service</label>
                <select id="service">
                    <option value="service">All Services</option>
                    <option value="service">Auth Service</option>
                </select>
            </div>
        
            {/* Level filter */}
            <div className="filter-group">
                <label htmlFor="level">Level</label>
                <select id="level">
                    <option value="">All Levels</option>
                    <option value="INFO">INFO</option>
                    <option value="WARN">WARN</option>
                    <option value="ERROR">ERROR</option>
                    <option value="DEBUG">DEBUG</option>
                </select>
            </div>

            {/* Sort by option */}
            <div className="filter-group">
                <label htmlFor="sort">Sort by</label>
                <select id="sort">
                    <option value="sort">Ascending</option>
                    <option value="sort">Descending</option>
                    <option value="sort">Time created</option>
                </select>
            </div>

            {/* Search fields */}
            <div className="filter-group">
                <label htmlFor="search">Search</label>
                <input 
                    type="text" 
                    id="search" 
                    placeholder="search logs..."
                />
            </div>
        
        </div>
    )
}

export default FilterBar;