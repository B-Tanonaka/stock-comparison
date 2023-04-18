import React, { useState, useEffect } from 'react';

function Search({ getStockInfo, ticker1Data, ticker2Data }) {
  const initialQuery = {
    ticker: '',
    budget: 0,
    date: '',
  };

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getStockInfo(searchQuery.ticker, searchQuery.date);
    console.log('searchQuery: ', searchQuery);
  };

  return (
    <div>
      <form>
        <input name="ticker" placeholder="Stock" value={searchQuery.ticker} onChange={handleChange} />
        <input name="budget" placeholder="Budget" value={searchQuery.budget} onChange={handleChange} />
        <input name="date" value={searchQuery.date} type="date" onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}

export default Search;
