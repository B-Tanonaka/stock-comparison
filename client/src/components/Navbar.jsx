import React from 'react';
import Search from './Search';

function Navbar({
  getStockInfo,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <div className="navbar">
      <div>Stockr</div>
      <Search
        getStockInfo={getStockInfo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}

export default Navbar;
