import React from 'react';
import Search from './Search';

function Navbar({
  getStockInfo,
  searchQuery,
  setSearchQuery,
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
      />
    </div>
  );
}

export default Navbar;
