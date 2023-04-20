import React from 'react';

function DateAndBudget({
  budget,
  setBudget,
  searchQuery,
  setSearchQuery,
}) {
  const handleStock = (e) => {
    e.preventDefault();
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value.toUpperCase() });
  };

  return (
    <div>
      <input name="date" placeholder="date" type="date" value={searchQuery.budget} onChange={handleStock} />
      <input name="budget" placeholder="Budget" value={budget} onChange={(e) => { setBudget(e.target.value); }} />
    </div>
  );
}

export default DateAndBudget;
