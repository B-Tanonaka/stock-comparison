import React from 'react';
import Search from './Search';

function Navbar({
  getStockInfo,
  searchQuery,
  setSearchQuery,
  budget,
  setBudget,
  numberCommas,
}) {
  return (
    <div className="Navbar">
      <div>Stockr</div>
      <Search
        getStockInfo={getStockInfo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        budget={budget}
        setBudget={setBudget}
        numberCommas={numberCommas}
      />
    </div>
  );
}

export default Navbar;
