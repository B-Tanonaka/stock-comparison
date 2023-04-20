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
    <div>
      <form>
        <input name="ticker" placeholder="Stock" value={searchQuery.ticker} onChange={handleStock} />
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}

export default Search;
