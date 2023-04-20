import React from 'react';
import Search from './Search';

function Navbar({
  getStockInfo,
  searchQuery,
  setSearchQuery,
  searchDate,
}) {
  return (
    <div className="navbar">
      <div className="navbar-title-container">
        <div className="navbar-title">Stockr</div>
      </div>
      <Search
        getStockInfo={getStockInfo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchDate={searchDate}
      />
    </div>
  );
}

export default Navbar;
