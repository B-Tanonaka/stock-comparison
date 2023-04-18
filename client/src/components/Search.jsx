import React from 'react';

function Search({ getStockInfo, searchQuery, setSearchQuery, budget, setBudget }) {
  const handleStock = (e) => {
    e.preventDefault();
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getStockInfo(searchQuery.ticker, searchQuery.date);
  };

  return (
    <div>
      <form>
        <input name="ticker" placeholder="Stock" value={searchQuery.ticker} onChange={handleStock} />
        <input name="date" placeholder="date" type="date" value={searchQuery.budget} onChange={handleStock} required />
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>
      <input name="budget" placeholder="Budget" value={budget} onChange={(e) => { setBudget(e.target.value); }} />
    </div>
  );
}

export default Search;
