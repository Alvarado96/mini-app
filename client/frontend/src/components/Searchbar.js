import React from "react";

const Searchbar = () => {
    const [searchInput, setSearchInput] = useState("")
    
    return (
        <>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Movies</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Movies"
            name="search" 
        />
        <button type="submit">Search</button>
    </>
    )
}

export default Searchbar;