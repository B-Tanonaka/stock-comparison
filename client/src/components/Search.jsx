import React from 'react';

function Search({
  getStockInfo,
  searchQuery,
  setSearchQuery,
}) {
  const handleStock = (e) => {
    e.preventDefault();
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value.toUpperCase() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getStockInfo(searchQuery.ticker, searchQuery.date);
  };

  return (
    <div className="navbar-search-container">
      <div className="navbar-search-bubble">
        <form onSubmit={handleSubmit} className="navbar-form-wrapper">
          <input name="ticker" value={searchQuery.ticker} onChange={handleStock} className="navbar-search" />
          <i className="fa-solid fa-magnifying-glass navbar-icon" />
        </form>
      </div>
    </div>
  );
}

export default Search;
