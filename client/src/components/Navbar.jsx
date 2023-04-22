import React from 'react';
import Search from './Search';
import logo from '../../dist/assets/stockr-logo.png';

function Navbar({
  getStockInfo,
  searchQuery,
  setSearchQuery,
  searchDate,
}) {
  return (
    <div className="navbar">
      <div className="navbar-title-container">
        <img src={logo} alt="Stockr bull logo" className="logo" />
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
