import React from 'react';

function Search({
  getStockInfo,
  searchQuery,
  setSearchQuery,
  searchDate,
}) {
  const handleStock = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getStockInfo(searchQuery, searchDate);
  };

  return (
    <div className="navbar-search-container">
      <div className="navbar-search-bubble">
        <form onSubmit={handleSubmit} className="navbar-form-wrapper">
          <input name="ticker" value={searchQuery} onChange={handleStock} className="navbar-search" />
          <i className="fa-solid fa-magnifying-glass navbar-icon" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default Search;
