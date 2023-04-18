import React, { useState, useEffect } from 'react';

function Search({ getStockInfo, ticker1Data, ticker2Data }) {
  const initialQuery = {
    ticker: '',
    budget: null,
    date: null,
  };

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getStockInfo(searchQuery.ticker, searchQuery.date);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="searchTicker" value="searchTicker" onChange={handleChange} />
        <input name="searchDate" value="searchDate" type="date" onChange={handleChange} />
      </form>
      <input />
    </div>
  );
}

export default Search;
