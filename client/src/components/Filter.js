import React from "react"

function Filter ({search, onSearchChange}) {
    function handleSearchChange(e) {
        onSearchChange(e.target.value)
    };
return (
    <div className="Filter">
        <input
        type="text"
        name="search"
        placeholder="take a look around"
        value={search}
        onChange={handleSearchChange}
        />
    </div>
)
}

export default Filter;



