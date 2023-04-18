import React, { useState } from 'react';

function BudgetAndResult({ budget, ticker1, ticker2 }) {
  return (
    <div>
      <div className="ticker-names">
        <div>{ticker1.name.toUpperCase()}</div>
        <div>{ticker2.name.toUpperCase()}</div>
      </div>
      <div>{budget}</div>
    </div>
  );
}

export default BudgetAndResult;
