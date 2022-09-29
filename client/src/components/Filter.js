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
        placeholder="Explore the Bravoverse!"
        value={search}
        onChange={handleSearchChange}
        />
    </div>
)
}

export default Filter;



