import React from 'react';

function DateAndBudget({
  budget,
  setBudget,
  searchDate,
  setSearchDate,
}) {
  const handleStock = (e) => {
    e.preventDefault();
    setSearchDate(e.target.value);
  };

  return (
    <div className="date-budget-container">
      <div className="date-budget-wrapper">
        <span className="date-budget-text">Date</span>
        <input name="date" placeholder="date" type="date" value={searchDate} onChange={handleStock} className="date-budget-search date-box" />
      </div>
      <div className="date-budget-wrapper">
        <span className="date-budget-text">Budget</span>
        <input name="budget" placeholder="Budget" value={budget} onChange={(e) => { setBudget(e.target.value); }} className="date-budget-search budget-box" />
      </div>
    </div>
  );
}

export default DateAndBudget;
