import React from 'react';

const SearchBar = ({ setSearchTerm, setLang, setCountry }) => {
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleLangChange = (event) => {
        setLang(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for news..."
                onChange={handleSearch}
            />
            <select onChange={handleLangChange}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="te">Telugu</option>
            </select>
            <select onChange={handleCountryChange}>
                <option value="us">USA</option>
                <option value="gb">UK</option>
                <option value="ca">Canada</option>
                <option value="in">India</option>
            </select>
        </div>
    );
};

export default SearchBar;
